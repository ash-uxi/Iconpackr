# IconPackr CLI Documentation

## Overview

IconPackr is a command-line tool that transforms SVG icon collections into professional, optimized component libraries for multiple frameworks. It preserves your existing folder structures while optimizing SVGs and generating framework-specific components.

## Installation

### Global Installation

To use IconPackr as a global command-line tool:

```bash
# Install globally via npm
npm install -g iconpackr

# Or using yarn
yarn global add iconpackr

# Verify installation
iconpackr --version
```

### Project Installation

To use IconPackr in a specific project:

```bash
# Install as a dev dependency
npm install --save-dev iconpackr

# Or using yarn
yarn add -D iconpackr
```

Then add it to your `package.json` scripts:

```json
"scripts": {
  "build:icons": "iconpackr ./icons ./dist",
  "build:icons:react": "iconpackr ./icons ./dist --formats react-jsx,react-tsx"
}
```

## Basic Usage

The simplest way to use IconPackr is:

```bash
iconpackr <input-directory> <output-directory>
```

For example:

```bash
iconpackr ./icons ./dist
```

This will:
1. Scan the `./icons` directory for SVG files
2. Process each SVG file (optimize, parse)
3. Generate components for all supported frameworks
4. Place the components in the `./dist` directory

## Command Line Options

IconPackr provides several options to customize the generation process:

```
Usage: iconpackr [options] <input> [output]

Arguments:
  input                   Input directory containing SVG icons
  output                  Output directory for generated components (default: "./dist")

Options:
  -f, --formats <formats> Comma-separated list of output formats (react-jsx,react-tsx,vue,react-native) (default: "react-jsx,react-tsx,vue,react-native")
  --no-optimize           Skip SVG optimization
  -d, --dry-run           Preview without writing files (default: false)
  -v, --verbose           Enable verbose output (default: false)
  --help                  Display help
  --version               Display version
```

### Examples

Generate only React JSX components:
```bash
iconpackr ./icons ./dist --formats react-jsx
```

Generate React and Vue components:
```bash
iconpackr ./icons ./dist --formats react-jsx,vue
```

Skip SVG optimization (faster, but larger components):
```bash
iconpackr ./icons ./dist --no-optimize
```

Preview what would happen without writing files:
```bash
iconpackr ./icons ./dist --dry-run
```

Show detailed logs during processing:
```bash
iconpackr ./icons ./dist --verbose
```

## Input Structure

IconPackr expects SVG files to be organized in a specific structure:

```
icons/
  stroke/category/icon.svg
  solid/category/icon.svg
  contrast/category/icon.svg
  duo-stroke/category/icon.svg
  duo-solid/category/icon.svg
```

- The first level (`stroke`, `solid`, etc.) represents the icon style
- The second level represents the category (e.g., `interface`, `navigation`, etc.)
- The third level contains the actual SVG files

This organization is important as it affects how components are named and organized in the output.

## Output Structure

The generated components will be organized in a similar structure:

```
dist/
  react-jsx/style/category/Icon.jsx
  react-tsx/style/category/Icon.tsx
  vue/style/category/Icon.vue
  react-native/style/category/Icon.jsx
```

The component filenames will be in PascalCase, derived from the original SVG filename.

For example, `icons/stroke/interface/home.svg` will generate:
- `dist/react-jsx/stroke/interface/Home.jsx`
- `dist/react-tsx/stroke/interface/Home.tsx`
- `dist/vue/stroke/interface/Home.vue`
- `dist/react-native/stroke/interface/Home.jsx`

## SVG Optimization

By default, IconPackr optimizes your SVG files using SVGO. This process:

- Removes unnecessary attributes and metadata
- Converts colors to `currentColor` for theming
- Improves accessibility with ARIA attributes
- Removes fixed width/height for better scaling
- Preserves important attributes like `viewBox`

This optimization significantly reduces file size without affecting visual quality. If you need to skip optimization (for example, if your SVGs are already optimized), use the `--no-optimize` flag.

## Generated Component Properties

All generated components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | number | 24 | Width and height of the icon |
| `color` | string | 'currentColor' | Icon color |
| `className` | string | undefined | CSS class (not applicable in React Native) |
| `...props` | any | | All other props are passed to the SVG element |

## Framework-Specific Notes

### React (JSX and TSX)

React components are generated with default export. TypeScript components include proper type definitions.

```jsx
import HomeIcon from './dist/react-jsx/stroke/interface/Home';

function App() {
  return <HomeIcon size={32} color="#4F46E5" className="my-icon" />;
}
```

### Vue

Vue components are generated with named exports and include proper prop definitions.

```vue
<template>
  <div>
    <HomeIcon :size="32" color="#4F46E5" class="my-icon" />
  </div>
</template>

<script>
import HomeIcon from './dist/vue/stroke/interface/Home';

export default {
  components: {
    HomeIcon
  }
}
</script>
```

### React Native

React Native components are generated with default export and use the `react-native-svg` library.

```jsx
import HomeIcon from './dist/react-native/stroke/interface/Home';

function App() {
  return <HomeIcon size={32} color="#4F46E5" />;
}
```

**Note:** You need to install `react-native-svg` in your React Native project:

```bash
npm install react-native-svg
```

## Advanced Techniques

### Integration with Build Systems

IconPackr can be integrated into your build process with tools like npm scripts, Gulp, or Webpack.

Example with npm scripts:

```json
"scripts": {
  "prebuild": "iconpackr ./icons ./src/components/icons",
  "build": "react-scripts build"
}
```

### Creating Icon Indexes

For larger icon libraries, you may want to generate index files for easier imports. You can do this with a script after running IconPackr:

```js
// create-indexes.js
const fs = require('fs');
const path = require('path');

// Generate index files for each framework and category
function generateIndexFiles(baseDir) {
  // Implementation details...
}

generateIndexFiles('./dist');
```

## Troubleshooting

### Common Issues

1. **SVG not rendering correctly:**
   - Ensure your SVG files are valid
   - Check if they have dependencies on external styles
   - Run with `--verbose` to see detailed errors

2. **Component naming issues:**
   - IconPackr converts filenames to PascalCase for components
   - Avoid special characters in filenames

3. **Missing viewBox:**
   - Ensure your SVGs have a `viewBox` attribute

4. **Performance issues with large collections:**
   - Process icons in batches by category
   - Use specific formats with `--formats` to reduce processing time

### Getting Help

If you encounter issues not covered here, please open an issue on the IconPackr GitHub repository with:
- The command you ran
- Any error messages
- Example SVG files that caused the problem
- Expected behavior

## License

IconPackr is released under the MIT License. 