import path from 'path';
import fs from 'fs';
import { glob } from 'glob';
import chalk from 'chalk';
import ora from 'ora';
import { optimizeSvg } from './utils/svgo.js';
import { generateComponent } from './utils/generate-component.js';
import { detectIconStyle } from './utils/style-handler.js';
import { toPascalCase, buildPrefixedComponentName, parseIconPath } from './utils/text-utils.js';
import { formatGeneratedFiles, isPrettierAvailable } from './utils/prettier-formatter.js';

/**
 * Process SVG icons and generate framework components
 * @param {Object} options - Processing options
 * @param {string} options.inputDir - Input directory containing SVG icons
 * @param {string} options.outputDir - Output directory for generated components
 * @param {string[]} options.formats - List of output formats
 * @param {boolean} options.optimize - Whether to optimize SVGs
 * @param {boolean} options.dryRun - Whether to perform a dry run
 * @param {boolean} options.verbose - Whether to output verbose logs
 * @param {boolean} options.autoDetectStyle - Whether to auto-detect icon styles
 * @param {boolean} options.includeProcessedSvgs - Whether to include processed SVGs in output
 * @param {string} options.processedSvgsDir - Directory containing processed SVGs
 * @param {boolean} options.cleanupProcessedSvgs - Whether to clean up processed SVGs directory after generation
 * @param {boolean} options.formatOutput - Whether to format output files with prettier
 * @returns {Promise<void>}
 */
export async function processIcons(options) {
  const { 
    inputDir, 
    outputDir, 
    formats, 
    optimize, 
    dryRun, 
    verbose, 
    autoDetectStyle = false,
    includeProcessedSvgs = true,
    processedSvgsDir = null,
    cleanupProcessedSvgs = false,
    formatOutput = true
  } = options;
  
  // Validate input directory exists
  if (!fs.existsSync(inputDir)) {
    throw new Error(`Input directory does not exist: ${inputDir}`);
  }
  
  // Create output directory if it doesn't exist
  if (!dryRun && !fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Find all SVG files
  const spinner = ora('Scanning for SVG files...').start();
  const svgFiles = await glob(`${inputDir}/**/*.svg`);
  
  if (svgFiles.length === 0) {
    spinner.fail('No SVG files found');
    return;
  }
  
  spinner.succeed(`Found ${svgFiles.length} SVG files`);
  
  // Statistics tracking
  const stats = {
    total: svgFiles.length,
    processed: 0,
    byStyle: {
      stroke: 0,
      solid: 0,
      contrast: 0,
      'duo-stroke': 0,
      'duo-solid': 0,
      auto: 0
    }
  };
  
  // Process each SVG file
  for (const svgFile of svgFiles) {
    try {
      const relativePath = path.relative(inputDir, svgFile);
      let { style, category, iconName } = parseIconPath(relativePath, inputDir);
      const componentName = toPascalCase(iconName);
      let prefixedComponentName;
      
      // Read SVG content for potential style detection
              let svgContent = await fs.promises.readFile(svgFile, 'utf8');
      
      // Auto-detect style if needed - only run if we don't have a valid folder-based style
      const validStyles = ['stroke', 'solid', 'contrast', 'duo-stroke', 'duo-solid'];
      if ((autoDetectStyle || style === 'auto') && !validStyles.includes(style)) {
        const detectedStyle = detectIconStyle(svgContent);
        if (verbose && style !== detectedStyle && style !== 'auto') {
          console.log(chalk.yellow(`Style mismatch: Path indicates "${style}" but detected "${detectedStyle}" for ${svgFile}`));
        }
        style = detectedStyle;
        stats.byStyle.auto++;
      }
      
      // Track style statistics
      if (stats.byStyle[style] !== undefined) {
        stats.byStyle[style]++;
      }
      
      prefixedComponentName = buildPrefixedComponentName(componentName, style);
      
      if (verbose) {
        console.log(chalk.blue(`Processing: ${svgFile} (Style: ${style}, Category: ${category})`));
      }
      
      // Process SVG with advanced optimization and theming
      if (optimize) {
        try {
          svgContent = await optimizeSvg(svgContent, { style });
        } catch (error) {
          console.error(chalk.red(`SVG optimization error: ${error.message}`));
        }
      }
      
      // Generate and write components for each format
      for (const format of formats) {
        const componentContent = await generateComponent(svgContent, {
          componentName,
          format,
          style,
          category,
          iconName
        });
        
        const extension = getExtensionForFormat(format);
        const outputFilePath = path.join(
          outputDir,
          format,
          style,
          category,
          `${prefixedComponentName}${extension}`
        );
        
        if (verbose) {
          console.log(chalk.gray(`  → ${outputFilePath}`));
        }
        
        if (!dryRun) {
          await fs.promises.mkdir(path.dirname(outputFilePath), { recursive: true });
                      await fs.promises.writeFile(outputFilePath, componentContent);
        }
      }
      
      stats.processed++;
    } catch (error) {
      if (verbose) {
        console.error(chalk.red(`Error processing ${svgFile}: ${error.message}`));
      }
    }
  }

  // Copy processed SVGs to output if requested
  if (includeProcessedSvgs && processedSvgsDir && fs.existsSync(processedSvgsDir)) {
    if (!dryRun) {
      const svgsOutputDir = path.join(outputDir, 'svgs');
      console.log(chalk.cyan(`📁 Copying processed SVGs to: ${svgsOutputDir}`));
      
      try {
        // Only copy SVG files, not components
        const svgPattern = path.join(processedSvgsDir, '**/*.svg');
        const svgFiles = await glob(svgPattern);
        
        for (const svgFile of svgFiles) {
          const relativePath = path.relative(processedSvgsDir, svgFile);
          const outputPath = path.join(svgsOutputDir, relativePath);
          
          await fs.promises.mkdir(path.dirname(outputPath), { recursive: true });
                      await fs.promises.copyFile(svgFile, outputPath);
        }
        
        console.log(chalk.green(`✅ Processed SVGs copied successfully (${svgFiles.length} files)`));
      } catch (error) {
        console.error(chalk.red(`Error copying processed SVGs: ${error.message}`));
      }
    } else {
      console.log(chalk.yellow(`Would copy processed SVGs from ${processedSvgsDir} to ${path.join(outputDir, 'svgs')}`));
    }
  }
  
  if (!dryRun) {
    const componentsCount = stats.processed * formats.length;
    console.log(chalk.green(`Generated ${componentsCount} components`));
    
    // Format output files with prettier if requested and available
    if (formatOutput && isPrettierAvailable()) {
      console.log(chalk.cyan('\n🎨 Formatting generated files...'));
      const formatResult = await formatGeneratedFiles(outputDir, verbose);
      
      if (formatResult.success) {
        console.log(chalk.green(`✅ Formatted ${formatResult.formatted} files with prettier`));
        if (formatResult.errors.length > 0 && verbose) {
          formatResult.errors.forEach(error => console.log(chalk.yellow(`  ⚠ ${error}`)));
        }
      } else {
        console.log(chalk.yellow(`⚠️ Prettier formatting failed, but components were generated successfully`));
      }
    } else if (formatOutput && !isPrettierAvailable()) {
      console.log(chalk.yellow('⚠️ Prettier not available, skipping formatting'));
    }
    
    // Print style statistics
    console.log(chalk.cyan('\nIcon Style Statistics:'));
    Object.entries(stats.byStyle).forEach(([style, count]) => {
      if (count > 0 && style !== 'auto') {
        console.log(chalk.cyan(`  ${style}: ${count} icons`));
      }
    });
    if (stats.byStyle.auto > 0) {
      console.log(chalk.cyan(`  Auto-detected: ${stats.byStyle.auto} icons`));
    }
    
    // Clean up processed SVGs directory if requested
    if (options.cleanupProcessedSvgs) {
      console.log(chalk.cyan('🧹 Cleaning up processed SVGs directory...'));
      try {
        if (fs.existsSync(processedSvgsDir || './processed-svgs')) {
          await fs.promises.rm(processedSvgsDir || './processed-svgs', { recursive: true, force: true });
          console.log(chalk.green('✅ Processed SVGs directory cleaned up'));
        }
      } catch (error) {
        console.error(chalk.yellow(`⚠️ Warning: Could not clean up processed SVGs directory: ${error.message}`));
      }
    }
  } else {
    console.log(chalk.yellow(`Would generate ${svgFiles.length * formats.length} components (dry run)`));
  }
}

/**
 * Get file extension for the specified format
 * @param {string} format - Format to get extension for
 * @returns {string} File extension including the dot
 */
function getExtensionForFormat(format) {
  switch (format) {
    case 'react-jsx':
      return '.jsx';
    case 'react-tsx':
      return '.tsx';
    case 'vue':
      return '.vue';
    case 'react-native':
      return '.jsx';
    case 'svelte':
      return '.svelte';
    default:
      return '.js';
  }
} 