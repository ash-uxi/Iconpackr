#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

// Test icons we expect to find - now includes all 5 available icon styles
const testIcons = [
  // Stroke Style
  '../icons/react-jsx/stroke/money-&-payments/PiBankStroke.jsx',
  '../icons/react-jsx/stroke/money-&-payments/PiSafeStroke.jsx',
  '../icons/react-jsx/stroke/money-&-payments/PiCreditCardLockedStroke.jsx',
  '../icons/react-jsx/stroke/money-&-payments/PiPiggyBankStroke.jsx',
  '../icons/react-jsx/stroke/money-&-payments/PiCreditCardStroke.jsx',
  
  // Solid Style
  '../icons/react-jsx/solid/money-&-payments/PiBankSolid.jsx',
  '../icons/react-jsx/solid/money-&-payments/PiSafeSolid.jsx',
  '../icons/react-jsx/solid/money-&-payments/PiCreditCardLockedSolid.jsx',
  '../icons/react-jsx/solid/money-&-payments/PiPiggyBankSolid.jsx',
  '../icons/react-jsx/solid/money-&-payments/PiCreditCardSolid.jsx',
  
  // Contrast Style
  '../icons/react-jsx/contrast/money-&-payments/PiPiggyBankContrast.jsx',
  '../icons/react-jsx/contrast/money-&-payments/PiCreditCardArrowRepeatContrast.jsx',
  '../icons/react-jsx/contrast/money-&-payments/PiCreditCardArrowLeftContrast.jsx',
  '../icons/react-jsx/contrast/money-&-payments/PiBankContrast.jsx',
  '../icons/react-jsx/contrast/money-&-payments/PiSafeContrast.jsx',
  
  // Duo-Stroke Style
  '../icons/react-jsx/duo-stroke/money-&-payments/PiCreditCardDuoStroke.jsx',
  '../icons/react-jsx/duo-stroke/money-&-payments/PiCreditCardPlusDuoStroke.jsx',
  '../icons/react-jsx/duo-stroke/money-&-payments/PiCreditCardArrowRepeatDuoStroke.jsx',
  '../icons/react-jsx/duo-stroke/money-&-payments/PiBankDuoStroke.jsx',
  '../icons/react-jsx/duo-stroke/money-&-payments/PiSafeDuoStroke.jsx',
  
  // Duo-Solid Style
  '../icons/react-jsx/duo-solid/money-&-payments/PiCreditCardDuoSolid.jsx',
  '../icons/react-jsx/duo-solid/money-&-payments/PiCreditCardPlusDuoSolid.jsx',
  '../icons/react-jsx/duo-solid/money-&-payments/PiCreditCardArrowRepeatDuoSolid.jsx',
  '../icons/react-jsx/duo-solid/money-&-payments/PiBankDuoSolid.jsx',
  '../icons/react-jsx/duo-solid/money-&-payments/PiSafeDuoSolid.jsx',
];

/**
 * Advanced component validation based on framework best practices
 */
function validateComponentStructure(content, framework, iconPath) {
  const componentName = path.basename(iconPath, path.extname(iconPath));
  const style = iconPath.includes('/stroke/') ? 'stroke' : 
                iconPath.includes('/solid/') ? 'solid' :
                iconPath.includes('/contrast/') ? 'contrast' :
                iconPath.includes('/duo-stroke/') ? 'duo-stroke' : 
                iconPath.includes('/duo-solid/') ? 'duo-solid' : 'unknown';
  
  const checks = {
    basic: {},
    accessibility: {},
    performance: {},
    theming: {},
    props: {},
    syntax: {}
  };

  if (framework === 'vue') {
    // Vue.js specific validation based on Vue testing best practices
    checks.basic = {
      hasTemplate: content.includes('<template>'),
      hasScript: content.includes('<script>'),
      hasSvgElement: content.includes('<svg'),
      hasExportDefault: content.includes('export default'),
      hasComponentName: content.includes(`name: '${componentName}'`),
    };
    
    checks.accessibility = {
      hasAriaLabel: content.includes('aria-label') || content.includes(':aria-label'),
      hasRole: content.includes('role=') || content.includes(':role'),
      hasViewBox: content.includes('viewBox='),
      hasXmlns: content.includes('xmlns='),
    };
    
    checks.theming = {
      usesCurrentColor: content.includes('currentColor'),
      hasColorProp: content.includes('color:'),
      hasStyleBinding: content.includes(':style=') || content.includes('v-bind:style'),
    };
    
    checks.props = {
      hasSize: content.includes('size:'),
      hasColor: content.includes('color:'),
      hasClassName: content.includes('className:'),
      hasPropsValidation: content.includes('type:') || content.includes('default:'),
    };
    
    checks.syntax = {
      hasValidTemplate: content.includes('</template>'),
      hasValidScript: content.includes('</script>'),
      hasProperBinding: content.includes(':') || content.includes('v-bind'),
      hasNoSyntaxErrors: !content.includes('undefined') && !content.includes('{{  }}'),
    };
    
  } else if (framework === 'react-native') {
    // React Native specific validation  
    checks.basic = {
      hasImportReact: content.includes('import React') || content.includes('from "react"'),
      hasImportSvg: content.includes('react-native-svg'),
      hasSvgComponent: content.includes('<Svg'),
      hasExportDefault: content.includes('export default'),
    };
    
    checks.accessibility = {
      hasAccessibilityLabel: content.includes('accessibilityLabel'),
      hasAccessibilityRole: content.includes('accessibilityRole'),
      hasViewBox: content.includes('viewBox='),
    };
    
    checks.theming = {
      hasColorProps: content.includes('fill={') || content.includes('stroke={'),
      usesProps: content.includes('color') && content.includes('size'),
    };
    
    checks.props = {
      hasSize: content.includes('size') && content.includes('width') && content.includes('height'),
      hasColor: content.includes('color'),
      hasPropsDestructuring: content.includes('const {') || content.includes('function'),
    };
    
  } else if (framework === 'svelte') {
    // Svelte specific validation based on Svelte best practices
    checks.basic = {
      hasScript: content.includes('<script>'),
      hasSvgElement: content.includes('<svg'),
      hasExportLet: content.includes('export let'),
      hasScriptEnd: content.includes('</script>'),
    };
    
    checks.accessibility = {
      hasAriaLabel: content.includes('aria-label'),
      hasRole: content.includes('role='),
      hasViewBox: content.includes('viewBox='),
      hasXmlns: content.includes('xmlns='),
    };
    
    checks.theming = {
      usesCurrentColor: content.includes('currentColor'),
      hasColorProp: content.includes('export let color'),
      hasStyleBinding: content.includes('style="color:') || content.includes('style='),
    };
    
    checks.props = {
      hasSize: content.includes('export let size'),
      hasColor: content.includes('export let color'),
      hasClassName: content.includes('export let className'),
      hasDefaultValues: content.includes('= 24') || content.includes('= undefined'),
    };
    
    checks.syntax = {
      hasValidScript: content.includes('</script>'),
      hasProperBinding: content.includes('{') && content.includes('}'),
      hasRestProps: content.includes('{...$$restProps}'),
      hasNoSyntaxErrors: !content.includes('undefined;') && !content.includes('{{}}'),
    };
    
  } else {
    // React JSX/TSX validation based on React Testing Library best practices
    checks.basic = {
      hasImportReact: content.includes('import React') || content.includes('from "react"'),
      hasSvgElement: content.includes('<svg'),
      hasExportDefault: content.includes('export default'),
      hasReturnStatement: content.includes('return'),
    };
    
    checks.accessibility = {
      hasAriaLabel: content.includes('aria-label'),
      hasRole: content.includes('role='),
      hasViewBox: content.includes('viewBox='),
      hasXmlns: content.includes('xmlns='),
    };
    
    checks.theming = {
      usesCurrentColor: content.includes('currentColor'),
      hasStyleProp: content.includes('style={') || content.includes('style:'),
      hasColorTheming: content.includes('color') && (content.includes('fill=') || content.includes('stroke=')),
    };
    
    checks.props = {
      hasSize: content.includes('size'),
      hasColor: content.includes('color'),
      hasClassName: content.includes('className'),
      hasPropsInterface: framework === 'react-tsx' ? content.includes('interface') || content.includes('type ') : true,
    };
    
    checks.syntax = {
      hasJSDoc: content.includes('/**') && content.includes('*/'),
      hasTypeScript: framework === 'react-tsx' ? content.includes(': ') || content.includes('interface') : true,
      hasNoConsoleLog: !content.includes('console.log'),
      hasProperJSX: content.includes('return (') || content.includes('return <'),
    };
  }
  
  // Style-specific validations
  checks.styleSpecific = validateStyleSpecificContent(content, style, framework);
  
  return checks;
}

/**
 * Validate style-specific content requirements
 */
function validateStyleSpecificContent(content, style, framework) {
  const checks = {};
  
  switch (style) {
    case 'stroke':
      checks.hasStrokeAttributes = content.includes('stroke=') || content.includes('stroke:');
      checks.hasFillNone = content.includes('fill="none"') || content.includes("fill='none'");
      checks.hasStrokeWidth = content.includes('stroke-width') || content.includes('strokeWidth');
      break;
      
    case 'solid':
      checks.hasFillAttributes = content.includes('fill=') || content.includes('fill:');
      checks.noStrokeAttributes = !content.includes('stroke=') || content.includes('stroke="none"');
      checks.noFillNoneOnSvg = !content.includes('<svg[^>]*fill="none"');
      break;
      
    case 'contrast':
      checks.hasOpacityElements = content.includes('opacity=') || content.includes('opacity:');
      checks.hasBothFillAndStroke = (content.includes('fill=') || content.includes('fill:')) && 
                                   (content.includes('stroke=') || content.includes('stroke:'));
      break;
      
    case 'duo-stroke':
      checks.hasOpacityElements = content.includes('opacity=') || content.includes('opacity:');
      checks.hasStrokeAttributes = content.includes('stroke=') || content.includes('stroke:');
      checks.hasUnifiedColorHandling = content.includes('stroke={color') || content.includes(':stroke="color') || content.includes('stroke={color');
      break;
      
    case 'duo-solid':
      checks.hasOpacityElements = content.includes('opacity=') || content.includes('opacity:');
      checks.hasFillAttributes = content.includes('fill=') || content.includes('fill:');
      checks.hasUnifiedColorHandling = content.includes('fill={color') || content.includes(':fill="color') || content.includes('fill={color');
      checks.noStrokeAttributes = !content.includes('stroke=') || content.includes('stroke="none"');
      checks.noFillNoneOnSvg = !content.includes('<svg[^>]*fill="none"');
      break;
  }
  
  return checks;
}

/**
 * Check if an icon file exists and has valid content
 */
function checkIconFile(filePath, framework) {
  // Map to correct file extension
  const extensionMap = {
    'react-jsx': '.jsx',
    'react-tsx': '.tsx', 
    'vue': '.vue',
    'react-native': '.jsx',
    'svelte': '.svelte'
  };
  
  const extension = extensionMap[framework];
  let fullPath = filePath.replace('react-jsx', framework);
  
  // Fix extension for TypeScript and Vue
  if (framework === 'react-tsx') {
    fullPath = fullPath.replace('.jsx', '.tsx');
  } else if (framework === 'vue') {
    fullPath = fullPath.replace('.jsx', '.vue');
  } else if (framework === 'svelte') {
    fullPath = fullPath.replace('.jsx', '.svelte');
  }
  
  fullPath = path.resolve(fullPath);
  
  if (!fs.existsSync(fullPath)) {
    return { exists: false, error: `File not found: ${fullPath}` };
  }
  
  try {
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Run comprehensive validation
    const validationResults = validateComponentStructure(content, framework, filePath);
    
    // Calculate overall pass rate
    const allChecks = Object.values(validationResults).flatMap(category => Object.values(category));
    const passedChecks = allChecks.filter(check => check === true).length;
    const totalChecks = allChecks.length;
    const passRate = Math.round((passedChecks / totalChecks) * 100);
    
    return {
      exists: true,
      passed: passRate >= 80, // 80% pass rate required
      passRate,
      validationResults,
      size: Math.round(content.length / 1024 * 100) / 100, // KB
      content: content.substring(0, 200) + '...', // Preview
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
    validationDetails: {},
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
      console.log(chalk.green(`✅ ${iconName} (${result.size}KB) - ${result.passRate}%`));
      results.passed++;
    } else {
      console.log(chalk.yellow(`⚠️  ${iconName} (${result.size}KB) - ${result.passRate}%`));
      
      // Show detailed validation failures
      const failedCategories = Object.entries(result.validationResults)
        .filter(([category, checks]) => {
          const failedChecks = Object.values(checks).filter(check => check === false);
          return failedChecks.length > 0;
        })
        .map(([category, checks]) => {
          const failedChecks = Object.entries(checks)
            .filter(([key, value]) => value === false)
            .map(([key]) => key);
          return `${category} (${failedChecks.join(', ')})`;
        });
      
      console.log(chalk.gray(`   Failed: ${failedCategories.join('; ')}`));
      results.failed++;
    }
    
    // Track validation details for summary
    if (result.validationResults) {
      Object.entries(result.validationResults).forEach(([category, checks]) => {
        if (!results.validationDetails[category]) {
          results.validationDetails[category] = { passed: 0, total: 0 };
        }
        Object.values(checks).forEach(check => {
          results.validationDetails[category].total++;
          if (check === true) {
            results.validationDetails[category].passed++;
          }
        });
      });
    }
  });
  
  // Show validation category summary
  if (Object.keys(results.validationDetails).length > 0) {
    console.log(chalk.cyan('\n📋 Validation Category Summary:'));
    Object.entries(results.validationDetails).forEach(([category, stats]) => {
      const percentage = Math.round((stats.passed / stats.total) * 100);
      const icon = percentage >= 90 ? '✅' : percentage >= 70 ? '⚠️' : '❌';
      console.log(chalk.gray(`   ${icon} ${category}: ${stats.passed}/${stats.total} (${percentage}%)`));
    });
  }
  
  return results;
}

/**
 * Enhanced component quality analysis across multiple files and styles
 */
function testComponentQuality() {
  console.log(chalk.blue('\n🔍 Enhanced Component Quality Analysis'));
  console.log(chalk.gray('=' .repeat(50)));
  
  const sampleFiles = [
    '../icons/react-jsx/stroke/money-&-payments/PiSafeStroke.jsx',
    '../icons/react-jsx/solid/money-&-payments/PiPiggyBankSolid.jsx',
    '../icons/react-jsx/contrast/money-&-payments/PiPiggyBankContrast.jsx',
    '../icons/react-jsx/duo-stroke/money-&-payments/PiCreditCardDuoStroke.jsx',
    '../icons/react-jsx/duo-solid/money-&-payments/PiCreditCardDuoSolid.jsx',
  ];
  
  const overallQuality = {
    filesAnalyzed: 0,
    totalChecks: 0,
    passedChecks: 0,
    styleSpecificResults: {},
  };
  
  sampleFiles.forEach(filePath => {
    if (!fs.existsSync(filePath)) {
      console.log(chalk.yellow(`⚠️  Skipping ${path.basename(filePath)} - file not found`));
      return;
    }
    
    const style = filePath.includes('/stroke/') ? 'stroke' : 
                  filePath.includes('/solid/') ? 'solid' :
                  filePath.includes('/contrast/') ? 'contrast' :
                  filePath.includes('/duo-stroke/') ? 'duo-stroke' : 'duo-solid';
    
    console.log(chalk.cyan(`\n📄 Analyzing ${style} style: ${path.basename(filePath)}`));
    
    const content = fs.readFileSync(filePath, 'utf8');
    const validation = validateComponentStructure(content, 'react-jsx', filePath);
    
    overallQuality.filesAnalyzed++;
    
    // Count checks for this file
    const allChecks = Object.values(validation).flatMap(category => Object.values(category));
    const passedChecks = allChecks.filter(check => check === true).length;
    
    overallQuality.totalChecks += allChecks.length;
    overallQuality.passedChecks += passedChecks;
    
    // Track style-specific results
    if (!overallQuality.styleSpecificResults[style]) {
      overallQuality.styleSpecificResults[style] = { total: 0, passed: 0 };
    }
    overallQuality.styleSpecificResults[style].total += allChecks.length;
    overallQuality.styleSpecificResults[style].passed += passedChecks;
    
    // Show detailed results for this file
    Object.entries(validation).forEach(([category, checks]) => {
      const categoryPassed = Object.values(checks).filter(check => check === true).length;
      const categoryTotal = Object.values(checks).length;
      const percentage = Math.round((categoryPassed / categoryTotal) * 100);
      const icon = percentage >= 90 ? '✅' : percentage >= 70 ? '⚠️' : '❌';
      
      console.log(`   ${icon} ${category}: ${categoryPassed}/${categoryTotal} (${percentage}%)`);
      
      // Show failed checks
      const failedChecks = Object.entries(checks)
        .filter(([key, value]) => value === false)
        .map(([key]) => key);
      
      if (failedChecks.length > 0) {
        console.log(chalk.gray(`      Failed: ${failedChecks.join(', ')}`));
      }
    });
  });
  
  // Overall quality summary
  const overallPercentage = Math.round((overallQuality.passedChecks / overallQuality.totalChecks) * 100);
  console.log(chalk.bold.cyan(`\n📊 Overall Quality Score: ${overallPercentage}% (${overallQuality.passedChecks}/${overallQuality.totalChecks})`));
  
  // Style-specific summary
  console.log(chalk.cyan('\n🎨 Quality by Icon Style:'));
  Object.entries(overallQuality.styleSpecificResults).forEach(([style, stats]) => {
    const percentage = Math.round((stats.passed / stats.total) * 100);
    const icon = percentage >= 90 ? '✅' : percentage >= 70 ? '⚠️' : '❌';
    console.log(`   ${icon} ${style}: ${percentage}%`);
  });
  
  return overallQuality;
}

/**
 * Generate a comprehensive test report in markdown format
 */
function generateTestReport(allResults, qualityResult) {
  const timestamp = new Date().toISOString();
  const totalPassed = allResults.reduce((sum, r) => sum + r.passed, 0);
  const totalTests = allResults.reduce((sum, r) => sum + r.total, 0);
  const overallSuccess = Math.round((totalPassed / totalTests) * 100);
  
  let report = `# IconPackr Framework Test Report\n\n`;
  report += `**Generated:** ${timestamp}\n`;
  report += `**Overall Success Rate:** ${overallSuccess}% (${totalPassed}/${totalTests})\n\n`;
  
  // Framework results
  report += `## Framework Test Results\n\n`;
  allResults.forEach(result => {
    const successRate = Math.round((result.passed / result.total) * 100);
    const status = successRate === 100 ? '🎉 Perfect' : successRate >= 90 ? '✅ Excellent' : successRate >= 75 ? '⚠️ Good' : '❌ Needs Work';
    
    report += `### ${result.framework.toUpperCase()}\n`;
    report += `- **Status:** ${status}\n`;
    report += `- **Success Rate:** ${successRate}% (${result.passed}/${result.total})\n`;
    
    if (Object.keys(result.validationDetails).length > 0) {
      report += `- **Validation Details:**\n`;
      Object.entries(result.validationDetails).forEach(([category, stats]) => {
        const percentage = Math.round((stats.passed / stats.total) * 100);
        report += `  - ${category}: ${percentage}% (${stats.passed}/${stats.total})\n`;
      });
    }
    
    if (result.errors.length > 0) {
      report += `- **Errors:** ${result.errors.length}\n`;
    }
    report += `\n`;
  });
  
  // Quality analysis
  if (qualityResult && qualityResult.totalChecks > 0) {
    const overallQuality = Math.round((qualityResult.passedChecks / qualityResult.totalChecks) * 100);
    report += `## Component Quality Analysis\n\n`;
    report += `- **Overall Quality Score:** ${overallQuality}%\n`;
    report += `- **Files Analyzed:** ${qualityResult.filesAnalyzed}\n`;
    report += `- **Total Checks:** ${qualityResult.totalChecks}\n\n`;
    
    if (qualityResult.styleSpecificResults) {
      report += `### Quality by Icon Style\n\n`;
      Object.entries(qualityResult.styleSpecificResults).forEach(([style, stats]) => {
        const percentage = Math.round((stats.passed / stats.total) * 100);
        report += `- **${style}:** ${percentage}%\n`;
      });
    }
  }
  
  report += `\n## Test Coverage\n\n`;
  report += `This test suite validates:\n`;
  report += `- ✅ Component structure and syntax\n`;
  report += `- ✅ Accessibility compliance\n`;
  report += `- ✅ Theming and styling\n`;
  report += `- ✅ Props handling\n`;
  report += `- ✅ Framework-specific best practices\n`;
  report += `- ✅ Style-specific requirements (stroke, solid, contrast, duo-stroke, duo-solid)\n\n`;
  
  report += `## Recommendations\n\n`;
  if (overallSuccess >= 95) {
    report += `🎉 Excellent work! Your components meet high-quality standards across all frameworks.\n\n`;
  } else if (overallSuccess >= 85) {
    report += `✅ Good performance overall. Consider addressing the failing tests to reach excellence.\n\n`;
  } else {
    report += `⚠️ Several issues detected. Focus on improving component structure and framework compliance.\n\n`;
  }
  
  // Save report to file
  fs.writeFileSync('framework-tests/test-report.md', report);
  console.log(chalk.green('\n📄 Detailed test report saved to framework-tests/test-report.md'));
  
  return report;
}

/**
 * Main test runner
 */
function runTests() {
  console.log(chalk.bold.blue('\n🧪 IconPackr Enhanced Framework Test Suite'));
  console.log(chalk.gray('Testing generated icon components across all frameworks and styles\n'));
  
  const frameworks = [
    { name: 'react-jsx', ext: '.jsx' },
    { name: 'react-tsx', ext: '.tsx' },
    { name: 'vue', ext: '.vue' },
    { name: 'react-native', ext: '.jsx' },
    { name: 'svelte', ext: '.svelte' },
  ];
  
  const allResults = [];
  
  // Test each framework
  frameworks.forEach(framework => {
    const result = testFramework(framework.name, framework.ext);
    allResults.push(result);
  });
  
  // Test component quality across all styles
  const qualityResult = testComponentQuality();
  
  // Summary Report
  console.log(chalk.bold.blue('\n📊 Comprehensive Test Summary Report'));
  console.log(chalk.gray('=' .repeat(60)));
  
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
  
  // Show style coverage summary
  const styles = ['stroke', 'solid', 'contrast', 'duo-stroke', 'duo-solid'];
  const stylesFound = new Set();
  
  allResults.forEach(result => {
    Object.keys(result.validationDetails).forEach(category => {
      if (category === 'styleSpecific') {
        styles.forEach(style => {
          // Check if this style was tested based on test icons
          const hasStyleTests = testIcons.some(icon => icon.includes(`/${style}/`));
          if (hasStyleTests) stylesFound.add(style);
        });
      }
    });
  });
  
  console.log(chalk.bold.cyan(`\n🎨 Icon Styles Coverage: ${stylesFound.size}/${styles.length} styles`));
  stylesFound.forEach(style => console.log(chalk.green(`   ✅ ${style}`)));
  styles.filter(style => !stylesFound.has(style)).forEach(style => {
    console.log(chalk.yellow(`   ⚠️  ${style} (not tested - missing test files)`));
  });
  
  // Generate comprehensive markdown report
  generateTestReport(allResults, qualityResult);
  
  // Final verdict
  if (overallSuccess === 100) {
    console.log(chalk.green.bold('\n🎉 ALL TESTS PASSED! IconPackr is working perfectly across all frameworks! 🎉'));
  } else if (overallSuccess >= 90) {
    console.log(chalk.yellow.bold('\n⚠️  Most tests passed, but there are some issues to address.'));
  } else {
    console.log(chalk.red.bold('\n❌ Multiple issues found. Please review the errors above.'));
  }
  
  // Recommendations based on results
  console.log(chalk.bold.blue('\n💡 Recommendations:'));
  if (stylesFound.size < styles.length) {
    console.log(chalk.yellow('   - Generate missing icon styles (solid, duo-solid) to complete test coverage'));
  }
  if (overallSuccess < 95) {
    console.log(chalk.yellow('   - Review failed validation checks to improve component quality'));
    console.log(chalk.yellow('   - Check the detailed report in framework-tests/test-report.md'));
  }
  if (qualityResult && qualityResult.filesAnalyzed < 5) {
    console.log(chalk.yellow('   - Ensure all icon style variations are generated for comprehensive testing'));
  }
  
  console.log(chalk.gray('\n📋 Test completed. Check framework-tests/test-report.md for detailed analysis.'));
}

// Run the tests
runTests(); 