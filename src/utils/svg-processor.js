/**
 * DEPRECATED: This file has been superseded by the advanced SVGO configuration
 * in svg-attribute-handler.js. All processing now uses the unified optimizeSvg
 * function from svgo.js which provides better compression and theming support.
 * 
 * This file is kept for reference but should not be used in new code.
 */

import { optimizeSvg } from './svgo.js';

/**
 * @deprecated Use optimizeSvg from './svgo.js' instead
 * Legacy function - redirects to the new advanced optimizer
 */
export function processSvg(svgContent) {
  console.warn('processSvg is deprecated. Use optimizeSvg from ./svgo.js instead');
  return optimizeSvg(svgContent, { style: 'auto' });
}

/**
 * @deprecated Use optimizeSvg from './svgo.js' instead 
 * Legacy function - redirects to the new advanced optimizer
 */
export function batchProcessSvgs(svgData) {
  console.warn('batchProcessSvgs is deprecated. Use optimizeSvg from ./svgo.js instead');
  return svgData.map(({ content, filename }) => ({
    content: optimizeSvg(content, { style: 'auto' }),
    filename
  }));
}