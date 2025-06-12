import path from 'path';
import fs from 'fs';
import { getSvgThemingProps } from './svg-attribute-handler.js';
import prettier from 'prettier';
import babelParser from 'prettier/parser-babel';
import { toPascalCase } from './text-utils.js';

/**
 * Convert SVG attributes from kebab-case to camelCase for JSX
 * @param {string} svgContent - SVG content with kebab-case attributes
 * @returns {string} - SVG content with camelCase attributes
 */
function convertSvgAttributesToJSX(svgContent) {
  const attributeMap = {
    // Stroke attributes
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap', 
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-opacity': 'strokeOpacity',
    
    // Fill attributes
    'fill-rule': 'fillRule',
    'fill-opacity': 'fillOpacity',
    
    // Clip and mask attributes
    'clip-rule': 'clipRule',
    'clip-path': 'clipPath',
    'mask-type': 'maskType',
    
    // Color attributes
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'flood-color': 'floodColor',
    'flood-opacity': 'floodOpacity',
    'lighting-color': 'lightingColor',
    
    // Transform attributes
    'transform-origin': 'transformOrigin',
    'gradient-transform': 'gradientTransform',
    'pattern-transform': 'patternTransform',
    
    // Text attributes
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'font-weight': 'fontWeight',
    'font-style': 'fontStyle',
    'text-anchor': 'textAnchor',
    'text-decoration': 'textDecoration',
    'dominant-baseline': 'dominantBaseline',
    
    // Other common attributes
    'vector-effect': 'vectorEffect',
    'paint-order': 'paintOrder',
    'marker-start': 'markerStart',
    'marker-mid': 'markerMid',
    'marker-end': 'markerEnd',
    'shape-rendering': 'shapeRendering',
    'color-interpolation': 'colorInterpolation',
    'color-interpolation-filters': 'colorInterpolationFilters'
  };
  
  let jsxContent = svgContent;
  
  // Convert each kebab-case attribute to camelCase
  for (const [kebabCase, camelCase] of Object.entries(attributeMap)) {
    const regex = new RegExp(`\\b${kebabCase}=`, 'g');
    jsxContent = jsxContent.replace(regex, `${camelCase}=`);
  }
  
  return jsxContent;
}

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
  
  // Fix malformed path elements - but NOT the root svg element
  cleanedContent = cleanedContent.replace(/(<(?!svg\b)[^>]+)\/\s*([a-zA-Z-]+="[^"]*")/g, '$1 $2/>');
  
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
  
  // Fix malformed self-closing tags with extra content after the slash - but NOT for svg
  cleanedContent = cleanedContent.replace(/(<(?!svg\b)[^>]+)\/\s*([^>]+)>/g, '$1 $2/>');
  
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
  
  // First, fix missing self-closing tags for elements that should be self-closing
  // But only if they don't already end with /> or have a proper closing tag
  cleanedContent = cleanedContent.replace(/<(path|circle|rect|line|polyline|polygon|ellipse)([^>]*?)>(?!\s*<\/\1>)/g, (match, tagName, attributes) => {
    // Check if it's already self-closing by looking at the original match
    if (match.includes('/>')) {
      return match; // Already self-closing, don't modify
    }
    // Ensure attributes are properly spaced
    const cleanAttributes = attributes.trim();
    return `<${tagName}${cleanAttributes ? ' ' + cleanAttributes : ''}/>`;
  });
  
  // Remove any double slashes that might have been created
  cleanedContent = cleanedContent.replace(/\/\/>/g, '/>');
  
  // Fix any remaining malformed attributes
  cleanedContent = cleanedContent.replace(/"\/ fill=/g, '" fill=');
  cleanedContent = cleanedContent.replace(/>>+/g, '>');
  
  return cleanedContent;
}

/**
 * Process duo-tone SVG content to use unified color with preserved opacity
 * @param {string} svgContent - The JSX-converted SVG content
 * @param {string} style - The icon style (duo-stroke or duo-solid)
 * @returns {string} Processed SVG content with unified color handling
 */
function processDuoToneSvgContent(svgContent, style) {
  if (style === 'duo-stroke') {
    // For duo-stroke: all elements use the same stroke color, opacity is preserved
    return svgContent.replace(/stroke="[^"]*"/g, 'stroke={color || "currentColor"}');
  } else if (style === 'duo-solid') {
    // For duo-solid: all fill elements use the same color, remove stroke attributes (solid style)
    return svgContent
      .replace(/fill="[^"]*"/g, 'fill={color || "currentColor"}')
      .replace(/stroke="[^"]*"/g, '') // Remove stroke attributes completely
      .replace(/\s+/g, ' ') // Clean up extra spaces
      .replace(/\s+>/g, '>'); // Clean up spaces before closing >
  }
  return svgContent;
}

/**
 * Process duo-tone SVG content for Vue templates with unified color
 * @param {string} svgContent - The SVG content
 * @param {string} style - The icon style (duo-stroke or duo-solid)
 * @returns {string} Processed SVG content with Vue unified color handling
 */
function processDuoToneVueSvgContent(svgContent, style) {
  if (style === 'duo-stroke') {
    // For duo-stroke: all elements use the same stroke color, opacity is preserved
    return svgContent.replace(/stroke="[^"]*"/g, ':stroke="color || \'currentColor\'"');
  } else if (style === 'duo-solid') {
    // For duo-solid: all elements use the same color, remove stroke attributes (solid style)
    return svgContent
      .replace(/fill="[^"]*"/g, ':fill="color || \'currentColor\'"')
      .replace(/stroke="[^"]*"/g, '') // Remove stroke attributes completely
      .replace(/\s+/g, ' ') // Clean up extra spaces
      .replace(/\s+>/g, '>'); // Clean up spaces before closing >
  }
  return svgContent;
}

/**
 * Process duo-tone SVG content for Svelte templates with unified color
 * @param {string} svgContent - The SVG content
 * @param {string} style - The icon style (duo-stroke or duo-solid)
 * @returns {string} Processed SVG content with Svelte unified color handling
 */
function processDuoToneSvelteSvgContent(svgContent, style) {
  if (style === 'duo-stroke') {
    // For duo-stroke: all elements use the same stroke color, opacity is preserved
    return svgContent.replace(/stroke="[^"]*"/g, 'stroke={color || "currentColor"}');
  } else if (style === 'duo-solid') {
    // For duo-solid: all elements use the same color, remove stroke attributes (solid style)
    return svgContent
      .replace(/fill="[^"]*"/g, 'fill={color || "currentColor"}')
      .replace(/stroke="[^"]*"/g, '') // Remove stroke attributes completely
      .replace(/\s+/g, ' ') // Clean up extra spaces
      .replace(/\s+>/g, '>'); // Clean up spaces before closing >
  }
  return svgContent;
}

/**
 * Process duo-tone SVG content for React Native with unified color
 * @param {string} svgContent - The JSX-converted SVG content
 * @param {string} style - The icon style (duo-stroke or duo-solid)
 * @returns {string} Processed SVG content with React Native unified color handling
 */
function processDuoToneReactNativeSvgContent(svgContent, style) {
  if (style === 'duo-stroke') {
    // For duo-stroke: all elements use the same stroke color, opacity is preserved
    return svgContent.replace(/stroke="[^"]*"/g, 'stroke={color || "currentColor"}');
  } else if (style === 'duo-solid') {
    // For duo-solid: all elements use the same color, remove stroke attributes (solid style)
    return svgContent
      .replace(/fill="[^"]*"/g, 'fill={color || "currentColor"}')
      .replace(/stroke="[^"]*"/g, '') // Remove stroke attributes completely
      .replace(/\s+/g, ' ') // Clean up extra spaces
      .replace(/\s+>/g, '>'); // Clean up spaces before closing >
  }
  return svgContent;
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
    case 'svelte':
      return generateSvelte(innerSvgContent, viewBox, cleanedSvgContent, { ...options, componentName: prefixedComponentName });
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
}

/**
 * Generate React JSX component
 */
function generateReactJSX(svgContent, viewBox, originalSvg, options) {
  const { componentName, style, category, iconName } = options;
  
  // Convert SVG content to JSX-compatible attributes
  let jsxSvgContent = convertSvgAttributesToJSX(svgContent);
  
  // Get dynamic props based on SVG analysis
  const styleProps = getSvgThemingProps(originalSvg, 'react-jsx');
  
  // Handle duo-tone icons with unified color support
  const isDuoTone = style === 'duo-stroke' || style === 'duo-solid';
  if (isDuoTone) {
    // Process duo-tone SVG content to support unified colors
    jsxSvgContent = processDuoToneSvgContent(jsxSvgContent, style);
  }
  
  // Extract stroke attributes from the original SVG (convert to camelCase)
  const strokeMatch = originalSvg.match(/stroke="([^"]*)"/);
  const strokeWidthMatch = originalSvg.match(/stroke-width="([^"]*)"/);
  const strokeLinecapMatch = originalSvg.match(/stroke-linecap="([^"]*)"/);
  const strokeLinejoinMatch = originalSvg.match(/stroke-linejoin="([^"]*)"/);
  
  // Determine SVG attributes based on style
  let svgStrokeAttrs = '';
  let svgFillAttr = '';
  
  if (style === 'solid' || style === 'duo-solid') {
    // Solid and duo-solid icons: no stroke attributes, no fill="none"
    svgStrokeAttrs = '';
    svgFillAttr = ''; // Let fill flow through from path elements
  } else {
    // For stroke, contrast, and duo-stroke icons: include stroke attributes and fill="none"
    const stroke = strokeMatch ? strokeMatch[1] : 'currentColor';
    const strokeWidth = strokeWidthMatch ? strokeWidthMatch[1] : '2';
    const strokeLinecap = strokeLinecapMatch ? strokeLinecapMatch[1] : 'round';
    const strokeLinejoin = strokeLinejoinMatch ? strokeLinejoinMatch[1] : 'round';
    
    svgStrokeAttrs = `stroke="currentColor" strokeWidth="${strokeWidth}" strokeLinecap="${strokeLinecap}" strokeLinejoin="${strokeLinejoin}"`;
    svgFillAttr = 'fill="none"';
  }
  
  return `import React from 'react';

/**
 * ${componentName} icon from the ${style} style in ${category} category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function ${componentName}({ 
  size = 24, 
  color,
  className,
  ariaLabel = '${iconName} icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="${viewBox}"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      ${svgFillAttr}
      ${svgStrokeAttrs} style={{color: color || "currentColor"}}
      ${styleProps.accessibility || ''}
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      ${jsxSvgContent}
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
  
  // Convert SVG content to JSX-compatible attributes
  let jsxSvgContent = convertSvgAttributesToJSX(svgContent);
  
  // Get dynamic props based on SVG analysis
  const styleProps = getSvgThemingProps(originalSvg, 'react-tsx');
  
  // Handle duo-tone icons with unified color
  const isDuoTone = style === 'duo-stroke' || style === 'duo-solid';
  if (isDuoTone) {
    // Process duo-tone SVG content with unified color handling
    jsxSvgContent = processDuoToneSvgContent(jsxSvgContent, style);
  }
  
  // Extract stroke attributes from the original SVG (convert to camelCase)
  const strokeMatch = originalSvg.match(/stroke="([^"]*)"/);
  const strokeWidthMatch = originalSvg.match(/stroke-width="([^"]*)"/);
  const strokeLinecapMatch = originalSvg.match(/stroke-linecap="([^"]*)"/);
  const strokeLinejoinMatch = originalSvg.match(/stroke-linejoin="([^"]*)"/);
  
  // Determine SVG attributes based on style
  let svgStrokeAttrs = '';
  let svgFillAttr = '';
  
  if (style === 'solid' || style === 'duo-solid') {
    // Solid and duo-solid icons: no stroke attributes, no fill="none"
    svgStrokeAttrs = '';
    svgFillAttr = ''; // Let fill flow through from path elements
  } else {
    // For stroke, contrast, and duo-stroke icons: include stroke attributes and fill="none"
    const stroke = strokeMatch ? strokeMatch[1] : 'currentColor';
    const strokeWidth = strokeWidthMatch ? strokeWidthMatch[1] : '2';
    const strokeLinecap = strokeLinecapMatch ? strokeLinecapMatch[1] : 'round';
    const strokeLinejoin = strokeLinejoinMatch ? strokeLinejoinMatch[1] : 'round';
    
    svgStrokeAttrs = `stroke="currentColor" strokeWidth="${strokeWidth}" strokeLinecap="${strokeLinecap}" strokeLinejoin="${strokeLinejoin}"`;
    svgFillAttr = 'fill="none"';
  }
  
  return `import React from 'react';

/**
 * ${componentName} icon from the ${style} style in ${category} category.
 */
interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function ${componentName}({
  size = 24,
  color,
  className,
  ariaLabel = '${iconName} icon',
  ...props
}: ${componentName}Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="${viewBox}"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      ${svgFillAttr}
      ${svgStrokeAttrs} style={{color: color || "currentColor"}}
      ${styleProps.accessibility || ''}
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      ${jsxSvgContent}
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
  
  // Convert SVG content to Vue-compatible format
  let vueSvgContent = svgContent;
  
  // Get dynamic props based on SVG analysis
  const styleProps = getSvgThemingProps(originalSvg, 'vue');
  
  // Handle duo-tone icons with unified color
  const isDuoTone = style === 'duo-stroke' || style === 'duo-solid';
  if (isDuoTone) {
    // Process duo-tone SVG content with unified color handling
    vueSvgContent = processDuoToneVueSvgContent(vueSvgContent, style);
  }
  
  // Extract stroke attributes from the original SVG
  const strokeMatch = originalSvg.match(/stroke="([^"]*)"/);
  const strokeWidthMatch = originalSvg.match(/stroke-width="([^"]*)"/);
  const strokeLinecapMatch = originalSvg.match(/stroke-linecap="([^"]*)"/);
  const strokeLinejoinMatch = originalSvg.match(/stroke-linejoin="([^"]*)"/);
  
  // Determine SVG attributes based on style
  let svgStrokeAttrs = '';
  let svgFillAttr = '';
  
  if (style === 'solid' || style === 'duo-solid') {
    // Solid and duo-solid icons: no stroke attributes on SVG element
    svgStrokeAttrs = '';
    svgFillAttr = ''; // Let fill flow through from path elements
  } else {
    // For stroke, contrast, and duo-stroke icons: include stroke attributes and fill="none"
    const stroke = strokeMatch ? strokeMatch[1] : 'currentColor';
    const strokeWidth = strokeWidthMatch ? strokeWidthMatch[1] : '2';
    const strokeLinecap = strokeLinecapMatch ? strokeLinecapMatch[1] : 'round';
    const strokeLinejoin = strokeLinejoinMatch ? strokeLinejoinMatch[1] : 'round';
    
    svgStrokeAttrs = `stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-linejoin="${strokeLinejoin}"`;
    svgFillAttr = 'fill="none"';
  }
  
  // Create accessible label
  const cleanIconName = componentName.replace(/^Pi/, '').replace(/(Stroke|Solid|Contrast|DuoStroke|DuoSolid)$/, '');
  const accessibleName = cleanIconName.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
  
  return `<template>
  <svg
    :width="size"
    :height="size"
    viewBox="${viewBox}"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    ${svgFillAttr}
    ${svgStrokeAttrs} :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    ${vueSvgContent}
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
    },
    ariaLabel: {
      type: String,
      default: '${iconName} icon'
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
  // First convert all SVG attributes to JSX camelCase format
  let processedContent = convertSvgAttributesToJSX(svgContent);

  // Determine if this is a duo-tone icon
  const isDuoTone = name.includes('DuoStroke') || name.includes('DuoSolid');
  const style = name.includes('DuoSolid') ? 'duo-solid' : 
               name.includes('DuoStroke') ? 'duo-stroke' :
               name.includes('Solid') ? 'solid' :
               name.includes('Contrast') ? 'contrast' : 'stroke';

  // Handle duo-tone processing with unified color
  if (isDuoTone) {
    processedContent = processDuoToneReactNativeSvgContent(processedContent, style);
  } else {
    // Apply style-specific transformations from themingProps for non-duo-tone
    if (themingProps.styleAttribute) {
      const [attr, value] = themingProps.styleAttribute.split('=');
      // Enhanced color handling for different icon styles
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
      // Default: if no specific styleAttribute, assume general currentColor conversion
      processedContent = processedContent.replace(/fill="currentColor"/g, 'fill={color}');
      processedContent = processedContent.replace(/stroke="currentColor"/g, 'stroke={color}');
    }
  }

  // Enhanced opacity handling for duo-tone icons (already camelCase from conversion)
  processedContent = processedContent.replace(/fillOpacity="([\d\.]+)"/g, 'fillOpacity={$1}');
  processedContent = processedContent.replace(/strokeOpacity="([\d\.]+)"/g, 'strokeOpacity={$1}');
  processedContent = processedContent.replace(/opacity="([\d\.]+)"/g, 'opacity={$1}');

  // Convert lowercase SVG elements to React Native SVG components (Path, Circle, etc.)
  processedContent = processedContent.replace(/<path\b/g, '<Path');
  processedContent = processedContent.replace(/<\/path>/g, '</Path>');
  processedContent = processedContent.replace(/<circle\b/g, '<Circle');
  processedContent = processedContent.replace(/<\/circle>/g, '</Circle>');
  processedContent = processedContent.replace(/<rect\b/g, '<Rect');
  processedContent = processedContent.replace(/<\/rect>/g, '</Rect>');
  processedContent = processedContent.replace(/<ellipse\b/g, '<Ellipse');
  processedContent = processedContent.replace(/<\/ellipse>/g, '</Ellipse>');
  processedContent = processedContent.replace(/<line\b/g, '<Line');
  processedContent = processedContent.replace(/<\/line>/g, '</Line>');
  processedContent = processedContent.replace(/<polygon\b/g, '<Polygon');
  processedContent = processedContent.replace(/<\/polygon>/g, '</Polygon>');
  processedContent = processedContent.replace(/<polyline\b/g, '<Polyline');
  processedContent = processedContent.replace(/<\/polyline>/g, '</Polyline>');
  processedContent = processedContent.replace(/<g\b/g, '<G');
  processedContent = processedContent.replace(/<\/g>/g, '</G>');

  // Remove <svg> wrapper and its props, Svg component will provide them
  processedContent = processedContent.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '');

  const componentName = toPascalCase(name);
  
  // Create accessible label
  const cleanIconName = name.replace(/^Pi/, '').replace(/(Stroke|Solid|Contrast|DuoStroke|DuoSolid)$/, '');
  const accessibleName = cleanIconName.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
  
  const template = `
import React from 'react';
import Svg, { Path, Circle, Rect, Ellipse, Line, Polygon, Polyline, G } from 'react-native-svg';

/**
 * ${componentName} icon from the ${style} style.
 * @param {Object} props - Component props
 * @param {string} [props.color] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function ${componentName}({ 
  size = 24, 
  color,
  className,
  ariaLabel = '${accessibleName} icon',
  ...props 
}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      ${processedContent.trim()}
    </Svg>
  );
}
  `;
  return prettier.format(template, { parser: 'babel', plugins: [babelParser] });
}

/**
 * Generate Svelte component
 */
function generateSvelte(svgContent, viewBox, originalSvg, options) {
  const { componentName, style, category, iconName } = options;
  
  // Convert SVG content to Svelte-compatible format
  let svelteSvgContent = svgContent;
  
  // Get dynamic props based on SVG analysis
  const styleProps = getSvgThemingProps(originalSvg, 'svelte');
  
  // Handle duo-tone icons with unified color
  const isDuoTone = style === 'duo-stroke' || style === 'duo-solid';
  if (isDuoTone) {
    // Process duo-tone SVG content with unified color handling
    svelteSvgContent = processDuoToneSvelteSvgContent(svelteSvgContent, style);
  }
  
  // Extract stroke attributes from the original SVG
  const strokeMatch = originalSvg.match(/stroke="([^"]*)"/);
  const strokeWidthMatch = originalSvg.match(/stroke-width="([^"]*)"/);
  const strokeLinecapMatch = originalSvg.match(/stroke-linecap="([^"]*)"/);
  const strokeLinejoinMatch = originalSvg.match(/stroke-linejoin="([^"]*)"/);
  
  // Determine SVG attributes based on style
  let svgStrokeAttrs = '';
  let svgFillAttr = '';
  
  if (style === 'solid' || style === 'duo-solid') {
    // Solid and duo-solid icons: no stroke attributes, no fill="none"
    svgStrokeAttrs = '';
    svgFillAttr = ''; // Let fill flow through from path elements
  } else {
    // For stroke, contrast, and duo-stroke icons: include stroke attributes and fill="none"
    const stroke = strokeMatch ? strokeMatch[1] : 'currentColor';
    const strokeWidth = strokeWidthMatch ? strokeWidthMatch[1] : '2';
    const strokeLinecap = strokeLinecapMatch ? strokeLinecapMatch[1] : 'round';
    const strokeLinejoin = strokeLinejoinMatch ? strokeLinejoinMatch[1] : 'round';
    
    svgStrokeAttrs = `stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-linejoin="${strokeLinejoin}"`;
    svgFillAttr = 'fill="none"';
  }
  
  // Create accessible label
  const cleanIconName = componentName.replace(/^Pi/, '').replace(/(Stroke|Solid|Contrast|DuoStroke|DuoSolid)$/, '');
  const accessibleName = cleanIconName.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
  
  return `<script>
  /**
   * ${componentName} icon from the ${style} style in ${category} category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = '${iconName} icon';
</script>

<svg
  width={size}
  height={size}
  viewBox="${viewBox}"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  ${svgFillAttr}
  ${svgStrokeAttrs} style="color: {color || 'currentColor'}"
  role="img"
  aria-label={ariaLabel}
  {...$$restProps}
>
  ${svelteSvgContent}
</svg>
`;
} 