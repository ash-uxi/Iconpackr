import { optimizeSvg } from './src/utils/svgo.js';
import fs from 'fs';

async function testOptimization() {
  const svgContent = fs.readFileSync('/Users/ashishkashyap/icoviewer/svg/contrast/ai/ai-01.svg', 'utf8');
  console.log('=== ORIGINAL ===');
  console.log(svgContent);

  const optimized = await optimizeSvg(svgContent, { style: 'contrast' });
  console.log('\n=== AFTER OPTIMIZATION ===');
  console.log(optimized);
}

testOptimization().catch(console.error); 