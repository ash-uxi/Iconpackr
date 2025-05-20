import { optimize } from 'svgo';
import { detectIconStyle } from './style-handler.js';
import { processSvgForTheming, getOptimizedSvgoConfig } from './svg-attribute-handler.js';

/**
 * Optimize SVG content using SVGO
 * @param {string} svgContent - Raw SVG content
 * @param {Object} options - Optimization options
 * @param {string} options.style - Icon style (stroke, solid, etc.) or "auto" for automatic detection
 * @returns {Promise<string>} Optimized SVG content
 */
export async function optimizeSvg(svgContent, options = {}) {
  let { style = 'auto' } = options;
  
  // If style is "auto" or not provided, attempt to detect it from the SVG content
  if (style === 'auto') {
    style = detectIconStyle(svgContent);
  }
  
  // Get dynamic SVGO configuration based on SVG analysis
  const config = getOptimizedSvgoConfig(svgContent);
  
  // Run SVGO optimization
  try {
    const result = optimize(svgContent, config);
    let optimizedSvg = result.data;
    
    // Apply dynamic theming transformations after SVGO optimization,
    // using the style detected from the *original* SVG content.
    optimizedSvg = processSvgForTheming(optimizedSvg, style);
    
    return optimizedSvg;
  } catch (error) {
    console.error(`SVGO optimization error: ${error.message}`);
    // Return original content if optimization fails
    return svgContent;
  }
} 