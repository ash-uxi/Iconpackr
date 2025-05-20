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
  // Analyze the SVG to understand its structure
  const analysis = analyzeSvgAttributes(svgContent);
  let result = svgContent;
  
  // Determine the icon style based on analysis or use forcedStyle if provided
  let iconStyle;
  if (forcedStyle) {
    iconStyle = forcedStyle;
    console.log(`SVG processing: Using forced style=${iconStyle}`);
  } else {
    if (analysis.hasStroke && analysis.visibleFillCount > 0) {
      iconStyle = 'contrast';
    } else if (analysis.hasStroke && (analysis.visibleFillCount === 0)) {
      iconStyle = 'stroke';
    } else if (analysis.visibleFillCount > 0 && !analysis.hasStroke) {
      iconStyle = 'solid';
    } else if ((analysis.hasMultipleFillColors || analysis.hasMultipleStrokeColors || 
        analysis.hasOpacity || analysis.hasFillOpacity || analysis.hasStrokeOpacity) && 
        analysis.hasStroke) {
      iconStyle = 'duo-stroke';
    } else if ((analysis.hasMultipleFillColors || analysis.hasMultipleStrokeColors || 
        analysis.hasOpacity || analysis.hasFillOpacity || analysis.hasStrokeOpacity) && 
        analysis.visibleFillCount > 0) {
      iconStyle = 'duo-solid';
    } else {
      // Default to stroke if we can't determine
      iconStyle = 'stroke';
    }
    console.log(`SVG processing: Detected style=${iconStyle}, hasFill=${analysis.hasFill}, hasStroke=${analysis.hasStroke}, visibleFillCount=${analysis.visibleFillCount}`);
  }
  
  // Apply transformations based on the detected style
  if (iconStyle === 'stroke') {
    // Stroke-only icon: Apply currentColor to stroke attributes
    result = result.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="currentColor"');
    
    // Ensure all elements with stroke have fill="none"
    result = result.replace(/<(path|circle|rect|line|polyline|polygon|ellipse)([^>]*)(stroke="[^"]*")([^>]*)(fill="[^"]*")?([^>]*)>/g, 
      (match, tag, before, stroke, after, fill, end) => {
        if (!fill) {
          return `<${tag}${before}${stroke}${after} fill="none"${end}>`;
        }
        return match;
      });
    
    // For any fill that's not already "none", set it to "none"
    result = result.replace(/fill="(?!none)([^"]*)"/g, 'fill="none"');
    
  } else if (iconStyle === 'solid') {
    // Fill-only icon: Apply currentColor to fill attributes unless explicitly "none"
    result = result.replace(/fill="(?!none)([^"]*)"/g, 'fill="currentColor"');
    
    // Set strokes to none or remove them
    result = result.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="none"');
    
  } else if (iconStyle === 'contrast') {
    // Contrast icon (has both strokes and fills)
    // The 'iconStyle' is forced based on original SVG analysis, so we trust it.
    
    // Set strokes to currentColor
    result = result.replace(/stroke=\"(?!none)([^\"]*)\"/g, 'stroke="currentColor"');
    
    // Make all fills (including those inside potentially opaque groups) use currentColor too
    result = result.replace(/fill=\"(?!none)([^\"]*)\"/g, 'fill="currentColor"');
    
  } else if (iconStyle === 'duo-stroke' || iconStyle === 'duo-solid') {
    // Handle multi-color scenarios by applying currentColor to all attributes
    // Extract all elements with visual attributes
    const elementPattern = /<(path|circle|rect|line|polyline|polygon|ellipse)([^>]*)>/g;
    const elements = [];
    let match;
    
    while ((match = elementPattern.exec(result)) !== null) {
      elements.push({
        tag: match[1],
        attrs: match[2],
        full: match[0],
        index: match.index
      });
    }
    
    // Apply currentColor to all elements
    let lastIndex = 0;
    let resultParts = [];
    
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      
      resultParts.push(result.substring(lastIndex, el.index));
      
      let transformed = el.full;
      
      if (iconStyle === 'duo-stroke') {
        transformed = transformed.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="currentColor"');
        // Ensure fill is none for duo-stroke icons
        if (!transformed.includes('fill="')) {
          transformed = transformed.replace('>', ' fill="none">');
        }
      } else { // duo-solid
        transformed = transformed.replace(/fill="(?!none)([^"]*)"/g, 'fill="currentColor"');
      }
      
      resultParts.push(transformed);
      
      lastIndex = el.index + el.full.length;
    }
    
    resultParts.push(result.substring(lastIndex));
    result = resultParts.join('');
  }
  
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
  // Analyze the SVG
  const analysis = analyzeSvgAttributes(svgContent);
  
  // Base configuration that preserves visual intent
  const config = {
    multipass: false,
    plugins: [
      {
        name: 'preset-default',
        params: {
          floatPrecision: 5,
          overrides: {
            // Keep viewBox attribute
            removeViewBox: false,
            
            // Preserve fill/stroke attributes based on analysis
            removeUselessStrokeAndFill: false,
            
            // Convert colors to currentColor for theming, but less aggressively
            convertColors: {
              currentColor: true,
              names2hex: true,
              rgb2hex: true,
              shorthex: false,
              shortname: false
            },
            
            // Preserve path details
            mergePaths: false,
            
            // Don't collapse groups that might be important for visual structure
            collapseGroups: false,
            
            // Don't remove elements that might be needed
            removeHiddenElems: false,
            
            // Be conservative with styles
            inlineStyles: false,
            
            // Disable removeUnknownsAndDefaults to be less harsh
            removeUnknownsAndDefaults: false,
          }
        }
      },
      // Add accessibility attributes
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
  
  // Additional configuration based on analysis
  if (analysis.hasMultipleFillColors || analysis.hasMultipleStrokeColors) {
    // For multi-color icons, prefix IDs to avoid conflicts
    config.plugins.push({
      name: 'prefixIds',
      params: {
        prefix: 'icon-',
        delim: '-'
      }
    });
  }
  
  return config;
} 