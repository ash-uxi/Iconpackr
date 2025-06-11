import { optimize } from 'svgo';

/**
 * Conservative SVGO configuration to prevent malformed output
 * Focuses on safe optimizations that won't break icon structure
 */
const svgoConfig = {
  multipass: false,       // Single pass to prevent conflicts
  floatPrecision: 2,      // Conservative precision
  
  plugins: [
    // Safe cleanup plugins
    'removeDoctype',
    'removeXMLProcInst', 
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeEmptyText',
    'removeEmptyContainers',
    
    // Basic cleanup
    'cleanupAttrs',
    'removeUnusedNS',
    
    // DISABLED aggressive plugins that cause issues:
    // 'cleanupIds' - can break references
    // 'removeUnknownsAndDefaults' - too aggressive
    // 'inlineStyles' - can break theming
    // 'minifyStyles' - can break theming
    // 'convertStyleToAttrs' - can break theming
    // 'convertColors' - we handle colors ourselves
    // 'convertPathData' - can break complex paths
    // 'convertShapeToPath' - can break intended shapes
    // 'moveGroupAttrsToElems' - can break duo-tone icons
    // 'collapseGroups' - can break duo-tone icons
    // 'mergePaths' - can break multi-path icons
    
    // Safe optimizations
    'removeRasterImages',
    'sortAttrs',
    
    // Keep dimensions and viewBox as-is initially
    'removeDimensions',
    // Don't remove viewBox - preserve it
    
    // Add consistent attributes without overriding existing ones
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          { width: '24' },
          { height: '24' },
          { viewBox: '0 0 24 24' }
          // Don't add fill="none" here - let the theming handle it
        ]
      }
    }
  ]
};

/**
 * Simple SVG processor with comprehensive optimization and theming
 * @param {string} svgContent - Raw SVG content
 * @returns {string} Optimized and themed SVG
 */
export function processSvg(svgContent) {
  try {
    // Optimize with SVGO
    const result = optimize(svgContent, svgoConfig);
    
    if (result.error) {
      console.warn('SVGO optimization failed:', result.error);
      return svgContent;
    }
    
    // Get the optimized SVG
    let processedSvg = result.data;
    
    // Fix common malformed syntax patterns that can occur during processing
    processedSvg = processedSvg
      // Fix malformed closing tags with extra attributes
      .replace(/("[\d.]+")\/\s*([a-zA-Z-]+="[^"]*")>/g, '$1" $2>')  // "0.28"/ fill="none"> -> "0.28" fill="none">
      .replace(/("[\d.]+")\/\s*>/g, '$1"/>')  // "0.28"/> -> "0.28"/>
      
      // Fix malformed self-closing path tags
      .replace(/<path([^>]*?)\/\s*([a-zA-Z-]+="[^"]*")>/g, '<path$1 $2/>')  // <path.../ fill="none"> -> <path... fill="none"/>
      
      // Fix any remaining malformed patterns
      .replace(/\/\s*([a-zA-Z-]+="[^"]*")>/g, ' $1>')  // / fill="none"> -> fill="none">
      .replace(/\/\s*>/g, '/>')  // Ensure proper self-closing syntax
      
      // Clean up any double spaces or malformed spacing
      .replace(/\s+/g, ' ')
      .replace(/\s*\/\s*>/g, '/>')
      .replace(/\s*>\s*/g, '>')
      
      // Fix double quotes issue: opacity="0.28""/ -> opacity="0.28"
      .replace(/("[\d.]+")"+/g, '$1')  // Remove extra quotes
      .replace(/""+/g, '"');  // Clean up any remaining double quotes
    
    // Only apply basic color theming - preserve opacity and special attributes  
    processedSvg = processedSvg
      // Replace common hardcoded colors but preserve hex colors that might be intentional
      .replace(/fill="#111111"/g, 'fill="currentColor"')
      .replace(/stroke="#111111"/g, 'stroke="currentColor"')
      .replace(/fill="#000000"/g, 'fill="currentColor"')
      .replace(/stroke="#000000"/g, 'stroke="currentColor"')
      .replace(/fill="#000"/g, 'fill="currentColor"')
      .replace(/stroke="#000"/g, 'stroke="currentColor"')
      .replace(/fill="black"/g, 'fill="currentColor"')
      .replace(/stroke="black"/g, 'stroke="currentColor"');
    
    return processedSvg;
    
  } catch (error) {
    console.warn('SVG processing failed:', error.message);
    return svgContent;
  }
}

/**
 * Batch process multiple SVGs
 * @param {Array} svgData - Array of {content, filename} objects
 * @returns {Array} Array of processed {content, filename} objects
 */
export function batchProcessSvgs(svgData) {
  return svgData.map(({ content, filename }) => ({
    content: processSvg(content),
    filename
  }));
} 