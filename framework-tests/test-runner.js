#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

// Test icons we expect to find
const testIcons = [
  // Stroke Style
  'test-output/react-jsx/stroke/money-&-payments/PiCurrencySignRupeesStroke.jsx',
  'test-output/react-jsx/stroke/money-&-payments/PiSafeStroke.jsx',
  'test-output/react-jsx/stroke/money-&-payments/PiCreditCardLockedStroke.jsx',
  
  // Contrast Style
  'test-output/react-jsx/contrast/money-&-payments/PiPiggyBankContrast.jsx',
  'test-output/react-jsx/contrast/money-&-payments/PiCreditCardArrowRepeatContrast.jsx',
  'test-output/react-jsx/contrast/money-&-payments/PiCreditCardArrowLeftContrast.jsx',
  
  // Duo-Stroke Style
  'test-output/react-jsx/duo-stroke/money-&-payments/PiCurrencySignYuanDuoStroke.jsx',
  'test-output/react-jsx/duo-stroke/money-&-payments/PiCreditCardPlusDuoStroke.jsx',
  'test-output/react-jsx/duo-stroke/money-&-payments/PiCreditCardArrowRepeatDuoStroke.jsx',
];

/**
 * Check if an icon file exists and has valid content
 */
function checkIconFile(filePath, framework) {
  // Map to correct file extension
  const extensionMap = {
    'react-jsx': '.jsx',
    'react-tsx': '.tsx', 
    'vue': '.vue',
    'react-native': '.jsx'
  };
  
  const extension = extensionMap[framework];
  let fullPath = filePath.replace('react-jsx', framework);
  
  // Fix extension for TypeScript and Vue
  if (framework === 'react-tsx') {
    fullPath = fullPath.replace('.jsx', '.tsx');
  } else if (framework === 'vue') {
    fullPath = fullPath.replace('.jsx', '.vue');
  }
  
  fullPath = path.resolve(fullPath);
  
  if (!fs.existsSync(fullPath)) {
    return { exists: false, error: `File not found: ${fullPath}` };
  }
  
  try {
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Framework-specific validation checks
    let checks = {};
    
    if (framework === 'vue') {
      checks = {
        hasTemplate: content.includes('<template>'),
        hasScript: content.includes('<script>'),
        hasComponent: content.includes('<svg'),
        hasViewBox: content.includes('viewBox'),
        hasStrokeAttrs: content.includes('stroke=') || content.includes('stroke:'),
        hasPropsHandling: content.includes('size') && content.includes('color'),
      };
    } else if (framework === 'react-native') {
      checks = {
        hasImport: content.includes('import'),
        hasExport: content.includes('export default'),
        hasSvgComponent: content.includes('Svg'),
        hasViewBox: content.includes('viewBox'),
        hasColorProps: content.includes('color'),
        hasPropsHandling: content.includes('size') && content.includes('color'),
      };
    } else {
      // React JSX/TSX
      checks = {
        hasImport: content.includes('import'),
        hasExport: content.includes('export'),
        hasComponent: content.includes('return'),
        hasViewBox: content.includes('viewBox'),
        hasStrokeAttrs: content.includes('stroke='),
        hasPropsHandling: content.includes('size') && content.includes('color'),
      };
    }
    
    const passed = Object.values(checks).every(check => check);
    
    return {
      exists: true,
      passed,
      checks,
      size: Math.round(content.length / 1024 * 100) / 100, // KB
    };
  } catch (error) {
    return { exists: true, error: error.message };
  }
}

/**
 * Test a framework's icon generation
 */
function testFramework(framework, extension) {
  console.log(chalk.blue(`\n📱 Testing ${framework.toUpperCase()} Framework`));
  console.log(chalk.gray('=' .repeat(50)));
  
  const results = {
    framework,
    total: testIcons.length,
    passed: 0,
    failed: 0,
    errors: [],
  };
  
  testIcons.forEach((iconPath, index) => {
    const iconName = path.basename(iconPath, '.jsx');
    const result = checkIconFile(iconPath, framework);
    
    if (!result.exists) {
      console.log(chalk.red(`❌ ${iconName}`));
      console.log(chalk.gray(`   ${result.error}`));
      results.failed++;
      results.errors.push(result.error);
    } else if (result.error) {
      console.log(chalk.red(`❌ ${iconName}`));
      console.log(chalk.gray(`   Error: ${result.error}`));
      results.failed++;
      results.errors.push(result.error);
    } else if (result.passed) {
      console.log(chalk.green(`✅ ${iconName} (${result.size}KB)`));
      results.passed++;
    } else {
      console.log(chalk.yellow(`⚠️  ${iconName} (${result.size}KB)`));
      console.log(chalk.gray(`   Failed checks: ${Object.entries(result.checks)
        .filter(([key, value]) => !value)
        .map(([key]) => key)
        .join(', ')}`));
      results.failed++;
    }
  });
  
  return results;
}

/**
 * Test component content quality
 */
function testComponentQuality() {
  console.log(chalk.blue('\n🔍 Component Quality Analysis'));
  console.log(chalk.gray('=' .repeat(50)));
  
  const sampleFile = 'test-output/react-jsx/stroke/money-&-payments/PiSafeStroke.jsx';
  
  if (!fs.existsSync(sampleFile)) {
    console.log(chalk.red('❌ Sample file not found for quality analysis'));
    return;
  }
  
  const content = fs.readFileSync(sampleFile, 'utf8');
  
  const qualityChecks = {
    'Has JSDoc comments': content.includes('/**'),
    'Uses currentColor': content.includes('currentColor'),
    'Has stroke attributes': content.includes('stroke='),
    'Proper props destructuring': content.includes('size') && content.includes('color'),
    'Has accessibility': content.includes('aria') || content.includes('role'),
    'Clean SVG structure': content.includes('<svg') && content.includes('</svg>'),
    'Has proper exports': content.includes('export default'),
    'SVG has viewBox': content.includes('viewBox='),
  };
  
  Object.entries(qualityChecks).forEach(([check, passed]) => {
    console.log(passed ? chalk.green(`✅ ${check}`) : chalk.red(`❌ ${check}`));
  });
  
  return qualityChecks;
}

/**
 * Main test runner
 */
function runTests() {
  console.log(chalk.bold.blue('\n🧪 IconPackr Framework Test Suite'));
  console.log(chalk.gray('Testing generated icon components across all frameworks\n'));
  
  const frameworks = [
    { name: 'react-jsx', ext: '.jsx' },
    { name: 'react-tsx', ext: '.tsx' },
    { name: 'vue', ext: '.vue' },
    { name: 'react-native', ext: '.jsx' },
  ];
  
  const allResults = [];
  
  // Test each framework
  frameworks.forEach(framework => {
    const result = testFramework(framework.name, framework.ext);
    allResults.push(result);
  });
  
  // Test component quality
  const qualityResult = testComponentQuality();
  
  // Summary Report
  console.log(chalk.bold.blue('\n📊 Test Summary Report'));
  console.log(chalk.gray('=' .repeat(50)));
  
  allResults.forEach(result => {
    const successRate = Math.round((result.passed / result.total) * 100);
    const status = successRate === 100 ? '🎉' : successRate >= 90 ? '✅' : successRate >= 75 ? '⚠️' : '❌';
    
    console.log(`${status} ${result.framework.toUpperCase()}: ${result.passed}/${result.total} passed (${successRate}%)`);
    
    if (result.errors.length > 0) {
      console.log(chalk.gray(`   Errors: ${result.errors.length}`));
    }
  });
  
  const totalPassed = allResults.reduce((sum, r) => sum + r.passed, 0);
  const totalTests = allResults.reduce((sum, r) => sum + r.total, 0);
  const overallSuccess = Math.round((totalPassed / totalTests) * 100);
  
  console.log(chalk.bold(`\n🎯 Overall Success Rate: ${overallSuccess}% (${totalPassed}/${totalTests})`));
  
  if (overallSuccess === 100) {
    console.log(chalk.green.bold('\n🎉 ALL TESTS PASSED! IconPackr is working perfectly across all frameworks! 🎉'));
  } else if (overallSuccess >= 90) {
    console.log(chalk.yellow.bold('\n⚠️  Most tests passed, but there are some issues to address.'));
  } else {
    console.log(chalk.red.bold('\n❌ Multiple issues found. Please review the errors above.'));
  }
}

// Run the tests
runTests(); 