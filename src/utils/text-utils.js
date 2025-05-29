/**
 * Converts a string to PascalCase.
 * Example: 'icon-name' or 'icon_name' or 'icon name' becomes 'IconName'.
 * @param {string} str - The input string.
 * @returns {string} The PascalCase string.
 */
export function toPascalCase(str) {
  if (!str) return '';
  return str
    .split(/[-_\s]+/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
} 