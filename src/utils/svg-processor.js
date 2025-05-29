import { parseSync, stringify } from 'svgson';
import SVGPathCommander from 'svg-path-commander';
import memoize from 'lodash/memoize.js';

/**
 * SVG optimization options
 */
export const defaultSvgOptimizationOptions = {
  filterAttributes: true,
  sortAttributes: true,
  sortNodes: true,
  filterNodes: true,
  standardizeViewBox: true,
  normalizePathData: false
};

/**
 * Essential attributes for each SVG element type
 */
const ESSENTIAL_ATTRIBUTES = {
  rect: ['x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'stroke', 'stroke-width', 'opacity', 'fill-opacity', 'stroke-opacity'],
  circle: ['cx', 'cy', 'r', 'fill', 'stroke', 'stroke-width', 'opacity', 'fill-opacity', 'stroke-opacity'],
  ellipse: ['cx', 'cy', 'rx', 'ry', 'fill', 'stroke', 'stroke-width', 'opacity', 'fill-opacity', 'stroke-opacity'],
  polygon: ['points', 'fill', 'stroke', 'stroke-width', 'opacity', 'fill-opacity', 'stroke-opacity'],
  polyline: ['points', 'fill', 'stroke', 'stroke-width', 'opacity', 'fill-opacity', 'stroke-opacity'],
  line: ['x1', 'y1', 'x2', 'y2', 'stroke', 'stroke-width', 'opacity', 'stroke-opacity'],
  path: ['d', 'fill', 'stroke', 'stroke-width', 'opacity', 'fill-opacity', 'stroke-opacity', 'fill-rule', 'clip-rule']
};

/**
 * Attribute order for consistent sorting
 */
const ATTRIBUTE_ORDER = {
  rect: ['x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'stroke', 'stroke-width', 'opacity', 'fill-opacity', 'stroke-opacity'],
  circle: ['cx', 'cy', 'r', 'fill', 'stroke', 'stroke-width', 'opacity', 'fill-opacity', 'stroke-opacity'],
  ellipse: ['cx', 'cy', 'rx', 'ry', 'fill', 'stroke', 'stroke-width', 'opacity', 'fill-opacity', 'stroke-opacity'],
  polygon: ['points', 'fill', 'stroke', 'stroke-width', 'opacity', 'fill-opacity', 'stroke-opacity'],
  polyline: ['points', 'fill', 'stroke', 'stroke-width', 'opacity', 'fill-opacity', 'stroke-opacity'],
  line: ['x1', 'y1', 'x2', 'y2', 'stroke', 'stroke-width', 'opacity', 'stroke-opacity'],
  path: ['d', 'fill', 'stroke', 'stroke-width', 'opacity', 'fill-opacity', 'stroke-opacity', 'fill-rule', 'clip-rule']
};

/**
 * Drawable SVG element types
 */
const DRAWABLE_ELEMENTS = ['rect', 'circle', 'ellipse', 'polygon', 'polyline', 'line', 'path'];

/**
 * Container SVG element types that can contain drawable elements
 */
const CONTAINER_ELEMENTS = ['g', 'defs', 'clipPath', 'mask'];

/**
 * All SVG element types we should preserve
 */
const PROCESSABLE_ELEMENTS = [...DRAWABLE_ELEMENTS, ...CONTAINER_ELEMENTS];

/**
 * Process and standardize SVG attributes for a given element
 * @param {Object} element - SVG element object from svgson
 * @param {Object} options - Processing options
 * @returns {Object} Processed element with standardized attributes
 */
function processElementAttributes(element, options) {
  const { name, attributes = {} } = element;
  let processedAttributes = { ...attributes };

  // For drawable elements, filter attributes if enabled
  if (options.filterAttributes && ESSENTIAL_ATTRIBUTES[name]) {
    const essentialAttrs = ESSENTIAL_ATTRIBUTES[name];
    processedAttributes = Object.keys(processedAttributes)
      .filter(key => essentialAttrs.includes(key))
      .reduce((obj, key) => {
        obj[key] = processedAttributes[key];
        return obj;
      }, {});
  }
  
  // For group elements, preserve important attributes like opacity, transform, etc.
  if (name === 'g' && options.filterAttributes) {
    const groupEssentialAttrs = ['opacity', 'fill-opacity', 'stroke-opacity', 'transform', 'id', 'class'];
    processedAttributes = Object.keys(processedAttributes)
      .filter(key => groupEssentialAttrs.includes(key))
      .reduce((obj, key) => {
        obj[key] = processedAttributes[key];
        return obj;
      }, {});
  }

  // Sort attributes if enabled
  if (options.sortAttributes && ATTRIBUTE_ORDER[name]) {
    const order = ATTRIBUTE_ORDER[name];
    const sortedAttributes = {};
    
    // Add attributes in the specified order
    order.forEach(attr => {
      if (processedAttributes[attr] !== undefined) {
        sortedAttributes[attr] = processedAttributes[attr];
      }
    });
    
    // Add any remaining attributes not in the order
    Object.keys(processedAttributes).forEach(attr => {
      if (!order.includes(attr)) {
        sortedAttributes[attr] = processedAttributes[attr];
      }
    });
    
    processedAttributes = sortedAttributes;
  }

  return {
    ...element,
    attributes: processedAttributes
  };
}

/**
 * Normalize and split path data
 * @param {string} pathData - SVG path data string
 * @returns {string[]} Array of normalized path data strings
 */
function normalizeAndSplitPath(pathData) {
  try {
    // Convert to absolute coordinates
    const absolutePath = SVGPathCommander.toAbsolute(pathData);
    
    // Split on moveTo commands to separate multiple shapes
    const pathSegments = absolutePath.split(/(?=M)/g).filter(segment => segment.trim());
    
    return pathSegments.map(segment => segment.trim());
  } catch (error) {
    console.warn('Path normalization failed, using original:', error.message);
    return [pathData];
  }
}

/**
 * Recursively process SVG elements
 * @param {Object} node - SVG node from svgson
 * @param {Object} options - Processing options
 * @returns {Object[]} Array of processed SVG element objects (not strings)
 */
function processElements(node, options) {
  if (!node) return [];

  // Handle group elements - preserve their structure and attributes
  if (node.name === 'g') {
    const processedGroup = processElementAttributes(node, options);
    
    // Process children recursively
    let processedChildren = [];
    if (node.children && Array.isArray(node.children)) {
      node.children.forEach(child => {
        processedChildren.push(...processElements(child, options));
      });
    }
    
    // If group has attributes (like opacity), preserve the group structure
    if (Object.keys(processedGroup.attributes).length > 0) {
      return [{
        ...processedGroup,
        children: processedChildren
      }];
    } else {
      // If group has no important attributes, just return the children
      return processedChildren;
    }
  }

  // Process current node if it's a drawable element
  if (DRAWABLE_ELEMENTS.includes(node.name)) {
    const processedElement = processElementAttributes(node, options);

    // Special handling for path elements
    if (node.name === 'path' && options.normalizePathData && processedElement.attributes.d) {
      const pathSegments = normalizeAndSplitPath(processedElement.attributes.d);
      
      return pathSegments.map(pathData => ({
        ...processedElement,
        attributes: {
          ...processedElement.attributes,
          d: pathData
        }
      }));
    } else {
      return [processedElement];
    }
  }

  // For other elements, process children recursively
  const processedChildren = [];
  if (node.children && Array.isArray(node.children)) {
    node.children.forEach(child => {
      processedChildren.push(...processElements(child, options));
    });
  }

  return processedChildren;
}

/**
 * Extract dimensions from SVG
 * @param {Object} svgNode - Root SVG node from svgson
 * @returns {Object} Width and height dimensions
 */
function extractDimensions(svgNode) {
  const { attributes = {} } = svgNode;
  let width = 24;
  let height = 24;

  // Try to get dimensions from viewBox first
  if (attributes.viewBox) {
    const viewBoxMatch = attributes.viewBox.match(/^[\d\s]*\s+([\d.]+)\s+([\d.]+)$/);
    if (viewBoxMatch) {
      width = parseFloat(viewBoxMatch[1]);
      height = parseFloat(viewBoxMatch[2]);
    }
  }
  
  // Fallback to width/height attributes
  if (attributes.width && attributes.height) {
    const widthNum = parseFloat(attributes.width);
    const heightNum = parseFloat(attributes.height);
    if (!isNaN(widthNum) && !isNaN(heightNum)) {
      width = widthNum;
      height = heightNum;
    }
  }

  return { width, height };
}

/**
 * Core SVG formatting function
 * @param {string} svgString - Raw SVG string
 * @param {Object} options - Processing options
 * @returns {string} Processed and standardized SVG string
 */
function formatSvgString(svgString, options = {}) {
  const opts = { ...defaultSvgOptimizationOptions, ...options };
  
  try {
    // Ensure we have a complete SVG element
    let completeSvg = svgString.trim();
    if (!completeSvg.startsWith('<svg')) {
      completeSvg = `<svg xmlns="http://www.w3.org/2000/svg">${completeSvg}</svg>`;
    }

    // Parse SVG to object tree
    const svgObject = parseSync(completeSvg);
    
    // Extract dimensions
    const { width, height } = extractDimensions(svgObject);
    
    // Process all elements and get objects back
    const processedElementObjects = processElements(svgObject, opts);
    
    // Convert objects to strings
    const processedElements = processedElementObjects.map(element => {
      const elementString = stringify(element);
      // For group elements, don't convert to self-closing
      if (element.name === 'g') {
        return elementString.split('\n').map(line => line.trim() ? `  ${line}` : line).join('\n');
      }
      // Convert to self-closing if it's an empty element (only for non-group elements)
      const selfClosing = elementString.replace(/><\/[^>]+>$/, '/>');
      // Add proper indentation
      return selfClosing.split('\n').map(line => line.trim() ? `  ${line}` : line).join('\n');
    });
    
    // Sort elements if enabled
    if (opts.sortNodes) {
      processedElements.sort((a, b) => {
        // Paths first, then alphabetical
        const aIsPath = a.includes('<path');
        const bIsPath = b.includes('<path');
        
        if (aIsPath && !bIsPath) return -1;
        if (!aIsPath && bIsPath) return 1;
        return a.localeCompare(b);
      });
    }
    
    // Remove duplicates if enabled
    let uniqueElements = processedElements;
    if (opts.filterNodes) {
      uniqueElements = [...new Set(processedElements)];
    }
    
    // Assemble final SVG
    const svgContent = uniqueElements.join('\n');
    
    const finalSvg = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${width}"
  height="${height}"
  viewBox="0 0 ${width} ${height}"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
${svgContent}
</svg>`;

    return finalSvg;
    
  } catch (error) {
    console.error('SVG processing error:', error.message);
    return svgString; // Return original on error
  }
}

/**
 * Memoized SVG optimization function
 * @param {string} svgString - Raw SVG string
 * @param {Object} options - Processing options
 * @returns {string} Optimized SVG string
 */
export const optimizeSvg = memoize(formatSvgString, (svgString, options = {}) => {
  // Create cache key from SVG content and options
  return `${svgString}__${JSON.stringify(options)}`;
});

/**
 * Process SVG with custom options
 * @param {string} svgString - Raw SVG string
 * @param {Object} customOptions - Custom processing options
 * @returns {string} Processed SVG string
 */
export function processSvg(svgString, customOptions = {}) {
  return optimizeSvg(svgString, customOptions);
}

/**
 * Batch process multiple SVGs
 * @param {Array} svgData - Array of {content, filename} objects
 * @param {Object} options - Processing options
 * @returns {Array} Array of processed {content, filename} objects
 */
export function batchProcessSvgs(svgData, options = {}) {
  return svgData.map(({ content, filename }) => ({
    content: processSvg(content, options),
    filename
  }));
}