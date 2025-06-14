# IconPackr

IconPackr is a command-line tool that transforms SVG icon collections into professional, optimized component libraries for multiple frameworks (React, Vue, React Native, Svelte). It preserves existing folder structures while optimizing SVGs and generating framework-specific components.

## Features

- 🎨 **Preserves Folder Structure**: Maintains your icon organization (stroke/solid/category)
- ⚡️ **Multiple Framework Support**: Generates components for:
  - React (JSX/TSX)
  - Vue
  - React Native
  - Svelte
- 🛠 **SVG Optimization**: Uses SVGO for optimal file size and compatibility
- 🎯 **Smart Props**: Components accept size, color, and other standard props
- 🌈 **Theming Support**: Uses currentColor for easy theme integration
- ♿️ **Accessibility**: Includes ARIA attributes automatically
- 🔄 **Figma Integration**: Direct export from Figma files (coming soon)

## Installation

```bash
npm install -g iconpackr
# or
yarn global add iconpackr
```

## Quick Start

```bash
# Basic usage
iconpackr /path/to/svg/icons ./output

# Generate only React components
iconpackr /path/to/svg/icons ./output --formats react-jsx,react-tsx

# Dry run to preview changes
iconpackr /path/to/svg/icons ./output --dry-run

# With verbose logging
iconpackr /path/to/svg/icons ./output --verbose
```

## Input Structure

IconPackr expects your SVG files to be organized in the following structure:

```
icons/
  ├── stroke/
  │   └── category/
  │       └── icon.svg
  ├── solid/
  │   └── category/
  │       └── icon.svg
  ├── duo-stroke/
  │   └── category/
  │       └── icon.svg
  └── duo-solid/
      └── category/
          └── icon.svg
```

## Output Structure

The tool will generate framework-specific components while maintaining your folder structure:

```
output/
  ├── react-jsx/
  │   └── style/
  │       └── category/
  │           └── Icon.jsx
  ├── react-tsx/
  │   └── style/
  │       └── category/
  │           └── Icon.tsx
  ├── vue/
  │   └── style/
  │       └── category/
  │           └── Icon.vue
  └── react-native/
      └── style/
          └── category/
              └── Icon.jsx
```

## CLI Options

\`\`\`
Options:
  -V, --version              output the version number
  -f, --formats <formats>    Component formats to generate (comma-separated: react-jsx,react-tsx,vue,react-native,svelte)
  -c, --cleanup-after       Remove processed files after generation
  --dry-run                 Preview changes without writing files
  -v, --verbose            Enable verbose logging
  -h, --help               display help for command
\`\`\`

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run specific test suites
npm run test:react
npm run test:vue
npm run test:react-native
npm run test:svelte

# Generate test coverage report
npm run test:html-report
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Ash Kashyap 