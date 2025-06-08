# IconPackr

Transform SVG icon collections into optimized component libraries for multiple frameworks.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [CLI Usage](#cli-usage)
  - [Basic Command](#basic-command)
  - [Getting Help](#getting-help)
  - [Quick Start Examples](#quick-start-examples)
  - [All Available Options](#all-available-options)
  - [Subcommands](#subcommands)
  - [Best Practices & Workflows](#best-practices--workflows)
  - [Common Use Cases](#common-use-cases)
  - [Troubleshooting](#troubleshooting)
- [Expected Input Structure](#expected-input-structure)
- [Output Structure](#output-structure)
- [Supported Frameworks](#supported-frameworks)
- [Component Usage Examples](#component-usage-examples)
- [License](#license)

## Features

- Converts SVG icons to framework-specific components (React, Vue, React Native)
- Preserves your folder structure
- Optimizes SVGs for web use with SVGO
  - Removes unnecessary attributes and metadata
  - Converts colors to currentColor for theming
  - Improves accessibility with ARIA attributes
  - Reduces file size without affecting visual quality
- Supports various icon styles (stroke, solid, duotone, etc.)
- Handles component naming automatically

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/iconpackr.git
cd iconpackr

# Install dependencies
npm install

# Link the package globally (optional)
npm link
```

## CLI Usage

### Basic Command

```bash
iconpackr <input> [output] [options]
```

**Arguments:**
- `<input>` - Input directory containing SVG icons (required)
- `[output]` - Output directory for generated components (default: `./dist`)

### Getting Help

```bash
# General help
iconpackr --help

# Help for specific subcommands
iconpackr preprocess --help
iconpackr check --help
iconpackr clean --help

# Version information
iconpackr --version
```

### Quick Start Examples

```bash
# Simplest usage - process all icons with default settings
iconpackr ./icons

# Specify custom output directory
iconpackr ./icons ./my-components

# Generate only React components
iconpackr ./icons ./dist --formats react-jsx,react-tsx

# Process with verbose output
iconpackr ./icons ./dist --verbose

# Preview what would be generated (dry run)
iconpackr ./icons ./dist --dry-run
```

### All Available Options

#### Format Options
```bash
# Generate specific frameworks only
--formats, -f <formats>
# Available: react-jsx, react-tsx, vue, react-native
# Default: react-jsx,react-tsx,vue,react-native
iconpackr ./icons ./dist --formats react-jsx,vue
```

#### Style Processing Options
```bash
# Auto-detect icon styles from SVG content
--auto-detect-style, -a
iconpackr ./icons ./dist --auto-detect-style

# Set default style when not specified in path
--style, -s <style>
# Available: stroke, solid, contrast, duo-stroke, duo-solid, auto
# Default: auto
iconpackr ./icons ./dist --style stroke

# Process multiple styles explicitly
iconpackr ./icons ./dist --style stroke --style solid --style contrast
```

#### Processing Control Options
```bash
# Skip SVG optimization (faster, larger files)
--no-optimize
iconpackr ./icons ./dist --no-optimize

# Preview without writing files
--dry-run, -d
iconpackr ./icons ./dist --dry-run

# Enable detailed output
--verbose, -v
iconpackr ./icons ./dist --verbose

# Clean processed directory before starting
--clean-processed
iconpackr ./icons ./dist --clean-processed
```

#### Advanced Processing Options
```bash
# Only preprocess SVGs, don't generate components
--preprocess-only
iconpackr ./icons ./dist --preprocess-only

# Skip preprocessing, use existing processed SVGs
--skip-preprocess
iconpackr ./icons ./dist --skip-preprocess

# Custom processed SVGs directory
--processed-dir <dir>
# Default: ./processed-svgs
iconpackr ./icons ./dist --processed-dir ./my-processed-svgs

# Include processed SVGs in output
--include-processed
# Default: true
iconpackr ./icons ./dist --include-processed
```

### Subcommands

#### Preprocess Only
Process raw SVGs without generating components:

```bash
iconpackr preprocess <input> [processed] [options]

# Examples:
iconpackr preprocess ./raw-icons ./processed-svgs
iconpackr preprocess ./raw-icons ./processed-svgs --verbose
iconpackr preprocess ./raw-icons ./processed-svgs --clean --dry-run
```

**Options:**
- `--clean` - Clean processed directory before processing
- `--dry-run, -d` - Preview without writing files
- `--verbose, -v` - Enable verbose output

#### Check Status
Check if processed SVGs are up to date:

```bash
iconpackr check <input> [processed]

# Examples:
iconpackr check ./raw-icons
iconpackr check ./raw-icons ./processed-svgs
```

#### Clean Processed
Remove all processed SVGs:

```bash
iconpackr clean [processed] [options]

# Examples:
iconpackr clean
iconpackr clean ./processed-svgs
iconpackr clean ./processed-svgs --dry-run
```

**Options:**
- `--dry-run, -d` - Preview without removing files

### Best Practices & Workflows

#### 1. **Development Workflow**
```bash
# First run: Full processing with verbose output
iconpackr ./icons ./dist --verbose

# Subsequent runs: Skip preprocessing for speed
iconpackr ./icons ./dist --skip-preprocess

# When adding new icons: Clean and reprocess
iconpackr ./icons ./dist --clean-processed --verbose
```

#### 2. **Production Workflow**
```bash
# Full optimization for production
iconpackr ./icons ./dist --formats react-jsx,react-tsx,vue --verbose

# Generate only what you need for smaller bundles
iconpackr ./icons ./dist --formats react-jsx --style stroke,solid
```

#### 3. **Quality Assurance**
```bash
# Always dry-run first to preview
iconpackr ./icons ./dist --dry-run --verbose

# Check status before processing
iconpackr check ./icons

# Clean processing when needed
iconpackr clean --dry-run  # Preview
iconpackr clean            # Execute
```

#### 4. **Style-Specific Processing**
```bash
# Process specific styles only
iconpackr ./icons ./dist --style stroke
iconpackr ./icons ./dist --style solid,contrast

# Auto-detect styles from SVG content
iconpackr ./icons ./dist --auto-detect-style

# Mixed approach: auto-detect with fallback
iconpackr ./icons ./dist --auto-detect-style --style stroke
```

#### 5. **Performance Optimization**
```bash
# Fastest: Skip optimization
iconpackr ./icons ./dist --no-optimize --skip-preprocess

# Balanced: Cache preprocessing
iconpackr preprocess ./icons  # Run once
iconpackr ./icons ./dist --skip-preprocess  # Use multiple times

# Thorough: Full processing with cleaning
iconpackr ./icons ./dist --clean-processed --verbose
```

### Common Use Cases

#### Framework-Specific Generation
```bash
# React projects only
iconpackr ./icons ./src/components/icons --formats react-jsx,react-tsx

# Vue projects only  
iconpackr ./icons ./src/components/icons --formats vue

# Mobile projects only
iconpackr ./icons ./src/components/icons --formats react-native

# Multi-platform projects
iconpackr ./icons ./dist --formats react-jsx,vue,react-native
```

#### Style-Specific Generation
```bash
# Design system with multiple styles
iconpackr ./icons ./dist --style stroke,solid,contrast

# Minimalist icon set (stroke only)
iconpackr ./icons ./dist --style stroke --formats react-jsx

# Full duotone support
iconpackr ./icons ./dist --style duo-stroke,duo-solid
```

#### Development vs Production
```bash
# Development: Fast iteration
iconpackr ./icons ./dist --skip-preprocess --no-optimize --formats react-jsx

# Production: Full optimization
iconpackr ./icons ./dist --clean-processed --verbose

# CI/CD: Reliable and thorough
iconpackr ./icons ./dist --clean-processed --verbose --dry-run  # Validate
iconpackr ./icons ./dist --clean-processed --verbose            # Execute
```

### Troubleshooting

#### Common Issues and Solutions

**"No SVGs found"**
```bash
# Check your directory structure
iconpackr check ./icons

# Try auto-detection
iconpackr ./icons ./dist --auto-detect-style --verbose
```

**"Processing seems slow"**
```bash
# Skip optimization for speed
iconpackr ./icons ./dist --no-optimize

# Skip preprocessing if already done
iconpackr ./icons ./dist --skip-preprocess
```

**"Generated components look wrong"**
```bash
# Clean and reprocess everything
iconpackr clean
iconpackr ./icons ./dist --clean-processed --verbose

# Check specific style processing
iconpackr ./icons ./dist --style stroke --verbose
```

**"Need to update icons"**
```bash
# Check what needs updating
iconpackr check ./icons

# Clean and reprocess
iconpackr ./icons ./dist --clean-processed
```

### Expected Input Structure

The tool expects your SVG icons to be organized in the following structure:

```
icons/
  stroke/category/icon.svg
  solid/category/icon.svg
  contrast/category/icon.svg
  duo-stroke/category/icon.svg
  duo-solid/category/icon.svg
```

### Output Structure

The generated components will be organized as follows:

```
dist/
  svgs/style/category/icon.svg
  react-jsx/style/category/Icon.jsx  
  react-tsx/style/category/Icon.tsx
  vue/style/category/Icon.vue
  react-native/style/category/Icon.jsx
```

**Structure Details:**
- `svgs/` - Processed and optimized SVG files
- `react-jsx/` - React JSX components
- `react-tsx/` - React TypeScript components  
- `vue/` - Vue.js components
- `react-native/` - React Native components

Each framework folder contains the same `style/category/` structure with appropriately named component files.

## Supported Frameworks

- React JSX (`.jsx`)
- React TypeScript (`.tsx`)
- Vue (`.vue`)
- React Native (`.jsx`)

## Component Usage Examples

### React

```jsx
import HomeIcon from './dist/react-jsx/stroke/navigation/Home';

function App() {
  return (
    <div>
      <HomeIcon size={32} color="#4F46E5" />
    </div>
  );
}
```

### Vue

```vue
<template>
  <div>
    <HomeIcon size="32" color="#4F46E5" />
  </div>
</template>

<script>
import HomeIcon from './dist/vue/stroke/navigation/Home';

export default {
  components: {
    HomeIcon
  }
}
</script>
```

### React Native

```jsx
import HomeIcon from './dist/react-native/stroke/navigation/Home';

function App() {
  return (
    <View>
      <HomeIcon size={32} color="#4F46E5" />
    </View>
  );
}
```

## License

MIT 