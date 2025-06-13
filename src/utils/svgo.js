import { optimize } from 'svgo';
import { detectIconStyle, applyStyleTransformations } from './style-handler.js';
import { processSvgForTheming, getOptimizedSvgoConfig } from './svg-attribute-handler.js';
import fs from 'fs';

/**
 * Fix known malformed self-closing tag patterns produced by some icon sources
 * where the self-closing slash appears *before* an attribute, e.g.
 *   <path d="…"/ fill="none">  ->  <path d="…" fill="none"/>
 *
 * This helper moves the slash to the end of the element, just before the
 * closing angle bracket, and removes any accidental duplicate angle brackets.
 *
 * @param {string} content Raw SVG string possibly containing malformed tags
 * @returns {string} Sanitised SVG string
 */
function sanitizeSvgContent(content) {
  if (!content || typeof content !== 'string') {
    return content;
  }

  // Generic fix: if we see a '/' followed by whitespace then attributes before
  // the closing '>', move that slash to just before '>' and keep the attributes.
  // e.g. <path ... / fill="none">  ⇒  <path ... fill="none"/>
  content = content.replace(/<([^>]*?)\/(\s+[a-zA-Z-]+="[^"]*")(.*?)>/g,
    (match, before, attrChunk, after) => {
      return `<${before}${attrChunk}${after}/>`;
    },
  );

  // The previous replacement can create a duplicate '>>' when the original '>'
  // remains after the inserted '/>'.  Clean up any such occurrences.
  content = content.replace(/\/>>/g, '/>');

  // Also collapse any accidental spaces before '/>'
  content = content.replace(/\s+\/>/g, '/>');

  return content;
}

/**
 * Optimize SVG content using SVGO
 * @param {string} svgContent - Raw SVG content
 * @param {Object} options - Optimization options
 * @param {string} options.style - Icon style (stroke, solid, etc.) or "auto" for automatic detection
 * @returns {Promise<string>} Optimized SVG content
 */
export async function optimizeSvg(svgContent, options = {}) {
  let { style = 'auto' } = options;
  
  // ----------------------------------------------------------------------------------
  // PRE-SANITISE INPUT SVG TO AVOID SVGO XML PARSE ERRORS (common with some sources)
  // ----------------------------------------------------------------------------------
  svgContent = sanitizeSvgContent(svgContent);
  
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
    
    // Ensure any new mutations from SVGO haven't re-introduced the malformed
    // pattern (this is cheap and keeps the output XML-safe).
    optimizedSvg = sanitizeSvgContent(optimizedSvg);
    
    // Apply dynamic theming transformations after SVGO optimization,
    // using the style detected from the *original* SVG content.
    optimizedSvg = applyStyleTransformations(optimizedSvg, style);
    
    // Post-sanitise in case the transformations introduced a misplaced slash
    optimizedSvg = sanitizeSvgContent(optimizedSvg);
    
    return optimizedSvg;
  } catch (error) {
    console.error(`SVGO optimization error: ${error.message}`);
    
    // Extract position information from error message
    const positionMatch = error.message.match(/<input>:(\d+):(\d+):/);
    if (positionMatch) {
      const line = parseInt(positionMatch[1]);
      const col = parseInt(positionMatch[2]);
      
      console.error(`Error at line ${line}, column ${col}`);
      console.error(`SVG content length: ${svgContent.length}`);
      
      // Show content around the error position
      const startPos = Math.max(0, col - 50);
      const endPos = Math.min(svgContent.length, col + 50);
      const errorContext = svgContent.substring(startPos, endPos);
      
      console.error(`Content around error position (col ${col}):`);
      console.error(`"${errorContext}"`);
      
      // Mark the exact error position
      const markerPos = Math.min(49, col - startPos);
      const marker = ' '.repeat(markerPos) + '^';
      console.error(`Position marker: ${marker}`);
      
      // Check for specific malformed patterns at the error location
      const charAtError = svgContent.charAt(col - 1);
      const nextChar = svgContent.charAt(col);
      console.error(`Character at error: "${charAtError}" (${charAtError.charCodeAt(0)})`);
      console.error(`Next character: "${nextChar}" (${nextChar.charCodeAt(0)})`);
    }
    
    // Save problematic SVG to a temp file for analysis
    try {
      const timestamp = Date.now();
      const errorFile = `./error-svg-${timestamp}.svg`;
      fs.writeFileSync(errorFile, svgContent);
      console.error(`Problematic SVG saved to: ${errorFile}`);
    } catch (writeError) {
      console.error('Failed to save error SVG:', writeError.message);
    }
    
    // Return original content if optimization fails
    return svgContent;
  }
} 