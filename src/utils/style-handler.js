/**
 * Style-specific SVG attribute handler
 * This module provides functions to detect icon styles and apply style-specific transformations
 */

/**
 * Detect the style category of an SVG based on its content
 * @param {string} svgContent - The SVG content to analyze
 * @returns {string} The detected style (stroke, solid, contrast, duo-stroke, duo-solid)
 */
export function detectIconStyle(svgContent) {
  // Count elements with fill and stroke attributes
  const fillCount = (svgContent.match(/fill="[^"]*"/g) || []).length;
  const strokeCount = (svgContent.match(/stroke="[^"]*"/g) || []).length;
  const fillNoneCount = (svgContent.match(/fill="none"/g) || []).length;
  const strokeNoneCount = (svgContent.match(/stroke="none"/g) || []).length;
  
  // Count visible fills (fills that aren't "none")
  const visibleFillCount = fillCount - fillNoneCount;
  
  // Debug log
  console.log(`Style detection: Fill=${fillCount}, Stroke=${strokeCount}, FillNone=${fillNoneCount}, StrokeNone=${strokeNoneCount}, VisibleFill=${visibleFillCount}`);
  
  // Check for different opacities or multiple colors (indicators of duotone)
  const opacityAttr = svgContent.includes('opacity="') || svgContent.includes('fill-opacity="') || svgContent.includes('stroke-opacity="');
  
  // Extract all fill colors that aren't "none"
  const fillColors = new Set(
    (svgContent.match(/fill="[^"]*"/g) || [])
      .map(attr => attr.match(/="([^"]*)"/)[1])
      .filter(color => color !== 'none')
  );
  
  // Extract all stroke colors that aren't "none"
  const strokeColors = new Set(
    (svgContent.match(/stroke="[^"]*"/g) || [])
      .map(attr => attr.match(/="([^"]*)"/)[1])
      .filter(color => color !== 'none')
  );
  
  const hasMultipleFillColors = fillColors.size > 1;
  const hasMultipleStrokeColors = strokeColors.size > 1;
  const multipleColors = hasMultipleFillColors || hasMultipleStrokeColors;
  
  // Debug log
  console.log(`Style detection: Opacity=${opacityAttr}, MultipleColors=${multipleColors}, FillColors=${fillColors.size}, StrokeColors=${strokeColors.size}`);
  
  // Make determination based on pattern analysis
  let detectedStyle;
  
  // Check for contrast style first - if it has both visible fills and strokes
  if (strokeCount > 0 && visibleFillCount > 0) {
    // Has both strokes and visible fills - this is a contrast icon
    detectedStyle = 'contrast';
  } else if (strokeCount > 0 && visibleFillCount === 0) {
    // Primarily stroke-based with no visible fills
    if (opacityAttr || hasMultipleStrokeColors) {
      detectedStyle = 'duo-stroke';
    } else {
      detectedStyle = 'stroke';
    }
  } else if (visibleFillCount > 0 && strokeCount === 0) {
    // Primarily fill-based with no strokes
    if (opacityAttr || hasMultipleFillColors) {
      detectedStyle = 'duo-solid';
    } else {
      detectedStyle = 'solid';
    }
  } else if ((opacityAttr || multipleColors) && strokeCount > 0) {
    // Has strokes with different opacities or colors
    detectedStyle = 'duo-stroke';
  } else if ((opacityAttr || multipleColors) && visibleFillCount > 0) {
    // Has fills with different opacities or colors
    detectedStyle = 'duo-solid';
  } else {
    // Default to stroke if we can't determine
    detectedStyle = 'stroke';
  }
  
  console.log(`Style detection result: ${detectedStyle}`);
  return detectedStyle;
}

/**
 * Apply style-specific transformations to an SVG string
 * @param {string} svgContent - The SVG content to transform
 * @param {string} style - The icon style (stroke, solid, contrast, duo-stroke, duo-solid)
 * @returns {string} The transformed SVG content
 */
export function applyStyleTransformations(svgContent, style) {
  switch(style) {
    case 'stroke':
      return handleStrokeIcon(svgContent);
    case 'solid':
      return handleSolidIcon(svgContent);
    case 'contrast':
      return handleContrastIcon(svgContent);
    case 'duo-stroke':
      return handleDuoStrokeIcon(svgContent);
    case 'duo-solid':
      return handleDuoSolidIcon(svgContent);
    default:
      return svgContent;
  }
}

/**
 * Transform stroke icon attributes
 * @param {string} svgContent - The SVG content to transform
 * @returns {string} The transformed SVG content
 */
function handleStrokeIcon(svgContent) {
  let result = svgContent;
  
  // Apply currentColor to all stroke attributes
  result = result.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="currentColor"');
  
  // Set fill="none" for elements with stroke attributes but no fill
  result = result.replace(/<(path|circle|rect|line|polyline|polygon|ellipse)([^>]*)(stroke="[^"]*")([^>]*)(fill="[^"]*")?([^>]*)>/g, 
    (match, tag, before, stroke, after, fill, end) => {
      if (!fill) {
        return `<${tag}${before}${stroke}${after} fill="none"${end}>`;
      }
      return match;
    });
  
  // Remove fill attributes that aren't "none"
  result = result.replace(/fill="(?!none)([^"]*)"/g, 'fill="none"');
  
  // Explicitly add fill="none" to any elements with stroke but without a fill attribute
  result = result.replace(/<(path|circle|rect|line|polyline|polygon|ellipse)([^>]*)(stroke=[^>]*)(fill=[^>]*)?([^>]*)>/g,
    (match, tag, before, stroke, fill, after) => {
      if (!fill) {
        return `<${tag}${before}${stroke} fill="none"${after}>`;
      }
      return match;
    });
    
  // Fix any malformed fill attributes that got appended to the end of path data (common SVG error)
  result = result.replace(/(\/>| >)(fill="none")/g, ' fill="none"$1');
  
  // Fix malformed XML with attributes after closing slash
  result = result.replace(/\/\s*([a-zA-Z-]+="[^"]*")/g, ' $1/>');
  
  return result;
}

/**
 * Transform solid icon attributes
 * @param {string} svgContent - The SVG content to transform
 * @returns {string} The transformed SVG content
 */
function handleSolidIcon(svgContent) {
  let result = svgContent;
  
  // Apply currentColor to all fill attributes
  result = result.replace(/fill="(?!none)([^"]*)"/g, 'fill="currentColor"');
  
  // Remove stroke attributes or set stroke="none"
  result = result.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="none"');
  
  // Add fill="currentColor" to elements with no fill attribute
  result = result.replace(/<(path|circle|rect|polygon|ellipse)([^>]*)(fill="[^"]*")?([^>]*)>/g, 
    (match, tag, before, fill, after) => {
      if (!fill) {
        return `<${tag}${before} fill="currentColor"${after}>`;
      }
      return match;
    });
  
  return result;
}

/**
 * Transform contrast icon attributes
 * @param {string} svgContent - The SVG content to transform
 * @returns {string} The transformed SVG content
 */
function handleContrastIcon(svgContent) {
  let result = svgContent;
  
  // Apply currentColor to stroke attributes
  result = result.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="currentColor"');
  
  // Apply currentColor to all non-none fill attributes too
  result = result.replace(/fill="(?!none)([^"]*)"/g, 'fill="currentColor"');
  
  // Ensure all elements have explicit fill and stroke attributes
  result = result.replace(/<(path|circle|rect|line|polyline|polygon|ellipse)([^>]*?)(fill=|stroke=)?([^>]*)>/g, 
    (match, tag, beforeAttrs, hasAttr, afterAttrs) => {
      let newElement = match;
      
      // If there's no fill attribute, add fill="none"
      if (!newElement.includes('fill=')) {
        newElement = newElement.replace('>', ' fill="none">');
      }
      
      // If there's no stroke attribute, add stroke="currentColor"
      if (!newElement.includes('stroke=')) {
        newElement = newElement.replace('>', ' stroke="currentColor">');
      }
      
      return newElement;
    });
  
  return result;
}

/**
 * Transform duo-stroke icon attributes
 * @param {string} svgContent - The SVG content to transform
 * @returns {string} The transformed SVG content
 */
function handleDuoStrokeIcon(svgContent) {
  let result = svgContent;
  
  // Apply currentColor to all stroke attributes
  result = result.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="currentColor"');
  
  // Ensure fill="none" throughout
  result = result.replace(/fill="(?!none)([^"]*)"/g, 'fill="none"');
  
  // Ensure all elements have explicit fill attributes
  result = result.replace(/<(path|circle|rect|line|polyline|polygon|ellipse)([^>]*?)(fill=)?([^>]*)>/g, 
    (match, tag, beforeAttrs, hasAttr, afterAttrs) => {
      if (!match.includes('fill=')) {
        return match.replace('>', ' fill="none">');
      }
      return match;
    });
  
  return result;
}

/**
 * Transform duo-solid icon attributes
 * @param {string} svgContent - The SVG content to transform
 * @returns {string} The transformed SVG content
 */
function handleDuoSolidIcon(svgContent) {
  let result = svgContent;
  
  // Apply currentColor to all fill attributes
  result = result.replace(/fill="(?!none)([^"]*)"/g, 'fill="currentColor"');
  
  // Remove stroke attributes or set stroke="none"
  result = result.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="none"');
  
  // Add fill="currentColor" to elements with no fill attribute
  result = result.replace(/<(path|circle|rect|polygon|ellipse)([^>]*)(fill=\"[^\"]*\")?([^>]*)>/g, 
    (match, tag, before, fill, after) => {
      if (!fill) {
        return `<${tag}${before} fill="currentColor"${after}>`;
      }
      return match;
    });
  
  return result;
}

/**
 * Get SVGO configuration for a specific icon style 
 * @param {string} style - The icon style
 * @returns {Object} SVGO configuration object
 */
export function getSvgoConfigForStyle(style) {
  // Base configuration
  const config = {
    multipass: false, 
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            // Keep viewBox attribute
            removeViewBox: false,
            
            // Keep the fill/stroke attributes for styling
            removeUselessStrokeAndFill: false,
            
            // Convert colors to currentColor for theming
            convertColors: {
              currentColor: true,
              names2hex: true,
              rgb2hex: true,
              shorthex: true,
              shortname: true
            },
            
            // Preserve more details in paths
            mergePaths: false,
            
            // Don't collapse groups
            collapseGroups: false,
            
            // Don't remove elements that might seem hidden but are needed
            removeHiddenElems: false,
            
            // Don't merge styles that might be needed separately
            inlineStyles: false,
            
            // Don't remove non-standard attributes that might be needed
            removeUnknownsAndDefaults: {
              keepRoleAttr: true,
              keepAriaAttrs: true
            }
          }
        }
      },
      // Add role="img" and aria-hidden="true" for accessibility
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [
            { role: 'img' },
            { 'aria-hidden': 'true' }
          ]
        }
      },
      // Remove width and height attributes to make SVG scalable
      {
        name: 'removeAttrs',
        params: {
          attrs: ['width', 'height']
        }
      }
    ]
  };
  
  // Style-specific configuration
  switch (style) {
    case 'stroke':
      // No specific additions needed - will be handled by applyStyleTransformations
      break;
      
    case 'solid':
      // No specific additions needed - will be handled by applyStyleTransformations
      break;
      
    case 'contrast':
      // Disable plugins that might remove necessary attributes
      config.plugins[0].params.overrides.removeUselessStrokeAndFill = false;
      config.plugins[0].params.overrides.removeNonInheritableGroupAttrs = false;
      break;
      
    case 'duo-stroke':
    case 'duo-solid':
      // For duotone icons, prefix IDs to avoid conflicts
      config.plugins.push({
        name: 'prefixIds',
        params: {
          prefix: 'icon-',
          delim: '-'
        }
      });
      
      // Preserve opacity and other attributes needed for duotone effect
      config.plugins[0].params.overrides.removeUselessStrokeAndFill = false;
      break;
  }
  
  return config;
} 