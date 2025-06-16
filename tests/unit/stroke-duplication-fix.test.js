#!/usr/bin/env node

/**
 * Unit tests for stroke icon attribute duplication fix
 * Tests the specific issue where fill="none" was being duplicated in stroke icons
 */

import { detectIconStyle, applyStyleTransformations } from '../../src/utils/style-handler.js';

// Test cases with problematic SVG patterns that caused duplication
const testCases = [
  {
    name: 'stroke-with-existing-fill-none',
    input: '<svg><path d="M12 2L2 12Z" stroke="currentColor" fill="none"/></svg>',
    expected: 'should not duplicate fill="none"'
  },
  {
    name: 'stroke-with-colored-fill',
    input: '<svg><path d="M12 2L2 12Z" stroke="#111111" fill="#FF0000"/></svg>',
    expected: 'should convert fill to none and stroke to currentColor'
  },
  {
    name: 'stroke-without-fill',
    input: '<svg><path d="M12 2L2 12Z" stroke="currentColor"/></svg>',
    expected: 'should add fill="none" without duplication'
  },
  {
    name: 'complex-stroke-icon',
    input: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 12.624v-4M12 16zm9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    expected: 'should handle complex real-world example'
  },
  {
    name: 'multiple-paths-stroke',
    input: '<svg><path d="M1 1L2 2" stroke="red" fill="blue"/><path d="M3 3L4 4" stroke="green"/></svg>',
    expected: 'should handle multiple paths correctly'
  }
];

class StrokeDuplicationTest {
  constructor() {
    this.passedTests = 0;
    this.failedTests = 0;
    this.results = [];
  }

  runTest(testCase) {
    console.log(`\n🧪 Testing: ${testCase.name}`);
    
    try {
      // Detect style
      const detectedStyle = detectIconStyle(testCase.input);
      console.log(`   Detected style: ${detectedStyle}`);
      
      // Apply transformations
      const processed = applyStyleTransformations(testCase.input, detectedStyle);
      console.log(`   Input:     ${testCase.input}`);
      console.log(`   Processed: ${processed}`);
      
      // Check for duplicate fill="none" attributes
      const duplicateFillNoneRegex = /fill="none"[^>]*fill="none"/;
      const hasDuplicateFillNone = duplicateFillNoneRegex.test(processed);
      
      if (hasDuplicateFillNone) {
        throw new Error(`Duplicate fill="none" found in processed SVG`);
      }
      
      // For stroke style, verify it has proper attributes
      if (detectedStyle === 'stroke') {
        // Should have stroke="currentColor"
        if (!processed.includes('stroke="currentColor"')) {
          throw new Error('Missing stroke="currentColor" in stroke icon');
        }
        
        // Should have fill="none" but only once per element
        const fillNoneMatches = (processed.match(/fill="none"/g) || []).length;
        const pathElements = (processed.match(/<path/g) || []).length;
        
        if (fillNoneMatches === 0) {
          throw new Error('Missing fill="none" in stroke icon');
        }
        
        // Each path should have at most one fill="none"
        const pathsWithDuplicateFill = processed.match(/<path[^>]*fill="none"[^>]*fill="none"/g);
        if (pathsWithDuplicateFill && pathsWithDuplicateFill.length > 0) {
          throw new Error(`Found ${pathsWithDuplicateFill.length} path elements with duplicate fill="none"`);
        }
      }
      
      console.log(`   ✅ PASSED: ${testCase.expected}`);
      this.passedTests++;
      this.results.push({ name: testCase.name, status: 'PASSED', processed });
      
    } catch (error) {
      console.log(`   ❌ FAILED: ${error.message}`);
      this.failedTests++;
      this.results.push({ name: testCase.name, status: 'FAILED', error: error.message });
    }
  }

  runAllTests() {
    console.log('🔧 Running Stroke Icon Duplication Fix Tests\n');
    console.log('=' .repeat(60));
    
    testCases.forEach(testCase => this.runTest(testCase));
    
    console.log('\n' + '='.repeat(60));
    console.log('📊 TEST SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Passed: ${this.passedTests}`);
    console.log(`❌ Failed: ${this.failedTests}`);
    console.log(`📈 Success Rate: ${((this.passedTests / (this.passedTests + this.failedTests)) * 100).toFixed(1)}%`);
    
    if (this.failedTests > 0) {
      console.log('\n💥 FAILED TESTS:');
      this.results
        .filter(r => r.status === 'FAILED')
        .forEach(result => console.log(`   - ${result.name}: ${result.error}`));
      
      process.exit(1);
    } else {
      console.log('\n🎉 All tests passed! The stroke duplication fix is working correctly.');
      process.exit(0);
    }
  }
}

// Run tests if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const testRunner = new StrokeDuplicationTest();
  testRunner.runAllTests();
}

export { StrokeDuplicationTest, testCases };