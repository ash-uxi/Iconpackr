# Stroke Icon Fill Attribute Duplication Fix

## Issue Description

During SVG processing, stroke icons were getting duplicate `fill="none"` attributes added to their path elements, resulting in malformed SVG markup like:

```html
<path stroke="currentColor" ... fill="none" fill="none">
```

This occurred specifically in stroke icons where the processing pipeline would:
1. Add `fill="none"` to elements that needed it
2. Convert existing fill values to `"none"`
3. Apply "sanity fixes" that could create duplicates
4. Attempt to remove duplicates with regex that didn't work in all cases

## Root Cause

The issue was in the `removeDuplicateAttributes()` function in `/src/utils/style-handler.js`. The original implementation used regex patterns like:

```javascript
svgString.replace(/(\sfill="none")(?=[^>]*\sfill="none")/g, '');
```

This pattern failed when:
- There was no space before the duplicate attribute
- The attributes were at the end of elements
- Complex attribute ordering occurred

## Fix Implementation

### 1. Improved `removeDuplicateAttributes()` Function

Replaced the regex-based approach with a more robust element-by-element processing:

```javascript
function removeDuplicateAttributes(svgString) {
  // Process each element separately to remove duplicates
  return svgString.replace(/<([^>]+)>/g, (match, elementContent) => {
    if (elementContent.startsWith('/') || !elementContent.includes('=')) {
      return match;
    }
    
    const deduplicatedContent = removeDuplicateAttributesFromElement(elementContent);
    return `<${deduplicatedContent}>`;
  });
}
```

### 2. Enhanced `handleStrokeIcon()` Function

Simplified the logic to prevent duplicates from being created in the first place:

```javascript
function handleStrokeIcon(svg) {
  let res = svg;
  // 1. Normalize stroke colors first
  res = res.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="currentColor"');
  
  // 2. Convert existing fills to "none"
  res = res.replace(/fill="(?!none)([^"]*)"/g, 'fill="none"');
  
  // 3. Add fill="none" only to elements that don't already have it
  res = res.replace(/<(path|circle|rect|line|polyline|polygon|ellipse)([^>]*)(stroke="[^"]*")([^>]*)>/g,
    (match, tag, beforeStroke, stroke, afterStroke) => {
      if (/fill=/.test(beforeStroke + afterStroke)) {
        return match; // Already has fill, leave as-is
      }
      return `<${tag}${beforeStroke}${stroke}${afterStroke} fill="none">`;
    }
  );
  
  return removeDuplicateAttributes(res);
}
```

## Files Modified

- `/src/utils/style-handler.js` - Fixed duplicate attribute removal logic
- `/tests/test-runner.js` - Added regression test for the fix
- `/tests/unit/stroke-duplication-fix.test.js` - Comprehensive unit tests

## Testing

### New Test Cases Added

1. **stroke-duplication-fix** - Integrated into main test suite
2. **Comprehensive unit tests** - Multiple edge cases and real-world scenarios
3. **Verification scripts** - Tested against actual problematic files

### Test Results

- All existing tests continue to pass (100% success rate maintained)
- New tests specifically verify duplicate removal works correctly
- Edge cases like multiple paths, complex attributes, and various element types are covered

## Impact

- **Fixed**: Duplicate `fill="none"` attributes in stroke icons
- **Improved**: More robust attribute deduplication for all icon types
- **Maintained**: Backward compatibility and existing functionality
- **Added**: Comprehensive test coverage to prevent regression

## Examples

### Before Fix
```html
<path stroke="currentColor" stroke-width="2" d="M12 2L22 12L12 22L2 12Z" fill="none" fill="none">
```

### After Fix
```html
<path stroke="currentColor" stroke-width="2" d="M12 2L22 12L12 22L2 12Z" fill="none">
```

The fix ensures clean, valid SVG markup while maintaining all intended styling and functionality.