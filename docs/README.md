# IconPackr Documentation

Welcome to the IconPackr documentation. This resource will help you understand how to use IconPackr effectively to transform your SVG icon collections into optimized component libraries for multiple frameworks.

## Documentation Sections

- [CLI Documentation](./CLI.md) - Comprehensive guide to the command-line interface
- [User Guide](./GUIDE.md) - Practical advice, examples, and best practices

## Quick Start

```bash
# Install
npm install -g iconpackr

# Run
iconpackr ./icons ./dist
```

This will:
1. Scan the `./icons` directory for SVG files
2. Process each SVG file (optimize, parse)
3. Generate components for all supported frameworks
4. Place the components in the `./dist` directory

## Supported Frameworks

- React JSX (`.jsx`)
- React TypeScript (`.tsx`) 
- Vue (`.vue`)
- React Native (`.jsx`)

## Directory Structure

IconPackr expects SVG files to be organized in a specific structure:

```
icons/
  └── stroke/                 # Style
      └── interface/          # Category
          └── home.svg        # Icon
```

The generated components will follow a similar structure, with component names prefixed with "Pi" and suffixed with the style name:

```
dist/
  └── react-jsx/              # Framework
      └── stroke/             # Style
          └── interface/      # Category
              └── PiHomeStroke.jsx  # Component
```

## Component Naming Convention

Components are named following this convention:
1. "Pi" prefix (representing Pikaicons)
2. PascalCase icon name (derived from the SVG filename)
3. Style name in PascalCase

Examples:
- `home.svg` in the `stroke` folder becomes `PiHomeStroke`
- `arrow-right.svg` in the `solid` folder becomes `PiArrowRightSolid`
- `check-circle.svg` in the `duo-solid` folder becomes `PiCheckCircleDuoSolid`

## Component Usage

```jsx
// Import the component
import { PiHomeStroke } from './dist/react-jsx/stroke/interface/PiHomeStroke';

// Use in your application
function App() {
  return <PiHomeStroke size={24} color="#0066ff" />;
}
```

## Need Help?

For more details on any aspect of IconPackr, please refer to the detailed documentation sections listed above. 