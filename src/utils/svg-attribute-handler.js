/**
 * Dynamic SVG Attribute Handler
 * Analyzes and processes SVG attributes to maintain visual intent while enabling theming
 */

/**
 * Analyzes an SVG string to detect which visual attributes are being used
 * @param {string} svgContent - The SVG content to analyze
 * @returns {Object} Object containing detected attribute details
 */
export function analyzeSvgAttributes(svgContent) {
  // Extract all path, rect, circle, etc. elements and their attributes
  const elementPattern = /<(path|circle|rect|line|polyline|polygon|ellipse|g)([^>]*)>/g;
  const elements = [];
  let match;
  
  while ((match = elementPattern.exec(svgContent)) !== null) {
    const tagName = match[1];
    const attributes = match[2];
    
    elements.push({
      tag: tagName,
      attributes: attributes,
      full: match[0]
    });
  }
  
  // Analyze attributes across all elements
  const result = {
    hasFill: false,
    hasStroke: false,
    hasExplicitNoneFill: false,
    hasExplicitNoneStroke: false,
    hasOpacity: false,
    hasFillOpacity: false,
    hasStrokeOpacity: false,
    hasMultipleFillColors: false,
    hasMultipleStrokeColors: false,
    fillColors: new Set(),
    strokeColors: new Set(),
    elementCount: elements.length,
    visibleFillCount: 0 // Add this to track fills that aren't "none"
  };
  
  // Extract individual attributes
  for (const el of elements) {
    // Check for fill attributes
    const fillMatch = el.attributes.match(/fill="([^"]*)"/);
    if (fillMatch) {
      const fillValue = fillMatch[1];
      if (fillValue === 'none') {
        result.hasExplicitNoneFill = true;
      } else {
        result.hasFill = true;
        result.fillColors.add(fillValue);
        result.visibleFillCount++; // Increment for each visible fill
      }
    }
    
    // Check for stroke attributes
    const strokeMatch = el.attributes.match(/stroke="([^"]*)"/);
    if (strokeMatch) {
      const strokeValue = strokeMatch[1];
      if (strokeValue === 'none') {
        result.hasExplicitNoneStroke = true;
      } else {
        result.hasStroke = true;
        result.strokeColors.add(strokeValue);
      }
    }
    
    // Check for opacity attributes
    if (el.attributes.includes('opacity="')) {
      result.hasOpacity = true;
    }
    
    if (el.attributes.includes('fill-opacity="')) {
      result.hasFillOpacity = true;
    }
    
    if (el.attributes.includes('stroke-opacity="')) {
      result.hasStrokeOpacity = true;
    }
  }
  
  // Determine if multiple colors are used
  result.hasMultipleFillColors = result.fillColors.size > 1;
  result.hasMultipleStrokeColors = result.strokeColors.size > 1;
  
  return result;
}

/**
 * Process SVG content to ensure proper theming while preserving visual intent
 * @param {string} svgContent - The SVG content to process
 * @param {string} [forcedStyle] - Optional style to force, bypassing internal detection
 * @returns {string} Processed SVG content
 */
export function processSvgForTheming(svgContent, forcedStyle) {
  const analysis = analyzeSvgAttributes(svgContent);
  let result = svgContent;
  let iconStyle = forcedStyle;

  if (!forcedStyle || forcedStyle === 'auto') {
    if (analysis.hasStroke && analysis.visibleFillCount > 0 && (analysis.hasMultipleFillColors || analysis.hasMultipleStrokeColors || analysis.hasOpacity || analysis.hasFillOpacity || analysis.hasStrokeOpacity)) {
      iconStyle = 'contrast'; // Or could be a duotone variant if opacity/multiple colors dominate
    } else if (analysis.hasStroke && analysis.visibleFillCount > 0) {
      iconStyle = 'contrast';
    } else if (analysis.hasStroke && (analysis.hasMultipleFillColors || analysis.hasMultipleStrokeColors || analysis.hasOpacity || analysis.hasFillOpacity || analysis.hasStrokeOpacity)) {
      iconStyle = 'duo-stroke';
    } else if (analysis.hasStroke) {
      iconStyle = 'stroke';
    } else if (analysis.visibleFillCount > 0 && (analysis.hasMultipleFillColors || analysis.hasOpacity || analysis.hasFillOpacity)) {
      iconStyle = 'duo-solid';
    } else if (analysis.visibleFillCount > 0) {
      iconStyle = 'solid';
    } else {
      iconStyle = 'stroke'; // Default fallback
    }
    if (forcedStyle === 'auto' && verbose) {
        console.log(chalk.blue(`Auto-detected style for theming: ${iconStyle} (was '${forcedStyle}')`));
    }
  }
  // console.log(`SVG processing: Using style=${iconStyle} (forced: ${forcedStyle}, fill: ${analysis.hasFill}, stroke: ${analysis.hasStroke}, visFill: ${analysis.visibleFillCount}, multiFill: ${analysis.hasMultipleFillColors}, multiStroke: ${analysis.hasMultipleStrokeColors}, opacity: ${analysis.hasOpacity})`);

  // Regex to find elements and their fill/stroke attributes
  const elementPattern = /<([a-zA-Z0-9:]+)([^>]*)>/g;
  
  result = result.replace(elementPattern, (match, tagName, attributesString) => {
    if (tagName.startsWith('svg') || tagName.startsWith('defs') || tagName.startsWith('clipPath') || tagName.startsWith('mask')) return match; // Skip svg, defs, clipPath, mask tags themselves

    let newAttributesString = attributesString;
    let originalFill = attributesString.match(/fill="([^"]*)"/)?.[1];
    let originalStroke = attributesString.match(/stroke="([^"]*)"/)?.[1];
    let hasOpacity = /opacity="([^"]*)"/.test(attributesString) || /fill-opacity="([^"]*)"/.test(attributesString) || /stroke-opacity="([^"]*)"/.test(attributesString);

    const isPrimaryElement = !hasOpacity; // Simplified assumption: elements with opacity are secondary

    switch (iconStyle) {
      case 'stroke':
        newAttributesString = newAttributesString.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="currentColor"');
        if (originalFill !== 'none') {
            newAttributesString = newAttributesString.replace(/fill="([^"]*)"/g, ''); // Remove fill if not none
            if (!/fill="/.test(newAttributesString)) newAttributesString += ' fill="none"'; // Add fill none if no fill exists
        } else if (!/fill="/.test(newAttributesString)) {
            newAttributesString += ' fill="none"'; // Ensure fill none if no fill present
        }
        break;
      case 'solid':
        newAttributesString = newAttributesString.replace(/fill="(?!none)([^"]*)"/g, 'fill="currentColor"');
        if (originalStroke !== 'none') {
            newAttributesString = newAttributesString.replace(/stroke="([^"]*)"/g, '');
            if (!/stroke="/.test(newAttributesString)) newAttributesString += ' stroke="none"';
        } else if (!/stroke="/.test(newAttributesString)) {
             newAttributesString += ' stroke="none"';
        }
        break;
      case 'contrast':
        if (originalFill && originalFill !== 'none') {
          newAttributesString = newAttributesString.replace(/fill="([^"]*)"/, 'fill="currentColor"');
        }
        if (originalStroke && originalStroke !== 'none') {
          newAttributesString = newAttributesString.replace(/stroke="([^"]*)"/, 'stroke="currentColor"');
        }
        break;
      case 'duo-stroke':
        // Primary stroke: currentColor. Secondary stroke: original color (if different) + opacity.
        // Fill: always none.
        if (isPrimaryElement && originalStroke && originalStroke !== 'none') {
          newAttributesString = newAttributesString.replace(/stroke="([^"]*)"/, 'stroke="currentColor"');
        }
        // Ensure fill is none for all parts of a duo-stroke icon
        newAttributesString = newAttributesString.replace(/fill="([^"]*)"/g, '');
        if (!/fill="/.test(newAttributesString)) newAttributesString += ' fill="none"';
        break;
      case 'duo-solid':
        // Primary fill: currentColor. Secondary fill: original color (if different) + opacity.
        // Stroke: always none.
        if (isPrimaryElement && originalFill && originalFill !== 'none') {
          newAttributesString = newAttributesString.replace(/fill="([^"]*)"/, 'fill="currentColor"');
        }
        // Ensure stroke is none for all parts of a duo-solid icon
        newAttributesString = newAttributesString.replace(/stroke="([^"]*)"/g, '');
        if (!/stroke="/.test(newAttributesString)) newAttributesString += ' stroke="none"';
        break;
      default:
        // For any other unknown style, or if logic is incomplete, apply currentColor generally
        if (originalFill && originalFill !== 'none') {
          newAttributesString = newAttributesString.replace(/fill="([^"]*)"/, 'fill="currentColor"');
        }
        if (originalStroke && originalStroke !== 'none') {
          newAttributesString = newAttributesString.replace(/stroke="([^"]*)"/, 'stroke="currentColor"');
        }
        break;
    }
    return `<${tagName}${newAttributesString}>`;
  });

  return result;
}

/**
 * Get style-specific props for component templates based on SVG analysis
 * @param {string} svgContent - The SVG content to analyze
 * @param {string} format - Component format (react-jsx, react-tsx, vue, react-native)
 * @returns {Object} Style-specific props configuration for templates
 */
export function getSvgThemingProps(svgContent, format) {
  const isReactNative = format === 'react-native';
  const isVue = format === 'vue';
  const isSvelte = format === 'svelte';
  
  // Analyze SVG to determine needed props
  const analysis = analyzeSvgAttributes(svgContent);
  
  // Default props
  const props = {
    styleAttribute: '',
    additionalProps: '',
    colorProp: isVue ? 'color: color || "currentColor"' : 'color: color || "currentColor"',
    hasSecondaryColor: false
  };
  
  // Configure props based on analysis and format
  if (isVue) {
    props.styleAttribute = `:style="{color: color || 'currentColor'}"`;
  } else if (isSvelte) {
    // Svelte uses similar syntax to Vue but without the colon prefix
    props.styleAttribute = '';
  } else if (isReactNative) {
    // For React Native, we need to be explicit about which attribute gets the color
    if (analysis.hasStroke && !analysis.visibleFillCount) {
      props.styleAttribute = 'stroke={color}';
    } else if (analysis.visibleFillCount > 0 && !analysis.hasStroke) {
      props.styleAttribute = 'fill={color}';
    } else {
      // Both or neither - default to color prop
      props.styleAttribute = 'color={color}';
    }
  } else {
    // For web, CSS custom properties handle the coloring
    props.styleAttribute = 'style={{color: color || "currentColor"}}';
  }
  
  return props;
}

/**
 * Get optimized SVGO config based on SVG analysis
 * @param {string} svgContent - The SVG content to analyze
 * @returns {Object} SVGO configuration
 */
export function getOptimizedSvgoConfig(svgContent) {
  const analysis = analyzeSvgAttributes(svgContent);
  let style = 'auto'; 
  if (analysis.hasStroke && analysis.visibleFillCount > 0) {
    style = 'contrast';
  } else if (analysis.hasStroke && (analysis.visibleFillCount === 0)) {
    style = 'stroke';
  } else if (analysis.visibleFillCount > 0 && !analysis.hasStroke) {
    style = 'solid';
  } else if ((analysis.hasMultipleFillColors || analysis.hasMultipleStrokeColors || 
      analysis.hasOpacity || analysis.hasFillOpacity || analysis.hasStrokeOpacity)) {
    style = analysis.hasStroke ? 'duo-stroke' : 'duo-solid';
  }

  const config = {
    multipass: false,
    js2svg: { indent: 2, pretty: true },
    plugins: [
      // Manually list plugins instead of using preset-default for fine-grained control
      {
        name: 'removeDoctype',
        active: true,
      },
      {
        name: 'removeXMLProcInst',
        active: true,
      },
      {
        name: 'removeComments',
        active: true,
      },
      {
        name: 'removeMetadata',
        active: true,
      },
      {
        name: 'removeEditorsNSData',
        active: true,
      },
      {
        name: 'removeViewBox',
        active: false, // Explicitly keep viewBox
      },
      {
        name: 'removeDimensions', // Remove width and height for scalability
        active: true,
      },
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [
            { role: 'img' },
            { 'aria-hidden': 'true' },
          ],
        },
        active: true,
      },
      // Plugins to explicitly keep disabled to preserve structure:
      { name: 'cleanupAttrs', active: false },
      { name: 'mergeStyles', active: false },
      { name: 'inlineStyles', active: false },
      { name: 'cleanupEnableBackground', active: false },
      { name: 'convertStyleToAttrs', active: false },
      { name: 'convertColors', active: false }, 
      { name: 'convertPathData', active: false },
      { name: 'convertTransform', active: false },
      { name: 'removeUnknownsAndDefaults', active: false },
      { name: 'removeNonInheritableGroupAttrs', active: false },
      { name: 'removeUselessDefs', active: false },
      { name: 'removeUselessStrokeAndFill', active: false }, // Keep this disabled to preserve opacity sources
      { name: 'removeHiddenElems', active: false },
      { name: 'cleanupNumericValues', active: false },
      { name: 'cleanupListOfValues', active: false },
      { name: 'moveElemsAttrsToGroup', active: false },
      { name: 'moveGroupAttrsToElems', active: false },
      { name: 'collapseGroups', active: false }, // CRITICAL: Keep false
      { name: 'mergePaths', active: false },
      { name: 'sortDefsChildren', active: false },
      { name: 'sortAttrs', active: true }, // Keep attributes sorted
      { name: 'prefixIds', active: false } // Disable for now unless explicitly needed by style
    ]
  };

  // Conditionally enable prefixIds only when needed to simplify debugging
  if (style === 'duo-stroke' || style === 'duo-solid' || analysis.hasMultipleFillColors || analysis.hasMultipleStrokeColors) {
    const prefixIdsPlugin = config.plugins.find(p => p.name === 'prefixIds');
    if (prefixIdsPlugin) {
      prefixIdsPlugin.active = true;
      prefixIdsPlugin.params = {
        prefix: () => `icon-${Math.random().toString(36).substr(2, 9)}`,
        delim: '-',
        overrideIds: true,
      };
    } else { // Should not happen if it's in the list above with active:false
        config.plugins.push({
            name: 'prefixIds',
            active: true,
            params: {
                prefix: () => `icon-${Math.random().toString(36).substr(2, 9)}`,
                delim: '-',
                overrideIds: true,
            }
        });
    }
  }
  
  return config;
} 