import path from 'path';
import fs from 'fs-extra';
import { getSvgThemingProps } from './svg-attribute-handler.js';
import prettier from 'prettier';
import babelParser from 'prettier/parser-babel';
import { toPascalCase } from './text-utils.js';

/**
 * Clean up malformed SVG content
 * @param {string} svgContent - SVG content to clean
 * @returns {string} - Cleaned SVG content
 */
function cleanupSvgContent(svgContent) {
  let cleanedContent = svgContent;
  
  // Fix malformed path elements with stroke attributes that have misplaced closing slashes
  cleanedContent = cleanedContent.replace(/stroke-width="([^"]*)"\/\s*fill="([^"]*)"/g, 'stroke-width="$1" fill="$2"');
  cleanedContent = cleanedContent.replace(/stroke="([^"]*)"\/\s*fill="([^"]*)"/g, 'stroke="$1" fill="$2"');
  
  // Fix malformed path elements
  cleanedContent = cleanedContent.replace(/\/\s*([a-zA-Z-]+="[^"]*")/g, ' $1/>');
  
  // Fix path elements with attributes after closing tag
  cleanedContent = cleanedContent.replace(/"\/>/g, '"/>');
  
  // Fix attributes without proper quotes
  cleanedContent = cleanedContent.replace(/=([^"][^\s>]*)/g, '="$1"');
  
  // Fix paths with malformed fill attributes
  cleanedContent = cleanedContent.replace(/([^\s])fill=/g, ' fill=');
  
  // Fix double closing tags
  cleanedContent = cleanedContent.replace(/"\/>>/g, '"/>');
  
  // Fix malformed closing tags
  cleanedContent = cleanedContent.replace(/"\/ >/g, '"/>');
  cleanedContent = cleanedContent.replace(/"\s+>/g, '">');
  
  // Fix malformed self-closing tags with extra content after the slash
  cleanedContent = cleanedContent.replace(/\/\s*([^>]+)>/g, ' $1/>');
  
  // Remove any stray > character that might be part of text
  cleanedContent = cleanedContent.replace(/>\s*>/g, '>');
  
  return cleanedContent;
}

/**
 * Clean up inner SVG content for component insertion
 * @param {string} innerContent - Inner SVG content to clean
 * @returns {string} - Cleaned inner SVG content
 */
function cleanupInnerSvgContent(innerContent) {
  let cleanedContent = innerContent;
  
  // Fix malformed fill attributes
  cleanedContent = cleanedContent.replace(/\s+fill="none">/g, ' fill="none"/>');
  
  // Fix missing closing tags (but NOT for group elements that have children)
  cleanedContent = cleanedContent.replace(/<(path|circle|rect|line|polyline|polygon|ellipse)([^>]*)>(?!\s*<\/\1>)/g, '<$1$2/>');
  
  // Remove extra > characters
  cleanedContent = cleanedContent.replace(/>>+/g, '>');
  
  // Fix broken closing tags on self-closing elements
  cleanedContent = cleanedContent.replace(/"\/ fill=/g, '" fill=');
  
  // Fix double closing tags
  cleanedContent = cleanedContent.replace(/\/\/>/g, '/>');
  cleanedContent = cleanedContent.replace(/\/>"/g, '" />');
  
  // Fix malformed attributes after closing
  cleanedContent = cleanedContent.replace(/\/([^>\/\s]+)="/g, ' $1="');
  
  return cleanedContent;
}

/**
 * Generate a framework-specific component from SVG content
 * @param {string} svgContent - Optimized SVG content
 * @param {Object} options - Component generation options
 * @param {string} options.componentName - PascalCase component name
 * @param {string} options.format - Target format (react-jsx, react-tsx, vue, react-native)
 * @param {string} options.style - Icon style (stroke, solid, etc.)
 * @param {string} options.category - Icon category
 * @param {string} options.iconName - Original icon name
 * @returns {Promise<string>} Generated component code
 */
export async function generateComponent(svgContent, options) {
  const { componentName, format, style, category, iconName } = options;
  
  // Add "Pi" prefix to the component name with properly formatted style suffix
  let styleSuffix = style.charAt(0).toUpperCase() + style.slice(1);
  // Replace hyphens with PascalCase (duo-stroke -> DuoStroke)
  styleSuffix = styleSuffix.split('-').map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join('');
  const prefixedComponentName = `Pi${componentName}${styleSuffix}`;
  
  // Clean up the SVG content
  const cleanedSvgContent = cleanupSvgContent(svgContent);
  
  // Parse SVG to extract viewBox and content
  const viewBoxMatch = cleanedSvgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  
  // Extract the inner SVG content (everything between <svg> and </svg>)
  const innerSvgMatch = cleanedSvgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  const innerSvgContent = innerSvgMatch ? cleanupInnerSvgContent(innerSvgMatch[1].trim()) : '';
  
  // Generate component based on format
  switch (format) {
    case 'react-jsx':
      return generateReactJSX(innerSvgContent, viewBox, cleanedSvgContent, { ...options, componentName: prefixedComponentName });
    case 'react-tsx':
      return generateReactTSX(innerSvgContent, viewBox, cleanedSvgContent, { ...options, componentName: prefixedComponentName });
    case 'vue':
      return generateVue(innerSvgContent, viewBox, cleanedSvgContent, { ...options, componentName: prefixedComponentName });
    case 'react-native':
      return generateReactNative(prefixedComponentName, innerSvgContent, getSvgThemingProps(cleanedSvgContent, 'react-native'));
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
}

/**
 * Generate React JSX component
 */
function generateReactJSX(svgContent, viewBox, originalSvg, options) {
  const { componentName, style, category, iconName } = options;
  
  // Get dynamic props based on SVG analysis
  const styleProps = getSvgThemingProps(originalSvg, 'react-jsx');
  
  // Extract stroke attributes from the original SVG
  const strokeMatch = originalSvg.match(/stroke="([^"]*)"/);
  const strokeWidthMatch = originalSvg.match(/stroke-width="([^"]*)"/);
  const strokeLinecapMatch = originalSvg.match(/stroke-linecap="([^"]*)"/);
  const strokeLinejoinMatch = originalSvg.match(/stroke-linejoin="([^"]*)"/);
  
  // Build stroke attributes string
  let strokeAttributes = '';
  if (strokeMatch) strokeAttributes += `stroke="${strokeMatch[1]}" `;
  if (strokeWidthMatch) strokeAttributes += `stroke-width="${strokeWidthMatch[1]}" `;
  if (strokeLinecapMatch) strokeAttributes += `stroke-linecap="${strokeLinecapMatch[1]}" `;
  if (strokeLinejoinMatch) strokeAttributes += `stroke-linejoin="${strokeLinejoinMatch[1]}" `;
  
  return `import React from 'react';

/**
 * ${componentName} icon from the ${style} style in ${category} category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 */
export default function ${componentName}({ 
  size = 24, 
  color,
  className,
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="${viewBox}"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      ${strokeAttributes}${styleProps.styleAttribute}
      ${styleProps.additionalProps}
      {...props}
    >
      ${svgContent}
    </svg>
  );
}
`;
}

/**
 * Generate React TypeScript component
 */
function generateReactTSX(svgContent, viewBox, originalSvg, options) {
  const { componentName, style, category, iconName } = options;
  
  // Get dynamic props based on SVG analysis
  const styleProps = getSvgThemingProps(originalSvg, 'react-tsx');
  
  // Extract stroke attributes from the original SVG
  const strokeMatch = originalSvg.match(/stroke="([^"]*)"/);
  const strokeWidthMatch = originalSvg.match(/stroke-width="([^"]*)"/);
  const strokeLinecapMatch = originalSvg.match(/stroke-linecap="([^"]*)"/);
  const strokeLinejoinMatch = originalSvg.match(/stroke-linejoin="([^"]*)"/);
  
  // Build stroke attributes string
  let strokeAttributes = '';
  if (strokeMatch) strokeAttributes += `stroke="${strokeMatch[1]}" `;
  if (strokeWidthMatch) strokeAttributes += `stroke-width="${strokeWidthMatch[1]}" `;
  if (strokeLinecapMatch) strokeAttributes += `stroke-linecap="${strokeLinecapMatch[1]}" `;
  if (strokeLinejoinMatch) strokeAttributes += `stroke-linejoin="${strokeLinejoinMatch[1]}" `;
  
  return `import React from 'react';

/**
 * ${componentName} icon from the ${style} style in ${category} category.
 */
interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export default function ${componentName}({
  size = 24,
  color,
  className,
  ...props
}: ${componentName}Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="${viewBox}"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      ${strokeAttributes}${styleProps.styleAttribute}
      ${styleProps.additionalProps}
      {...props}
    >
      ${svgContent}
    </svg>
  );
}
`;
}

/**
 * Generate Vue component
 */
function generateVue(svgContent, viewBox, originalSvg, options) {
  const { componentName, style, category, iconName } = options;
  
  // Get dynamic props based on SVG analysis
  const styleProps = getSvgThemingProps(originalSvg, 'vue');
  
  // Extract stroke attributes from the original SVG
  const strokeMatch = originalSvg.match(/stroke="([^"]*)"/);
  const strokeWidthMatch = originalSvg.match(/stroke-width="([^"]*)"/);
  const strokeLinecapMatch = originalSvg.match(/stroke-linecap="([^"]*)"/);
  const strokeLinejoinMatch = originalSvg.match(/stroke-linejoin="([^"]*)"/);
  
  // Build stroke attributes string for Vue template
  let strokeAttributes = '';
  if (strokeMatch) strokeAttributes += `stroke="${strokeMatch[1]}" `;
  if (strokeWidthMatch) strokeAttributes += `stroke-width="${strokeWidthMatch[1]}" `;
  if (strokeLinecapMatch) strokeAttributes += `stroke-linecap="${strokeLinecapMatch[1]}" `;
  if (strokeLinejoinMatch) strokeAttributes += `stroke-linejoin="${strokeLinejoinMatch[1]}" `;
  
  return `<template>
  <svg
    :width="size"
    :height="size"
    viewBox="${viewBox}"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    fill="none"
    ${strokeAttributes}${styleProps.styleAttribute}
    v-bind="$attrs"
  >
    ${svgContent}
  </svg>
</template>

<script>
/**
 * ${componentName} icon from the ${style} style in ${category} category.
 */
export default {
  name: '${componentName}',
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: undefined
    },
    className: {
      type: String,
      default: undefined
    }
  }
}
</script>
`;
}

/**
 * Generate React Native component
 */
function generateReactNative(name, svgContent, themingProps) {
  let processedContent = svgContent;

  // Apply style-specific transformations from themingProps
  if (themingProps.styleAttribute) {
    const [attr, value] = themingProps.styleAttribute.split('=');
    // This is a very simplistic way to ensure the base color is applied via prop
    // A more robust solution would parse and modify attributes more carefully
    if (attr === 'fill') {
      processedContent = processedContent.replace(/fill="currentColor"/g, `fill={color}`);
      processedContent = processedContent.replace(/fill="(?!none)([^"]*)"/g, (match, p1) => {
        if (p1 !== 'currentColor') return `fill="${p1}"`; // Keep hardcoded secondary colors
        return `fill={color}`;
      });
    } else if (attr === 'stroke') {
      processedContent = processedContent.replace(/stroke="currentColor"/g, `stroke={color}`);
      processedContent = processedContent.replace(/stroke="(?!none)([^"]*)"/g, (match, p1) => {
        if (p1 !== 'currentColor') return `stroke="${p1}"`; // Keep hardcoded secondary colors
        return `stroke={color}`;
      });
    }
  } else {
    // Default: if no specific styleAttribute, assume generalcurrentColor conversion
    processedContent = processedContent.replace(/fill="currentColor"/g, 'fill={color}');
    processedContent = processedContent.replace(/stroke="currentColor"/g, 'stroke={color}');
  }

  // Handle opacity attributes, converting them to React Native SVG props
  // fill-opacity -> fillOpacity={value}
  processedContent = processedContent.replace(/fill-opacity="([\d\.]+)"/g, 'fillOpacity={$1}');
  // stroke-opacity -> strokeOpacity={value}
  processedContent = processedContent.replace(/stroke-opacity="([\d\.]+)"/g, 'strokeOpacity={$1}');
  // opacity -> opacity={value} (this should apply to the whole element if present)
  processedContent = processedContent.replace(/opacity="([\d\.]+)"/g, 'opacity={$1}');

  // Remove <svg> wrapper and its props, Svg component will provide them
  processedContent = processedContent.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '');

  const componentName = toPascalCase(name);
  const template = `
import React from 'react';
import Svg, { Path, Rect, Circle, Ellipse, Line, Polygon, Polyline } from 'react-native-svg';

const ${componentName} = ({ color = '#000', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    ${processedContent.trim()}
  </Svg>
);

export default ${componentName};
  `;
  return prettier.format(template, { parser: 'babel', plugins: [babelParser] });
} 