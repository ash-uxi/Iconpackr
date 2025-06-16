import { sanitizeSvgContent } from './src/utils/svgo.js';

// Test the triple slash fix
const testSvg = `<svg viewBox="0 0 24 24">
  <path d="M12 2L12 22" fill="#111111"////>
  <circle cx="12" cy="12" r="5" stroke="currentColor"///>
</svg>`;

console.log('Before sanitization:');
console.log(testSvg);

const cleaned = sanitizeSvgContent(testSvg);
console.log('\nAfter sanitization:');
console.log(cleaned);