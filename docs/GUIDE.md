# IconPackr User Guide

This guide provides practical advice, examples, and best practices for using IconPackr effectively.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Working with SVG Files](#working-with-svg-files)
- [Component Usage](#component-usage)
- [Advanced Use Cases](#advanced-use-cases)
- [Best Practices](#best-practices)
- [Case Studies](#case-studies)

## Introduction

IconPackr solves a common challenge in modern web and mobile development: managing icon libraries efficiently across multiple frameworks. By automating the conversion from SVG files to framework components, IconPackr:

- Saves development time
- Ensures consistency across platforms
- Optimizes asset performance
- Simplifies icon maintenance

This guide will help you get the most out of IconPackr in your projects.

## Getting Started

### Prerequisites

- Node.js 14.x or later
- Basic understanding of SVG files
- Icon files in SVG format

### Installation

Install IconPackr globally for use across projects:

```bash
npm install -g iconpackr
```

Or as a dev dependency in your project:

```bash
npm install --save-dev iconpackr
```

### First Run

1. Create a directory for your SVG icons:

```bash
mkdir -p icons/stroke/interface
```

2. Add some SVG files to this directory.

3. Run IconPackr:

```bash
iconpackr ./icons ./dist
```

4. Examine the generated components in the `./dist` directory.

## Working with SVG Files

### Preparing Your SVGs

For best results, your SVG files should:

- Have a proper `viewBox` attribute
- Use consistent design language
- Not rely on external CSS
- Follow a clear naming convention

### Folder Structure

IconPackr works best with a semantic folder structure:

```
icons/
  └── stroke/                 # Style
      ├── interface/          # Category
      │   ├── home.svg        # Icon
      │   └── settings.svg
      └── navigation/
          ├── arrow-left.svg
          └── arrow-right.svg
```

### Handling Duotone Icons

For duotone icons (icons with two colors), organize them in a separate style folder:

```
icons/
  └── duo-solid/              # Duotone style
      └── actions/
          └── heart.svg       # Icon with two colors
```

IconPackr will handle them appropriately during optimization and component generation.

## Component Usage

### React Components

Import and use the generated React components:

```jsx
import HomeIcon from './dist/react-jsx/stroke/interface/Home';
import SettingsIcon from './dist/react-jsx/stroke/interface/Settings';

function App() {
  return (
    <div>
      <HomeIcon size={24} color="#4F46E5" />
      <SettingsIcon size={20} color="currentColor" />
    </div>
  );
}
```

### Vue Components

Import and use the generated Vue components:

```vue
<template>
  <div>
    <HomeIcon :size="24" color="#4F46E5" />
    <SettingsIcon :size="20" />
  </div>
</template>

<script>
import HomeIcon from './dist/vue/stroke/interface/Home';
import SettingsIcon from './dist/vue/stroke/interface/Settings';

export default {
  components: {
    HomeIcon,
    SettingsIcon
  }
}
</script>
```

### React Native Components

Import and use the generated React Native components:

```jsx
import HomeIcon from './dist/react-native/stroke/interface/Home';
import SettingsIcon from './dist/react-native/stroke/interface/Settings';
import { View } from 'react-native';

function App() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <HomeIcon size={24} color="#4F46E5" />
      <SettingsIcon size={20} color="#000000" />
    </View>
  );
}
```

Remember to install `react-native-svg` in your project:

```bash
npm install react-native-svg
```

## Advanced Use Cases

### Creating Icon Components with Dynamic Props

You can create wrapper components that add functionality to the generated icons:

```jsx
// IconButton.jsx
import React from 'react';

function IconButton({ icon: Icon, label, onClick, size = 24, color = 'currentColor' }) {
  return (
    <button onClick={onClick} className="icon-button">
      <Icon size={size} color={color} />
      {label && <span>{label}</span>}
    </button>
  );
}

export default IconButton;

// Usage
import HomeIcon from './dist/react-jsx/stroke/interface/Home';

function App() {
  return (
    <IconButton 
      icon={HomeIcon} 
      label="Home" 
      onClick={() => console.log('Clicked!')} 
      size={20} 
      color="#4F46E5" 
    />
  );
}
```

### Creating an Icon Registry

For large icon libraries, you might want to create a registry for easier imports:

```jsx
// iconRegistry.js
import HomeIcon from './dist/react-jsx/stroke/interface/Home';
import SettingsIcon from './dist/react-jsx/stroke/interface/Settings';
import UserIcon from './dist/react-jsx/stroke/users/User';
// ... import all icons

const icons = {
  home: HomeIcon,
  settings: SettingsIcon,
  user: UserIcon,
  // ... add all icons
};

export default icons;

// Usage
import icons from './iconRegistry';

function App() {
  return (
    <div>
      <icons.home size={24} />
      <icons.settings size={20} />
    </div>
  );
}
```

### Creating Dark Mode Support

You can create a wrapper component that handles dark mode:

```jsx
// DarkModeIcon.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

function DarkModeIcon({ icon: Icon, lightColor = '#000000', darkColor = '#FFFFFF', ...props }) {
  const { isDarkMode } = useContext(ThemeContext);
  const color = isDarkMode ? darkColor : lightColor;
  
  return <Icon {...props} color={color} />;
}

export default DarkModeIcon;

// Usage
import HomeIcon from './dist/react-jsx/stroke/interface/Home';
import DarkModeIcon from './DarkModeIcon';

function App() {
  return <DarkModeIcon icon={HomeIcon} size={24} />;
}
```

## Best Practices

### SVG Design

1. **Keep it simple**: Avoid complex gradients or effects that won't translate well to components.
2. **Use consistent sizing**: Design icons on a consistent grid (e.g., 24x24).
3. **Test in different sizes**: Ensure your icons look good at both small and large sizes.
4. **Use semantic naming**: Name files based on what they represent, not their appearance.

### Optimization

1. **Clean up before conversion**: Remove unnecessary groups, IDs, and metadata from your SVGs.
2. **Use consistent colors**: Ideally, use black for strokes/fills that should inherit color.
3. **Test optimization results**: Check that optimization doesn't break your icons.

### Component Integration

1. **Create theme helpers**: For design systems, create utilities that map icon colors to theme tokens.
2. **Generate type definitions**: For TypeScript projects, ensure proper typing for your icon components.
3. **Bundle efficiently**: Consider code-splitting if you have a large icon library.

## Case Studies

### Design System Integration

A design team has a library of 200+ icons that need to be available in both a React web app and a React Native mobile app. They organize their SVGs by category and style:

```
icons/
  ├── stroke/
  │   ├── interface/
  │   ├── navigation/
  │   └── social/
  └── solid/
      ├── interface/
      ├── navigation/
      └── social/
```

They run IconPackr as part of their build process:

```bash
iconpackr ./icons ./dist --formats react-jsx,react-native
```

Then they create an index file for easier imports in their design system:

```jsx
// IconsIndex.js
import { createIconIndex } from './iconUtils';

// Automatically import and index all icons
const icons = createIconIndex(require.context('./dist', true, /\.jsx$/));

export default icons;
```

### Icon Updates Workflow

A team integrates IconPackr into their design-to-development workflow:

1. Designers export SVGs from Figma to a shared Git repository
2. A CI/CD pipeline runs IconPackr on the SVGs
3. Generated components are automatically published to an internal npm package
4. Developers import the icons from the package in their applications

This workflow ensures icon consistency and reduces manual work for both designers and developers.

## Conclusion

IconPackr streamlines the process of using SVG icons across different frameworks. By following the practices outlined in this guide, you can create a more efficient workflow for managing and using icons in your projects.

For command-line details and technical reference, see the [CLI Documentation](./CLI.md). 