/**
 * Main component generation orchestrator
 * Refactored from the original generate-component.js monolith
 */

import { cleanupSvgContent, cleanupInnerSvgContent } from './svg-processing.js';
import { 
  generateReactJSX, 
  generateReactTSX, 
  generateVue, 
  generateReactNative, 
  generateSvelte 
} from './component-templates.js';
import { getSvgThemingProps } from './svg-attribute-handler.js';

/**
 * Generate component code for specified format
 * @param {string} svgContent - Raw SVG content
 * @param {Object} options - Generation options
 * @param {string} options.componentName - Component name (without prefix)
 * @param {string} options.format - Output format (react-jsx, vue, etc.)
 * @param {string} options.style - Icon style (stroke, solid, etc.)
 * @param {string} options.category - Icon category
 * @param {string} options.iconName - Original icon name
 * @returns {Promise<string>} Generated component code
 */
export async function generateComponent(svgContent, options) {
  const { componentName, format, style, category, iconName } = options;
  
  // Input validation
  if (!svgContent || typeof svgContent !== 'string') {
    throw new Error('SVG content is required and must be a string');
  }
  
  if (!componentName || typeof componentName !== 'string') {
    throw new Error('Component name is required and must be a string');
  }
  
  if (!format || typeof format !== 'string') {
    throw new Error('Format is required and must be a string');
  }
  
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
  
  // Prepare generation options
  const generationOptions = {
    componentName: prefixedComponentName,
    style,
    category,
    iconName
  };
  
  // Generate component based on format
  switch (format) {
    case 'react-jsx':
      return generateReactJSX(innerSvgContent, viewBox, cleanedSvgContent, generationOptions);
      
    case 'react-tsx':
      return generateReactTSX(innerSvgContent, viewBox, cleanedSvgContent, generationOptions);
      
    case 'vue':
      return generateVue(innerSvgContent, viewBox, cleanedSvgContent, generationOptions);
      
    case 'react-native':
      const themingProps = getSvgThemingProps(cleanedSvgContent);
      themingProps.viewBox = viewBox;
      themingProps.style = style;
      return generateReactNative(prefixedComponentName, innerSvgContent, themingProps);
      
    case 'svelte':
      return generateSvelte(innerSvgContent, viewBox, cleanedSvgContent, generationOptions);
      
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
}

/**
 * Get file extension for a given format
 * @param {string} format - Component format
 * @returns {string} File extension
 */
export function getExtensionForFormat(format) {
  const extensionMap = {
    'react-jsx': '.jsx',
    'react-tsx': '.tsx', 
    'vue': '.vue',
    'react-native': '.tsx',
    'svelte': '.svelte'
  };
  
  return extensionMap[format] || '.js';
}

/**
 * Validate component generation options
 * @param {Object} options - Options to validate
 * @returns {boolean} True if valid
 * @throws {Error} If validation fails
 */
export function validateGenerationOptions(options) {
  const required = ['componentName', 'format', 'style', 'category', 'iconName'];
  
  for (const field of required) {
    if (!options[field] || typeof options[field] !== 'string') {
      throw new Error(`Required field '${field}' is missing or not a string`);
    }
  }
  
  const validFormats = ['react-jsx', 'react-tsx', 'vue', 'react-native', 'svelte'];
  if (!validFormats.includes(options.format)) {
    throw new Error(`Invalid format '${options.format}'. Must be one of: ${validFormats.join(', ')}`);
  }
  
  return true;
}

/**
 * Get available component formats
 * @returns {string[]} Array of supported formats
 */
export function getSupportedFormats() {
  return ['react-jsx', 'react-tsx', 'vue', 'react-native', 'svelte'];
}