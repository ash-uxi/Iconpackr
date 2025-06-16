/**
 * Unit tests for stroke icon attribute deduplication functionality
 * Tests the handleStrokeIcon function and removeDuplicateAttributes utility
 */

import { applyStyleTransformations } from '../../src/utils/style-handler.js';

// Simple test assertion helper
function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

console.log('Running Stroke Icon Attribute Deduplication Tests...\n');

// Test 1: Should not create duplicate fill="none" attributes
{
  const svg = '<svg><path stroke="red" fill="blue" d="M0 0L10 10"/></svg>';
  const result = applyStyleTransformations(svg, 'stroke');
  
  const fillMatches = result.match(/fill="none"/g) || [];
  assert(fillMatches.length === 1, `Expected 1 fill="none", got ${fillMatches.length}`);
  console.log('✓ Should not create duplicate fill="none" attributes');
}

// Test 2: Should handle elements with existing fill="none"
{
  const svg = '<svg><path stroke="red" fill="none" d="M0 0L10 10"/></svg>';
  const result = applyStyleTransformations(svg, 'stroke');
  
  const fillMatches = result.match(/fill="none"/g) || [];
  assert(fillMatches.length === 1, `Expected 1 fill="none", got ${fillMatches.length}`);
  console.log('✓ Should handle elements with existing fill="none"');
}

// Test 3: Should fix the example case from the user
{
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.766 20H10c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 16.2 2 14.8 2 12c0-1.994 0-3.278.197-4.238m19.606 0-5.508 3.505c-1.557.99-2.335 1.486-3.171 1.678a5 5 0 0 1-2.248 0c-.836-.192-1.614-.688-3.171-1.678L2.197 7.762m19.606 0C22 8.722 22 10.006 22 12v.352m-.197-4.59a4 4 0 0 0-.348-1.032 5 5 0 0 0-2.185-2.185C18.2 4 16.8 4 14 4h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 6.73a4 4 0 0 0-.348 1.032M15 22zm4-7c-.637 1.616-1.34 2.345-3 3 1.66.655 2.363 1.384 3 3 .637-1.616 1.34-2.345 3-3-1.66-.655-2.363-1.384-3-3Z" fill="none"></svg>';
  const result = applyStyleTransformations(svg, 'stroke');
  
  // Should not have duplicate fill="none" in same element
  assert(!result.match(/fill="none"[^>]*fill="none"/), 'Should not have duplicate fill="none" in same element');
  
  // Should still have the d attribute (content preserved)
  assert(result.includes('d="M11.766 20H10'), 'Should preserve the d attribute content');
  console.log('✓ Should fix the example case from the user');
}

// Test 4: Should remove duplicate attributes with same name and value
{
  const input = '<path fill="none" stroke="currentColor" fill="none" d="M0 0L10 10"/>';
  const result = applyStyleTransformations(input, 'stroke');
  
  const pathElement = result.match(/<path[^>]*>/)[0];
  const fillMatches = pathElement.match(/fill="none"/g) || [];
  assert(fillMatches.length === 1, `Expected 1 fill="none" in path element, got ${fillMatches.length}`);
  console.log('✓ Should remove duplicate attributes with same name and value');
}

// Test 5: Should handle multiple different duplicate attributes
{
  const input = '<path fill="red" stroke="blue" fill="red" stroke="blue" d="M0 0L10 10"/>';
  const result = applyStyleTransformations(input, 'stroke');
  
  // After stroke processing, should have normalized colors and no duplicates
  assert(!result.match(/fill="[^"]*"[^>]*fill="/), 'Should not have duplicate fill attributes');
  assert(!result.match(/stroke="[^"]*"[^>]*stroke="/), 'Should not have duplicate stroke attributes');
  console.log('✓ Should handle multiple different duplicate attributes');
}

// Test 6: Should handle self-closing elements
{
  const input = '<circle fill="red" stroke="blue" fill="red" r="5" />';
  const result = applyStyleTransformations(input, 'stroke');
  
  assert(result.match(/<circle[^>]*\/>/), 'Should preserve self-closing format');
  const circleElement = result.match(/<circle[^>]*\/>/)[0];
  const fillMatches = circleElement.match(/fill="[^"]*"/g) || [];
  assert(fillMatches.length === 1, `Expected 1 fill attribute in circle, got ${fillMatches.length}`);
  console.log('✓ Should handle self-closing elements');
}

// Test 7: Should handle complex real-world SVG elements
{
  const input = `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M0 0L10 10" fill="none"/>`;
  const result = applyStyleTransformations(input, 'stroke');
  
  // Should maintain all stroke attributes and have exactly one fill="none"
  assert(result.match(/stroke-linecap="round"/), 'Should preserve stroke-linecap');
  assert(result.match(/stroke-linejoin="round"/), 'Should preserve stroke-linejoin');
  assert(result.match(/stroke-width="2"/), 'Should preserve stroke-width');
  
  const pathElement = result.match(/<path[^>]*>/)[0];
  const fillMatches = pathElement.match(/fill="none"/g) || [];
  assert(fillMatches.length === 1, `Expected 1 fill="none" in complex path, got ${fillMatches.length}`);
  console.log('✓ Should handle complex real-world SVG elements');
}

// Test 8: Edge cases
{
  // Empty SVG
  const input1 = '<svg></svg>';
  const result1 = applyStyleTransformations(input1, 'stroke');
  assert(result1 === '<svg></svg>', 'Should handle empty SVG elements');
  
  // No attributes
  const input2 = '<path></path>';
  const result2 = applyStyleTransformations(input2, 'stroke');
  assert(result2 === '<path></path>', 'Should handle elements with no attributes');
  
  console.log('✓ Should handle edge cases');
}

// Test 9: Mixed element types
{
  const input = '<svg><path stroke="red" fill="blue"/><circle stroke="green" fill="yellow"/></svg>';
  const result = applyStyleTransformations(input, 'stroke');
  
  // Both elements should be processed correctly
  assert(result.match(/<path[^>]*stroke="currentColor"/), 'Path should have normalized stroke');
  assert(result.match(/<circle[^>]*stroke="currentColor"/), 'Circle should have normalized stroke');
  assert(result.match(/<path[^>]*fill="none"/), 'Path should have fill="none"');
  assert(result.match(/<circle[^>]*fill="none"/), 'Circle should have fill="none"');
  
  // No duplicates
  const pathMatches = result.match(/<path[^>]*>/g) || [];
  const circleMatches = result.match(/<circle[^>]*>/g) || [];
  
  assert(pathMatches.length === 1, 'Should have exactly one path element');
  assert(circleMatches.length === 1, 'Should have exactly one circle element');
  console.log('✓ Should handle mixed element types');
}

console.log('\n🎉 All tests passed! Stroke icon attribute deduplication is working correctly.');