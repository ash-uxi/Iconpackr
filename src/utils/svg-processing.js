/**
 * SVG content processing utilities
 * Extracted from generate-component.js for better modularity
 */

/**
 * Convert SVG attributes from kebab-case to camelCase for JSX
 * @param {string} svgContent - SVG content with kebab-case attributes
 * @returns {string} - SVG content with camelCase attributes
 */
export function convertSvgAttributesToJSX(svgContent) {
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
    
    // Text attributes
    'text-anchor': 'textAnchor',
    'text-decoration': 'textDecoration',
    'text-rendering': 'textRendering',
    'dominant-baseline': 'dominantBaseline',
    'alignment-baseline': 'alignmentBaseline',
    
    // Other common attributes
    'vector-effect': 'vectorEffect',
    'shape-rendering': 'shapeRendering',
    'color-interpolation': 'colorInterpolation',
    'color-interpolation-filters': 'colorInterpolationFilters',
    'flood-color': 'floodColor',
    'lighting-color': 'lightingColor',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    
    // XML namespace attributes (keep as-is but convert to camelCase)
    'xml:lang': 'xmlLang',
    'xml:space': 'xmlSpace',
    'xmlns:xlink': 'xmlnsXlink'
  };

  let convertedContent = svgContent;
  
  // Convert each attribute
  Object.entries(attributeMap).forEach(([kebabCase, camelCase]) => {
    const regex = new RegExp(`\\b${kebabCase}=`, 'g');
    convertedContent = convertedContent.replace(regex, `${camelCase}=`);
  });

  return convertedContent;
}

/**
 * Clean up and normalize SVG content
 * @param {string} svgContent - Raw SVG content
 * @returns {string} - Cleaned SVG content
 */
export function cleanupSvgContent(svgContent) {
  if (!svgContent || typeof svgContent !== 'string') {
    return '';
  }

  let cleaned = svgContent
    // Remove XML declaration and DOCTYPE
    .replace(/<\?xml[^>]*\?>/g, '')
    .replace(/<!DOCTYPE[^>]*>/g, '')
    // Remove comments
    .replace(/<!--[\s\S]*?-->/g, '')
    // Normalize whitespace
    .replace(/\s+/g, ' ')
    .trim();

  // Ensure there's a fill="none" if no fill is specified on the svg element
  if (cleaned.includes('<svg') && !cleaned.match(/<svg[^>]*fill=/)) {
    cleaned = cleaned.replace('<svg', '<svg fill="none"');
  }

  return cleaned;
}

/**
 * Clean up inner SVG content (content between <svg> tags)
 * @param {string} innerContent - Inner SVG content
 * @returns {string} - Cleaned inner content
 */
export function cleanupInnerSvgContent(innerContent) {
  if (!innerContent || typeof innerContent !== 'string') {
    return '';
  }

  return innerContent
    // Remove extra whitespace and normalize
    .replace(/>\s+</g, '><')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Process duo-tone SVG content for React components
 * @param {string} svgContent - SVG content to process
 * @param {string} style - Icon style
 * @returns {string} - Processed SVG content
 */
export function processDuoToneSvgContent(svgContent, style) {
  if (style === 'duo-solid' || style === 'duo-stroke') {
    // Find all paths with opacity and convert them to use CSS variables
    return svgContent.replace(/opacity="0\.[0-9]+"/g, 'opacity="var(--icon-opacity-secondary, 0.5)"');
  }
  return svgContent;
}

/**
 * Process duo-tone SVG content for Vue components
 * @param {string} svgContent - SVG content to process  
 * @param {string} style - Icon style
 * @returns {string} - Processed SVG content
 */
export function processDuoToneVueSvgContent(svgContent, style) {
  if (style === 'duo-solid' || style === 'duo-stroke') {
    // Convert opacity attributes to Vue-style CSS variables
    return svgContent.replace(/opacity="0\.[0-9]+"/g, 'opacity="var(--icon-opacity-secondary, 0.5)"');
  }
  return svgContent;
}

/**
 * Process duo-tone SVG content for Svelte components
 * @param {string} svgContent - SVG content to process
 * @param {string} style - Icon style  
 * @returns {string} - Processed SVG content
 */
export function processDuoToneSvelteSvgContent(svgContent, style) {
  if (style === 'duo-solid' || style === 'duo-stroke') {
    // Convert opacity for Svelte CSS variables
    return svgContent.replace(/opacity="0\.[0-9]+"/g, 'opacity="var(--icon-opacity-secondary, 0.5)"');
  }
  return svgContent;
}

/**
 * Process duo-tone SVG content for React Native components
 * @param {string} svgContent - SVG content to process
 * @param {string} style - Icon style
 * @returns {string} - Processed SVG content  
 */
export function processDuoToneReactNativeSvgContent(svgContent, style) {
  if (style === 'duo-solid' || style === 'duo-stroke') {
    // For React Native, use a secondary opacity prop
    return svgContent.replace(/opacity="0\.[0-9]+"/g, 'opacity={secondaryOpacity}');
  }
  return svgContent;
}