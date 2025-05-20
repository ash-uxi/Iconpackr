# IconPackr Project Memory

This file tracks important project information, decisions, and technical details.

## Project Structure

- `bin/iconpackr.js`: CLI entry point
- `src/cli.js`: Command-line interface implementation using Commander.js
- `src/index.js`: Main processing logic
- `src/utils/svgo.js`: SVG optimization utilities
- `src/utils/style-handler.js`: Style-specific SVG attribute handling and detection
- `src/utils/generate-component.js`: Component generation for different frameworks
- `src/templates/`: (Future) Template files for framework components

## Implementation Decisions

1. **ES Modules**: The project uses ES modules (import/export) throughout to leverage modern JavaScript capabilities.

2. **SVGO Configuration**: Optimizes SVGs while preserving important attributes
   - Preserves viewBox attribute
   - Adds ARIA attributes for accessibility
   - Removes unnecessary attributes (width, height, style, data-*)
   - Converts colors to currentColor for consistent theming
   - Uses multipass optimization for better results
   - Sorts attributes for better compression

3. **Style-Specific SVG Attribute Handling**:
   - STROKE ICONS: Sets fill="none", stroke="currentColor", preserves stroke properties
   - SOLID ICONS: Sets fill="currentColor", removes stroke attributes
   - CONTRAST ICONS: Sets both fill and stroke to "currentColor", preserves relationships
   - DUO-STROKE ICONS: Sets primary strokes to "currentColor", handles secondary strokes with opacity
   - DUO-SOLID ICONS: Sets primary fills to "currentColor", handles secondary fills with opacity
   - Auto-detection of icon style based on SVG content analysis

4. **Component Generation Approach**:
   - Parses SVG content to extract viewBox and inner content
   - Generates framework-specific component code
   - Supports props for customization (size, color, secondaryColor, className)
   - Style-specific component props (e.g., secondaryColor for duotone icons)
   - Maintains accessibility attributes

5. **Output Structure**:
   - Preserves input folder structure (style/category)
   - Uses PascalCase for component names
   - Uses appropriate file extensions for each framework

## TODO / Future Enhancements

- Add support for TypeScript types for component props
- Create an index file for each category
- Add testing with sample SVGs
- Add support for additional frameworks (Svelte, Angular)
- Support custom template files
- Add a watch mode for continuous processing during development
- Enhance auto-detection of icon styles
- Support additional style categories like "bulk" or "gradient" 