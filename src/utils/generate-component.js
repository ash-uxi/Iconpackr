import path from 'path';
import fs from 'fs-extra';
import { getSvgThemingProps } from './svg-attribute-handler.js';

/**
 * Clean up malformed SVG content
 * @param {string} svgContent - SVG content to clean
 * @returns {string} - Cleaned SVG content
 */
function cleanupSvgContent(svgContent) {
  let cleanedContent = svgContent;
  
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
  
  // Fix missing closing tags
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
  
  // Add "Pi" prefix to the component name
  const prefixedComponentName = `Pi${componentName}${style.charAt(0).toUpperCase() + style.slice(1)}`;
  
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
      return generateReactNative(innerSvgContent, viewBox, cleanedSvgContent, { ...options, componentName: prefixedComponentName });
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
      ${styleProps.styleAttribute}
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
      ${styleProps.styleAttribute}
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
  
  return `<template>
  <svg
    :width="size"
    :height="size"
    viewBox="${viewBox}"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    fill="none"
    ${styleProps.styleAttribute}
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
function generateReactNative(svgContent, viewBox, originalSvg, options) {
  const { componentName, style, category, iconName } = options;
  
  // For React Native, convert SVG attributes to camelCase
  const processedContent = svgContent
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/fill-opacity/g, 'fillOpacity')
    .replace(/stroke-opacity/g, 'strokeOpacity');
  
  // Get dynamic props based on SVG analysis
  const styleProps = getSvgThemingProps(originalSvg, 'react-native');
  
  return `import React from 'react';
import Svg, { Path, Circle, G, Rect, Line, Polyline, Polygon, Ellipse } from 'react-native-svg';

/**
 * ${componentName} icon from the ${style} style in ${category} category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 */
export default function ${componentName}({
  size = 24,
  color = 'currentColor',
  ...props
}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="${viewBox}"
      fill="none"
      ${styleProps.styleAttribute}
      ${styleProps.additionalProps}
      {...props}
    >
      ${processedContent}
    </Svg>
  );
}
`;
} 