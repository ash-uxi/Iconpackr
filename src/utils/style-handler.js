/**
 * Style-specific SVG attribute handler
 * Provides utilities to detect icon styles and apply style-specific attribute transformations.
 *
 * Exported API:
 *   - detectIconStyle(svgString): string
 *   - applyStyleTransformations(svgString, style): string
 *   - getSvgoConfigForStyle(style): object
 */

/* -------------------------------------------------------------------------
 * Style detection
 * ---------------------------------------------------------------------- */

/**
 * Analyses an SVG string and returns the most likely style category.
 * The heuristics look at the presence of fill / stroke attributes, whether
 * they are set to "none", the number of visible fills / strokes, colour
 * diversity and the presence of opacity attributes.
 *
 * @param {string} svgContent Raw SVG markup
 * @returns {"stroke"|"solid"|"contrast"|"duo-stroke"|"duo-solid"} Detected style
 */
export function detectIconStyle(svgContent) {
  // Count attributes
  const fillCount = (svgContent.match(/fill="[^"]*"/g) || []).length;
  const strokeCount = (svgContent.match(/stroke="[^"]*"/g) || []).length;
  const fillNoneCount = (svgContent.match(/fill="none"/g) || []).length;
  const strokeNoneCount = (svgContent.match(/stroke="none"/g) || []).length;
  const visibleFillCount = fillCount - fillNoneCount;

  // Other indicators
  const hasOpacity = /opacity="|fill-opacity="|stroke-opacity="/.test(svgContent);

  // Distinct colours (excluding none)
  const fillColours = new Set(
    (svgContent.match(/fill="[^"]*"/g) || [])
      .map(a => a.match(/="([^"]*)"/)[1])
      .filter(c => c !== 'none'),
  );
  const strokeColours = new Set(
    (svgContent.match(/stroke="[^"]*"/g) || [])
      .map(a => a.match(/="([^"]*)"/)[1])
      .filter(c => c !== 'none'),
  );
  const multipleColours = fillColours.size > 1 || strokeColours.size > 1;

  // Heuristic decision tree (matches the one we had before)
  let style;
  if (strokeCount > 0 && visibleFillCount > 0 && hasOpacity) {
    style = 'duo-solid';
  } else if (strokeCount > 0 && visibleFillCount > 0) {
    style = 'contrast';
  } else if (strokeCount > 0 && visibleFillCount === 0) {
    style = hasOpacity || strokeColours.size > 1 ? 'duo-stroke' : 'stroke';
  } else if (visibleFillCount > 0 && strokeCount === 0) {
    style = hasOpacity || fillColours.size > 1 ? 'duo-solid' : 'solid';
  } else if (hasOpacity || multipleColours) {
    style = strokeCount > 0 ? 'duo-stroke' : 'duo-solid';
  } else {
    style = 'stroke';
  }
  return style;
}

/* -------------------------------------------------------------------------
 * Style transformations
 * ---------------------------------------------------------------------- */

export function applyStyleTransformations(svgContent, style) {
  switch (style) {
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

// --- helpers -------------------------------------------------------------

function handleStrokeIcon(svg) {
  let res = svg;
  
  // Normalize stroke colour
  res = res.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="currentColor"');
  
  // Convert any non-none fill values to "none"
  res = res.replace(/fill="(?!none)([^"]*)"/g, 'fill="none"');
  
  // Ensure stroke elements have fill="none" (only add if missing)
  res = res.replace(/<(path|circle|rect|line|polyline|polygon|ellipse)([^>]*)>/g, (match, tag, attrs) => {
    // Skip if already has fill attribute
    if (/fill=/.test(attrs)) {
      return match;
    }
    
    // Only add fill="none" if element has stroke (indicating it's a stroked element)
    if (/stroke=/.test(attrs)) {
      return `<${tag}${attrs} fill="none">`;
    }
    
    return match;
  });
  
  return removeDuplicateAttributes(res);
}

function handleSolidIcon(svg) {
  let res = svg;
  res = res.replace(/fill="(?!none)([^"]*)"/g, 'fill="currentColor"');
  res = res.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="none"');
  res = res.replace(/<(path|circle|rect|polygon|ellipse)([^>]*)(fill="[^"]*")?([^>]*)>/g,
    (m, tag, before, fill, after) => fill ? m : `<${tag}${before} fill="currentColor"${after}>`,
  );
  return removeDuplicateAttributes(res);
}

function handleContrastIcon(svg) {
  let res = svg;
  res = res.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="currentColor"');
  res = res.replace(/fill="(?!none)([^"]*)"/g, 'fill="currentColor"');
  res = res.replace(/<(path|circle|rect|line|polyline|polygon|ellipse)([^>]*?)>/g,
    element => {
      let out = element;
      if (!/fill=/.test(out)) out = out.replace('>', ' fill="none">');
      if (!/stroke=/.test(out)) out = out.replace('>', ' stroke="currentColor">');
      return out;
    },
  );
  return removeDuplicateAttributes(res);
}

function handleDuoStrokeIcon(svg) {
  let res = svg;
  res = res.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="currentColor"');
  res = res.replace(/fill="(?!none)([^"]*)"/g, 'fill="none"');
  res = res.replace(/<(path|circle|rect|line|polyline|polygon|ellipse)([^>]*?)>/g,
    e => /fill=/.test(e) ? e : e.replace('>', ' fill="none">'),
  );
  return removeDuplicateAttributes(res);
}

function handleDuoSolidIcon(svg) {
  let res = svg;
  res = res.replace(/fill="(?!none)([^"]*)"/g, 'fill="currentColor"');
  res = res.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="currentColor"');
  // ensure stroke elems have fill="none"
  res = res.replace(/<(path|circle|rect|line|polyline|polygon|ellipse)([^>]*?)(\/?)>/g,
    (m, tag, attrs, self) => {
      if (attrs.includes('stroke="currentColor"') && !/fill=/.test(attrs)) {
        const upd = attrs.replace(/stroke="currentColor"/, 'stroke="currentColor" fill="none"');
        return `<${tag}${upd}${self}>`;
      }
      return m;
    },
  );
  res = res.replace(/<(path|circle|rect|polygon|ellipse)([^>]*?)>/g,
    (m, tag, attrs) => /fill=/.test(attrs) || /stroke=/.test(attrs) ? m : `<${tag} fill="currentColor" ${attrs}>`,
  );
  return removeDuplicateAttributes(res);
}

// Utility to ensure no duplicate attributes inside an element string
function removeDuplicateAttributes(svgString) {
  return svgString.replace(/<([^\/][^>]*)>/g, (match, elementContent) => {
    // Skip if this doesn't contain attributes
    if (!elementContent.includes('=')) {
      return match;
    }
    
    // Use regex to properly parse all attributes including complex ones
    const tagNameMatch = elementContent.match(/^(\S+)/);
    if (!tagNameMatch) return match;
    
    const tagName = tagNameMatch[1];
    const attributeMap = new Map();
    let isSelfClosing = elementContent.endsWith('/');
    
    // Match all attribute="value" pairs, handling quoted values with spaces
    const attributeRegex = /(\S+)="([^"]*)"/g;
    let attrMatch;
    
    while ((attrMatch = attributeRegex.exec(elementContent)) !== null) {
      const [, attrName, attrValue] = attrMatch;
      // Keep the last occurrence of each attribute name
      attributeMap.set(attrName, attrValue);
    }
    
    // Reconstruct the element with unique attributes
    const attributes = Array.from(attributeMap.entries())
      .map(([name, value]) => `${name}="${value}"`)
      .join(' ');
    
    const selfClosingSlash = isSelfClosing ? ' /' : '';
    const result = attributes 
      ? `<${tagName} ${attributes}${selfClosingSlash}>`
      : `<${tagName}${selfClosingSlash}>`;
    
    return result;
  });
}

/* -------------------------------------------------------------------------
 * SVGO configuration helper (unchanged)
 * ---------------------------------------------------------------------- */

export function getSvgoConfigForStyle(style) {
  const cfg = {
    multipass: false,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
            removeUselessStrokeAndFill: false,
            convertColors: { currentColor: true },
          },
        },
      },
      { name: 'removeDimensions', active: true },
    ],
  };

  // tweak per-style if needed
  if (style === 'solid' || style === 'duo-solid') {
    cfg.plugins.push({ name: 'convertShapeToPath', active: true });
  }
  return cfg;
} 