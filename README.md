# IconPackr

Transform SVG icon collections into optimized, theme-aware component libraries for multiple frameworks with intelligent style detection and seamless developer experience.

## 🎯 The Story Behind IconPackr

IconPackr was born out of a real need while building **[PikaIcons](https://pikaicons.com)** - a comprehensive icon library project. As the icon collection grew to thousands of SVGs across multiple styles (stroke, solid, duotone, contrast), manually converting them into framework-specific components became impossible.

**The Challenge:**
- 5000+ SVG icons across 5 different styles
- Need for React, Vue, React Native, and Svelte components
- Consistent theming and accessibility requirements
- Maintaining folder structure and naming conventions
- Optimizing for performance while preserving visual quality

**The Solution:**
What started as a personal script to automate Pikaicons component generation evolved into IconPackr - a sophisticated tool that understands icon semantics, applies intelligent optimizations, and generates production-ready components.

**Why Open Source:**
After seeing how much time and effort this saved in the PikaIcons workflow, I realized other developers and icon library creators could benefit from the same automation. IconPackr represents months of refinement in SVG processing, component generation, and developer experience optimization.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Place your SVG files in the input folder
# (folder will be auto-created if it doesn't exist)

# 3. Generate components for all frameworks
iconpackr

# That's it! Your components are ready in ./iconpack/output/
```

## ✨ Features

- **🎯 Zero Configuration** - Works out of the box with sensible defaults
- **🧠 Intelligent Style Detection** - Auto-detects stroke, solid, contrast, and duotone icons
- **🎨 Advanced Theming** - Converts colors to `currentColor` while preserving visual intent
- **⚡ Multi-Framework Support** - React JSX/TSX, Vue, React Native, Svelte
- **📁 Structure Preservation** - Maintains your folder organization
- **🔧 Powerful CLI** - Comprehensive options with subcommands
- **♿ Accessibility Built-in** - ARIA attributes and semantic markup
- **🧹 Auto-Cleanup** - Manages temporary files automatically
- **🏭 Production Ready** - Battle-tested on 5000+ icons in Pikaicons
- **🛡 Robust Sanitisation** - Fixes malformed SVG tags & removes duplicate attributes automatically

## 📦 Installation

```bash
# Clone and install
git clone https://github.com/ash-uxi/iconpackr.git
cd iconpackr
npm install

# Optional: Link globally
npm link
```

## 🎯 Simple Usage

### Default Workflow (Recommended)

```bash
# Uses ./iconpack/input/ and outputs to ./iconpack/output/
iconpackr

# Custom paths
iconpackr ./my-icons ./my-components

# Specific frameworks only
iconpackr --formats react-jsx,vue

# Preview without writing files
iconpackr --dry-run
```

### Quick Examples

```bash
# Generate React components only
iconpackr --formats react-jsx,react-tsx

# Process with detailed output
iconpackr --verbose

# Skip optimization for faster processing
iconpackr --no-optimize

# Auto-detect icon styles from content
iconpackr --auto-detect-style
```

## 🔧 Advanced Usage

### Framework Selection

```bash
# Available formats: react-jsx, react-tsx, vue, react-native, svelte
iconpackr --formats react-jsx,vue
iconpackr --formats react-native
iconpackr --formats svelte
```

### Style Processing

```bash
# Auto-detect styles from SVG content (recommended)
iconpackr --auto-detect-style

# Set default style for unclear cases
iconpackr --style stroke
iconpackr --style solid

# Available styles: stroke, solid, contrast, duo-stroke, duo-solid
```

### Processing Control

```bash
# Two-stage processing
iconpackr preprocess ./icons          # Stage 1: Optimize SVGs
iconpackr --skip-preprocess           # Stage 2: Generate components

# Status and cleanup
iconpackr check ./icons               # Check processed status
iconpackr clean                       # Clean temporary files
```

### Performance Options

```bash
# Skip SVG optimization (faster, larger files)
iconpackr --no-optimize

# Clean processed files before starting
iconpackr --clean-processed

# Auto-cleanup after completion
iconpackr --cleanup-after
```

## 📂 Input Structure

Flexible folder organization is supported:

```
icons/
  stroke/category/icon.svg          # Style/category/icon
  category/icon.svg                 # Category/icon (style auto-detected)
  icon.svg                          # Flat structure (auto-categorized)
```

**Supported Icon Styles:**
- `stroke` - Outline icons with stroke attributes
- `solid` - Filled icons with fill attributes  
- `contrast` - Icons with both stroke and fill
- `duo-stroke` - Two-tone outline icons
- `duo-solid` - Two-tone filled icons

## 📁 Output Structure

```
output/
  svgs/style/category/icon.svg       # Optimized SVGs
  react-jsx/style/category/PiIconNameStyle.jsx
  react-tsx/style/category/PiIconNameStyle.tsx
  vue/style/category/PiIconNameStyle.vue
  react-native/style/category/PiIconNameStyle.jsx
  svelte/style/category/PiIconNameStyle.svelte
```

**Component Naming:**
- Prefix: `Pi` (inspired by PikaIcons, customizable)
- Format: `Pi[IconName][Style]` (e.g., `PiHomeStroke`, `PiHeartSolid`)

## 🧩 Component API

All generated components support consistent props:

### React/React Native

```jsx
import { PiHomeStroke } from './components/icons';

<PiHomeStroke 
  size={24}              // number - Icon size
  color="#4F46E5"        // string - Icon color
  className="icon"       // string - CSS class
  ariaLabel="Home icon"  // string - Accessibility label
/>
```

### Vue

```vue
<template>
  <PiHomeStroke 
    :size="24"
    color="#4F46E5"
    class="icon"
    aria-label="Home icon"
  />
</template>

<script setup>
import PiHomeStroke from './components/icons/PiHomeStroke.vue';
</script>
```

### Svelte

```svelte
<script>
  import PiHomeStroke from './components/icons/PiHomeStroke.svelte';
</script>

<PiHomeStroke 
  size={24}
  color="#4F46E5"
  class="icon"
  ariaLabel="Home icon"
/>
```

## 🎨 Theming & Styling

IconPackr automatically optimizes SVGs for theming:

```css
/* CSS custom properties */
.icon {
  color: var(--icon-color, currentColor);
  width: var(--icon-size, 1em);
  height: var(--icon-size, 1em);
}

/* Dark mode example */
@media (prefers-color-scheme: dark) {
  .icon {
    --icon-color: #E5E7EB;
  }
}
```

## 🛠️ NPM Scripts

```bash
npm run iconpackr        # Basic generation
npm run build           # Verbose generation
npm run build-dry       # Preview build
npm run build-react     # React only
npm run build-vue       # Vue only
npm run build-native    # React Native only
npm run clean           # Clean outputs
```

## 🧪 Testing

```bash
npm test                 # Run all tests
npm run test:react       # Test React components
npm run test:vue         # Test Vue components
npm run test:performance # Performance tests
npm run test:html-report # Generate HTML report
```

## ⚙️ Configuration

### CLI Options Reference

| Option | Description | Default |
|--------|-------------|---------|
| `--formats` | Output formats | `react-jsx,react-tsx,vue,react-native,svelte` |
| `--auto-detect-style` | Auto-detect icon styles | `false` |
| `--style` | Default style when unclear | `auto` |
| `--verbose` | Detailed output | `false` |
| `--dry-run` | Preview without writing | `false` |
| `--no-optimize` | Skip SVG optimization | `false` |
| `--clean-processed` | Clean before processing | `false` |
| `--cleanup-after` | Auto-cleanup after completion | `false` |

### Advanced Workflows

#### Development
```bash
# Fast iteration - skip optimization
iconpackr --no-optimize --formats react-jsx

# Style development - auto-detect everything
iconpackr --auto-detect-style --verbose
```

#### Production
```bash
# Full optimization pipeline
iconpackr --clean-processed --verbose

# Specific production formats
iconpackr --formats react-jsx,react-tsx --cleanup-after
```

#### CI/CD
```bash
# Validation
iconpackr --dry-run --verbose

# Production build
iconpackr --clean-processed --verbose --formats react-jsx,vue
```

## 🏗️ Architecture

IconPackr uses a sophisticated two-stage pipeline:

1. **SVG Preprocessing** - SVGO optimization with style-aware transformations
2. **Component Generation** - Framework-specific component creation with theming

**Key Technologies:**
- **SVGO** - Advanced SVG optimization
- **Commander.js** - Comprehensive CLI interface
- **Chalk & Ora** - Beautiful terminal output
- **Glob** - Flexible file discovery

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and add tests
4. Commit: `git commit -am 'Add new feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with modern Node.js practices and a focus on developer experience. Special thanks to the SVGO team for excellent SVG optimization capabilities.

---

**Made with ❤️ for developers who love clean, efficient icon workflows.** 