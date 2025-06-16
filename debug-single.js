import fs from 'fs';
import { optimizeSvg } from './src/utils/svgo.js';
import { generateReactJSX } from './src/utils/component-templates.js';

// Read a sample SVG
const svgPath = './iconpack/input/contrast/ai/ai-01.svg';
const svgContent = fs.readFileSync(svgPath, 'utf8');

console.log('Original SVG:');
console.log(svgContent.substring(0, 200) + '...');

// Optimize it
const optimized = await optimizeSvg(svgContent, { style: 'contrast' });

console.log('\nOptimized SVG:');
console.log(optimized.substring(0, 200) + '...');

// Generate component
const viewBox = optimized.match(/viewBox="([^"]*)"/)?.[ 1] || '0 0 24 24';
const componentCode = generateReactJSX(optimized, viewBox, svgContent, {
  componentName: 'TestComponent',
  style: 'contrast',
  iconName: 'test'
});

console.log('\nGenerated component (first 500 chars):');
console.log(componentCode.substring(0, 500));