/**
 * Framework-specific component templates
 * Extracted from generate-component.js for better modularity
 */

import { convertSvgAttributesToJSX, processDuoToneSvgContent, processDuoToneVueSvgContent, processDuoToneSvelteSvgContent, processDuoToneReactNativeSvgContent } from './svg-processing.js';
import { getSvgThemingProps } from './svg-attribute-handler.js';

/**
 * Generate React JSX component
 * @param {string} svgContent - Processed SVG content
 * @param {string} viewBox - SVG viewBox
 * @param {string} originalSvg - Original SVG content
 * @param {Object} options - Component options
 * @returns {string} - React JSX component code
 */
export function generateReactJSX(svgContent, viewBox, originalSvg, options) {
  const { componentName, style, iconName } = options;
  
  // Convert SVG attributes to JSX format
  let jsxContent = convertSvgAttributesToJSX(svgContent);
  
  // Process duo-tone styles
  jsxContent = processDuoToneSvgContent(jsxContent, style);
  
  // Get theming properties
  const themingProps = getSvgThemingProps(originalSvg);
  
  return `import React from 'react';

interface ${componentName}Props {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function ${componentName}({ 
  size = 24, 
  color = 'currentColor', 
  className, 
  ariaLabel = '${iconName} icon' 
}: ${componentName}Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="${viewBox}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={ariaLabel}
      role="img"
      ${themingProps.hasStroke ? 'stroke={color}' : ''}
      ${themingProps.hasFill ? 'fill={color}' : ''}
    >
      ${jsxContent}
    </svg>
  );
}`;
}

/**
 * Generate React TSX component
 * @param {string} svgContent - Processed SVG content
 * @param {string} viewBox - SVG viewBox
 * @param {string} originalSvg - Original SVG content
 * @param {Object} options - Component options
 * @returns {string} - React TSX component code
 */
export function generateReactTSX(svgContent, viewBox, originalSvg, options) {
  const { componentName, style, iconName } = options;
  
  // Convert SVG attributes to JSX format
  let jsxContent = convertSvgAttributesToJSX(svgContent);
  
  // Process duo-tone styles
  jsxContent = processDuoToneSvgContent(jsxContent, style);
  
  // Get theming properties
  const themingProps = getSvgThemingProps(originalSvg);
  
  return `import React from 'react';

interface ${componentName}Props {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function ${componentName}({
  size = 24,
  color = 'currentColor',
  className,
  ariaLabel = '${iconName} icon'
}: ${componentName}Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="${viewBox}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={ariaLabel}
      role="img"
      ${themingProps.hasStroke ? 'stroke={color}' : ''}
      ${themingProps.hasFill ? 'fill={color}' : ''}
    >
      ${jsxContent}
    </svg>
  );
}`;
}

/**
 * Generate Vue component
 * @param {string} svgContent - Processed SVG content
 * @param {string} viewBox - SVG viewBox
 * @param {string} originalSvg - Original SVG content
 * @param {Object} options - Component options
 * @returns {string} - Vue component code
 */
export function generateVue(svgContent, viewBox, originalSvg, options) {
  const { componentName, style, iconName } = options;
  
  // Process duo-tone styles for Vue
  let vueContent = processDuoToneVueSvgContent(svgContent, style);
  
  // Get theming properties
  const themingProps = getSvgThemingProps(originalSvg);
  
  return `<template>
  <svg
    :width="size"
    :height="size"
    viewBox="${viewBox}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    :aria-label="ariaLabel"
    role="img"
    ${themingProps.hasStroke ? ':stroke="color"' : ''}
    ${themingProps.hasFill ? ':fill="color"' : ''}
  >
    ${vueContent}
  </svg>
</template>

<script>
export default {
  name: '${componentName}',
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: 'currentColor'
    },
    className: {
      type: String,
      default: ''
    },
    ariaLabel: {
      type: String,
      default: '${iconName} icon'
    }
  }
};
</script>`;
}

/**
 * Generate React Native component
 * @param {string} name - Component name
 * @param {string} svgContent - Processed SVG content
 * @param {Object} themingProps - Theming properties
 * @returns {string} - React Native component code
 */
export function generateReactNative(name, svgContent, themingProps) {
  // Process duo-tone styles for React Native
  let rnContent = processDuoToneReactNativeSvgContent(svgContent, themingProps.style);
  
  // Convert to React Native SVG components
  rnContent = rnContent
    .replace(/<path/g, '<Path')
    .replace(/<\/path>/g, '</Path>')
    .replace(/<circle/g, '<Circle')
    .replace(/<\/circle>/g, '</Circle>')
    .replace(/<rect/g, '<Rect')
    .replace(/<\/rect>/g, '</Rect>')
    .replace(/<line/g, '<Line')
    .replace(/<\/line>/g, '</Line>')
    .replace(/<polygon/g, '<Polygon')
    .replace(/<\/polygon>/g, '</Polygon>')
    .replace(/<polyline/g, '<Polyline')
    .replace(/<\/polyline>/g, '</Polyline>')
    .replace(/<ellipse/g, '<Ellipse')
    .replace(/<\/ellipse>/g, '</Ellipse>');

  return `import React from 'react';
import { Svg, Path, Circle, Rect, Line, Polygon, Polyline, Ellipse } from 'react-native-svg';

interface ${name}Props {
  size?: number;
  color?: string;
  secondaryOpacity?: number;
}

export default function ${name}({ 
  size = 24, 
  color = 'currentColor',
  secondaryOpacity = 0.5
}: ${name}Props) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="${themingProps.viewBox}"
      fill="none"
      ${themingProps.hasStroke ? 'stroke={color}' : ''}
      ${themingProps.hasFill ? 'fill={color}' : ''}
    >
      ${rnContent}
    </Svg>
  );
}`;
}

/**
 * Generate Svelte component
 * @param {string} svgContent - Processed SVG content
 * @param {string} viewBox - SVG viewBox
 * @param {string} originalSvg - Original SVG content
 * @param {Object} options - Component options
 * @returns {string} - Svelte component code
 */
export function generateSvelte(svgContent, viewBox, originalSvg, options) {
  const { componentName, style, iconName } = options;
  
  // Process duo-tone styles for Svelte
  let svelteContent = processDuoToneSvelteSvgContent(svgContent, style);
  
  // Get theming properties
  const themingProps = getSvgThemingProps(originalSvg);
  
  return `<script>
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = '${iconName} icon';
</script>

<svg
  width={size}
  height={size}
  viewBox="${viewBox}"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  aria-label={ariaLabel}
  role="img"
  ${themingProps.hasStroke ? 'stroke={color || "currentColor"}' : ''}
  ${themingProps.hasFill ? 'fill={color || "currentColor"}' : ''}
>
  {@html \`${svelteContent}\`}
</svg>`;
}