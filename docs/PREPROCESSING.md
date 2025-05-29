# SVG Preprocessing in IconPackr

IconPackr now includes a powerful two-stage processing system that first preprocesses raw SVGs for consistency and optimization, then generates framework-specific components from these processed SVGs.

## Overview

The preprocessing system transforms raw SVG files into standardized, optimized versions that are:
- Consistent in structure and formatting
- Optimized for web use
- Ready for component generation
- Cached for performance

## Two-Stage Processing Flow

### Stage 1: SVG Preprocessing
Raw SVGs → Cleaned & Standardized SVGs

### Stage 2: Component Generation  
Processed SVGs → Framework Components

## Preprocessing Features

### 1. SVG Structure Standardization
- Converts SVG strings to structured JavaScript objects using `svgson`
- Recursively processes all drawable elements (path, circle, rect, line, etc.)
- Ensures consistent element ordering and formatting

### 2. Attribute Management
- **Filtering**: Keeps only essential attributes for each element type
- **Sorting**: Orders attributes consistently (e.g., x, y, width, height for rectangles)
- **Standardization**: Ensures proper attribute formatting and values

### 3. Path Optimization
- **Absolute Coordinates**: Converts relative path commands to absolute using `svg-path-commander`
- **Path Splitting**: Separates complex paths with multiple shapes into individual path elements
- **Normalization**: Standardizes path data format for consistency

### 4. SVG Assembly
- Creates standardized outer `<svg>` wrapper with consistent attributes
- Sets proper dimensions from viewBox or width/height attributes
- Applies standard presentation attributes for icon systems
- Removes duplicate elements

### 5. Performance Optimization
- **Memoization**: Caches processed results using `lodash/memoize`
- **Batch Processing**: Efficiently handles large icon collections
- **Incremental Updates**: Only processes changed files

## Usage Examples

### Basic Two-Stage Processing
```bash
# Full processing (preprocess + generate components)
iconpackr ./raw-icons ./dist

# The processed SVGs will be saved to ./processed-svgs by default
# Components will be generated from the processed SVGs
```

### Preprocessing Only
```bash
# Only preprocess raw SVGs
iconpackr ./raw-icons ./dist --preprocess-only

# Or use the dedicated preprocess command
iconpackr preprocess ./raw-icons ./my-processed-svgs
```

### Skip Preprocessing
```bash
# Use existing processed SVGs
iconpackr ./raw-icons ./dist --skip-preprocess --processed-dir ./my-processed-svgs
```

### Custom Processed Directory
```bash
# Specify custom directory for processed SVGs
iconpackr ./raw-icons ./dist --processed-dir ./custom-processed
```

### Include Processed SVGs in Output
```bash
# Include processed SVGs in the final package
iconpackr ./raw-icons ./dist --include-processed
```

## CLI Commands

### Main Command Options
```bash
iconpackr <input> [output] [options]

Options:
  --preprocess-only         Only preprocess raw SVGs, do not generate components
  --skip-preprocess         Skip preprocessing step and use existing processed SVGs
  --processed-dir <dir>     Directory for processed SVGs (default: ./processed-svgs)
  --include-processed       Include processed SVGs in the final output
  --clean-processed         Clean processed SVGs directory before processing
```

### Dedicated Preprocessing Commands
```bash
# Preprocess only
iconpackr preprocess <input> [processed] [options]

# Check preprocessing status
iconpackr check <input> [processed]

# Clean processed SVGs
iconpackr clean [processed] [options]
```

## Processing Options

The SVG processor supports various options for customizing the preprocessing behavior:

```javascript
const processingOptions = {
  filterAttributes: true,    // Keep only essential attributes
  sortAttributes: true,      // Sort attributes consistently
  sortNodes: true,          // Sort SVG elements consistently
  filterNodes: true,        // Remove duplicate elements
  standardizeViewBox: true, // Standardize viewBox attributes
  normalizePathData: true   // Normalize path data to absolute coordinates
};
```

## Output Structure

With preprocessing enabled, your output structure becomes:

```
dist/
  react-jsx/style/category/PiIconStyle.jsx
  react-tsx/style/category/PiIconStyle.tsx
  vue/style/category/PiIconStyle.vue
  react-native/style/category/PiIconStyle.jsx
  svgs/                                      # Processed SVGs (if --include-processed)
    style/category/icon.svg
```

## Benefits

### 1. Consistency
- All SVGs follow the same structure and formatting
- Predictable attribute ordering and element structure
- Standardized dimensions and viewBox handling

### 2. Optimization
- Removes unnecessary attributes and metadata
- Converts to absolute coordinates for better performance
- Eliminates duplicate elements

### 3. Reliability
- Handles malformed or inconsistent SVGs
- Provides fallbacks for missing attributes
- Graceful error handling

### 4. Performance
- Memoized processing for repeated operations
- Incremental processing of only changed files
- Efficient batch processing

### 5. Debugging
- Processed SVGs can be inspected and validated
- Clear separation between preprocessing and component generation
- Detailed logging and error reporting

## Advanced Usage

### Custom Processing Pipeline
```bash
# Clean, preprocess, and generate with verbose output
iconpackr ./raw-icons ./dist \
  --clean-processed \
  --verbose \
  --include-processed \
  --formats react-jsx,vue
```

### Development Workflow
```bash
# 1. Initial preprocessing
iconpackr preprocess ./raw-icons ./processed --verbose

# 2. Check status
iconpackr check ./raw-icons ./processed

# 3. Generate components (skip preprocessing)
iconpackr ./raw-icons ./dist --skip-preprocess --processed-dir ./processed

# 4. Clean when needed
iconpackr clean ./processed
```

### Integration with Build Systems
```json
{
  "scripts": {
    "icons:preprocess": "iconpackr preprocess ./src/icons ./processed-icons",
    "icons:build": "iconpackr ./src/icons ./dist --skip-preprocess --processed-dir ./processed-icons",
    "icons:clean": "iconpackr clean ./processed-icons",
    "icons:full": "iconpackr ./src/icons ./dist --include-processed"
  }
}
```

## Troubleshooting

### Common Issues

1. **Processing Errors**: Use `--verbose` to see detailed error messages
2. **Missing Processed SVGs**: Use `iconpackr check` to verify status
3. **Outdated Processed SVGs**: Files are automatically checked for freshness
4. **Performance Issues**: Processed SVGs are memoized for better performance

### Best Practices

1. **Version Control**: Consider including processed SVGs in version control for consistency
2. **CI/CD**: Use preprocessing in build pipelines for reproducible builds
3. **Development**: Use `--skip-preprocess` during development for faster iteration
4. **Production**: Always include preprocessing for optimal results

## Migration from Single-Stage Processing

If you're upgrading from a previous version of IconPackr:

1. **Automatic Migration**: The new system is backward compatible
2. **Gradual Adoption**: Use `--skip-preprocess` to maintain old behavior
3. **Testing**: Compare outputs with and without preprocessing
4. **Performance**: Expect better performance with preprocessing enabled

The preprocessing system is designed to be transparent and optional, allowing you to adopt it gradually while maintaining compatibility with existing workflows.