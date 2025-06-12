# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start the CLI
npm start

# Show CLI help
npm run dev

# Clean output directories
npm run clean

# Process SVGs with different options
npm run process           # Process with cleanup
npm run process-dry      # Dry run without writing files
npm run process-no-cleanup  # Process without cleanup
npm run process-react    # Process React components only 
npm run process-vue      # Process Vue components only

# Test output components
node framework-tests/test-runner.js
```

## CLI Usage

```bash
# Basic usage
iconpackr <input> [output]

# Generate specific framework components
iconpackr ./icons ./dist --formats react-jsx,react-tsx
iconpackr ./icons ./dist --formats vue

# Process with different options
iconpackr ./icons ./dist --verbose     # Detailed output
iconpackr ./icons ./dist --dry-run     # Preview only
iconpackr ./icons ./dist --no-optimize # Skip optimization

# Preprocessing commands
iconpackr preprocess <input> [processed]  # Preprocess only
iconpackr check <input> [processed]       # Check status
iconpackr clean [processed]               # Clean processed SVGs
```

## Architecture Overview

IconPackr follows a two-stage processing pipeline:

### Stage 1: SVG Preprocessing
- Optimization with SVGO
- Style detection (stroke/solid/contrast/duo)
- Theming standardization
- Attribute management

### Stage 2: Component Generation 
- Framework-specific component creation
- Supports React, Vue, React Native, Svelte
- Handles framework-specific requirements
- Maintains consistent directory structure

Key utilities:
- svg-preprocessor.js: SVG optimization pipeline
- svg-processor.js: Component generation
- style-handler.js: Icon style detection
- svg-attribute-handler.js: Attribute management

The codebase uses memoization and caching for performance optimization when processing large icon sets.