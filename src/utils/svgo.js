import { optimize } from 'svgo';
import { detectIconStyle, applyStyleTransformations } from './style-handler.js';
import { processSvgForTheming, getOptimizedSvgoConfig } from './svg-attribute-handler.js';
import fs from 'fs';

/**
 * Comprehensive SVG sanitization to fix various malformed patterns commonly
 * found in SVG files from different sources.
 *
 * Handles:
 * - Misplaced self-closing slashes: <path d="…"/ fill="none"> -> <path d="…" fill="none"/>
 * - Double angle brackets: L2 7>>v10 -> L2 7>v10  
 * - Missing quotes on attributes: stroke-width=2 -> stroke-width="2"
 * - Unclosed self-closing tags: <circle ...> -> <circle .../>
 * - Malformed path data with extra characters
 *
 * @param {string} content Raw SVG string possibly containing malformed patterns
 * @returns {string} Sanitized SVG string
 */
export function sanitizeSvgContent(content) {
  if (!content || typeof content !== 'string') {
    return content;
  }

  // 1. Fix double angle brackets in path data and other places
  // Pattern: >>v10 -> >v10, >>M -> >M, etc.
  content = content.replace(/>>([a-zA-Z])/g, '>$1');
  
  // 2. Fix missing quotes around attribute values
  // Pattern: stroke-width=2 -> stroke-width="2"
  content = content.replace(/(\s+[a-zA-Z-]+)=([^"'\s][^\s>]*?)(?=[\s>\/])/g, '$1="$2"');
  
  // 3. Fix unclosed self-closing tags (for elements that should be self-closing)
  // Pattern: <circle cx="12" cy="12" r="3" stroke="currentColor"> -> <circle cx="12" cy="12" r="3" stroke="currentColor"/>
  const selfClosingElements = ['circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect', 'use', 'image', 'stop'];
  selfClosingElements.forEach(element => {
    // Only convert if it's not already self-closing and doesn't have a closing tag
    const regex = new RegExp(`<${element}([^>]*?)>(?!.*</${element}>)`, 'gi');
    content = content.replace(regex, (match, attributes) => {
      // Don't convert if it already ends with /
      if (attributes.endsWith('/')) {
        return match;
      }
      return `<${element}${attributes}/>`;
    });
  });

  // 4. Generic fix: if we see a '/' followed by whitespace then attributes before
  // the closing '>', move that slash to just before '>' and keep the attributes.
  // e.g. <path ... / fill="none">  ⇒  <path ... fill="none"/>
  content = content.replace(/<([^>]*?)\/(\s+[a-zA-Z-]+="[^"]*")(.*?)>/g,
    (match, before, attrChunk, after) => {
      return `<${before}${attrChunk}${after}/>`;
    },
  );

  // 5. Fix specific issue with extra slashes after attribute values FIRST
  // Pattern: fill="#111111"/// -> fill="#111111"
  // Pattern: stroke="currentColor"// -> stroke="currentColor"
  content = content.replace(/="([^"]*)"\/\/+/g, '="$1"');
  
  // 5a. Fix triple slashes and other malformed slash patterns (but preserve URLs)
  // Only replace multiple slashes that are NOT part of URLs (http://, https://)
  content = content.replace(/(?<!https?:)\/\/\/+/g, '/');
  content = content.replace(/(?<!https?:)\/\/+(?!\/)/g, '/');
  
  // Clean up any remaining duplicate '>>' sequences
  content = content.replace(/\/>>/g, '/>');
  content = content.replace(/>>+/g, '>');

  // 6. Collapse any accidental spaces before '/>'
  content = content.replace(/\s+\/>/g, '/>');

  // 7. Fix malformed path data sequences (remove invalid characters)
  content = content.replace(/d="([^"]*)"/, (match, pathData) => {
    // Remove any invalid characters from path data, keeping only valid SVG path commands and numbers
    const cleanPathData = pathData.replace(/[^MmLlHhVvCcSsQqTtAaZz0-9\s,.-]/g, '');
    return `d="${cleanPathData}"`;
  });

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