# IconPackr

Transform SVG icon collections into optimized component libraries for multiple frameworks.

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

## Usage

```bash
# Basic usage
iconpackr ./icons ./dist

# Generate only specific formats
iconpackr ./icons ./dist --formats react-jsx,vue

# Skip optimization
iconpackr ./icons ./dist --no-optimize

# Dry run (no files written)
iconpackr ./icons ./dist --dry-run

# Verbose output
iconpackr ./icons ./dist --verbose
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
  react-jsx/style/category/Icon.jsx
  react-tsx/style/category/Icon.tsx
  vue/style/category/Icon.vue
  react-native/style/category/Icon.jsx
```

## Options

- `--formats, -f`: Comma-separated list of output formats (default: react-jsx,react-tsx,vue,react-native)
- `--no-optimize`: Skip SVG optimization
- `--dry-run, -d`: Preview without writing files
- `--verbose, -v`: Enable verbose output

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