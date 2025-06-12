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