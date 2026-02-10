/**
 * Converts a string to PascalCase.
 * Example: 'icon-name' or 'icon_name' or 'icon name' becomes 'IconName'.
 * Preserves acronyms like AI, DuoSolid, etc.
 * @param {string} str - The input string.
 * @returns {string} The PascalCase string.
 */
export function toPascalCase(str) {
  if (!str) return '';
  
  // Handle already PascalCase strings that might have been passed incorrectly
  if (/^Pi[A-Z]/.test(str)) {
    return str;
  }
  
  return str
    .split(/[-_\s]+/)
    .map(part => {
      if (!part) return '';
      
      // Preserve common acronyms
      const acronyms = ['AI', 'API', 'URL', 'HTML', 'CSS', 'JS', 'JSON', 'XML', 'HTTP', 'HTTPS', 'SVG'];
      const upperPart = part.toUpperCase();
      
      if (acronyms.includes(upperPart)) {
        return upperPart;
      }
      
      // Handle compound words like DuoSolid, DuoStroke
      if (part.toLowerCase() === 'duosolid') return 'DuoSolid';
      if (part.toLowerCase() === 'duostroke') return 'DuoStroke';
      
      // Regular PascalCase conversion
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join('');
}

import path from 'path';

const VALID_STYLES = ['stroke', 'solid', 'contrast', 'duo-stroke', 'duo-solid'];

export function parseIconPath(relativePath, inputDir) {
  const pathParts = relativePath.split(path.sep);
  let style, category, iconName;

  if (pathParts.length >= 3) {
    style = pathParts[0];
    category = pathParts[1];
    iconName = path.basename(pathParts[2], '.svg');
  } else {
    const inputDirParts = inputDir.split(path.sep);
    const extractedStyle = [...inputDirParts].reverse().find(p => VALID_STYLES.includes(p)) || null;

    if (pathParts.length === 2) {
      style = extractedStyle || 'auto';
      category = pathParts[0];
      iconName = path.basename(pathParts[1], '.svg');
    } else {
      style = extractedStyle || 'auto';
      const styleIndex = inputDirParts.indexOf(extractedStyle);
      category = (styleIndex >= 0 && styleIndex < inputDirParts.length - 1)
        ? inputDirParts[styleIndex + 1]
        : 'general';
      iconName = path.basename(pathParts[0], '.svg');
    }
  }

  return { style, category, iconName };
}

export function buildPrefixedComponentName(componentName, style) {
  const styleSuffix = style.split('-').map(part =>
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join('');
  return `Pi${componentName}${styleSuffix}`;
} 