import path from 'path';
import fs from 'fs';
import { glob } from 'glob';
import chalk from 'chalk';
import ora from 'ora';
import { optimizeSvg } from './utils/svgo.js';
import { generateComponent, getExtensionForFormat } from './utils/component-generator.js';
import { detectIconStyle } from './utils/style-handler.js';
import { toPascalCase } from './utils/text-utils.js';
import { formatGeneratedFiles, isPrettierAvailable } from './utils/prettier-formatter.js';
import { processFilesInParallel, calculateOptimalConcurrency, logPerformanceMetrics } from './utils/parallel-processor.js';

/**
 * Sanitize path component to prevent path traversal attacks
 * @param {string} component - Path component to sanitize
 * @returns {string} Sanitized path component
 */
function sanitizePathComponent(component) {
  if (!component || typeof component !== 'string') {
    return 'unknown';
  }
  
  // Remove any path traversal attempts and invalid characters
  return component
    .replace(/\.\./g, '') // Remove .. sequences
    .replace(/[\/\\]/g, '') // Remove path separators
    .replace(/[<>:"|?*]/g, '') // Remove invalid filename characters
    .replace(/^\.+/, '') // Remove leading dots
    .trim() || 'unknown'; // Return 'unknown' if empty after sanitization
}

/**
 * Validate that a path is within the expected boundaries
 * @param {string} filePath - Path to validate
 * @param {string} basePath - Base path that should contain the file
 * @returns {boolean} True if path is safe
 */
function isPathSafe(filePath, basePath) {
  const resolvedFile = path.resolve(filePath);
  const resolvedBase = path.resolve(basePath);
  
  // Ensure the resolved file path starts with the base path
  return resolvedFile.startsWith(resolvedBase + path.sep) || resolvedFile === resolvedBase;
}

/**
 * Process a single SVG file
 * @param {string} svgFile - Path to SVG file
 * @param {Object} options - Processing options
 * @returns {Promise<Object>} Processing result
 */
async function processSingleSvgFile(svgFile, options) {
  const { 
    inputDir, 
    outputDir, 
    formats, 
    optimize, 
    autoDetectStyle, 
    dryRun, 
    verbose 
  } = options;
  
  try {
    // Validate the SVG file path is safe
    if (!isPathSafe(svgFile, inputDir)) {
      return {
        success: false,
        file: svgFile,
        error: 'Potentially unsafe file path',
        skipped: true
      };
    }

    // Extract paths
    const relativePath = path.relative(inputDir, svgFile);
    const pathParts = relativePath.split(path.sep);
    
    let style, category, iconName, componentName, prefixedComponentName;
    
    // Handle different path structures with sanitization
    if (pathParts.length >= 3) {
      // Standard [style]/[category]/[icon].svg structure
      style = sanitizePathComponent(pathParts[0]);
      category = sanitizePathComponent(pathParts[1]);
      iconName = sanitizePathComponent(path.basename(pathParts[2], '.svg'));
    } else if (pathParts.length === 2) {
      // [category]/[icon].svg structure
      // Try to extract style from input directory path
      const inputDirParts = inputDir.split(path.sep);
      // Look for style keywords in the path
      const styleKeywords = ['stroke', 'solid', 'contrast', 'duo-stroke', 'duo-solid'];
      let extractedStyle = null;
      
      // Search from the end of the path (most specific) to the beginning
      for (let i = inputDirParts.length - 1; i >= 0; i--) {
        if (styleKeywords.includes(inputDirParts[i])) {
          extractedStyle = inputDirParts[i];
          break;
        }
      }
      
      style = extractedStyle || 'auto';
      category = sanitizePathComponent(pathParts[0]);
      iconName = sanitizePathComponent(path.basename(pathParts[1], '.svg'));
    } else if (pathParts.length === 1) {
      // Direct [icon].svg file - try to extract style from input directory path
      const inputDirParts = inputDir.split(path.sep);
      // Look for style keywords in the path
      const styleKeywords = ['stroke', 'solid', 'contrast', 'duo-stroke', 'duo-solid'];
      let extractedStyle = null;
      let extractedCategory = null;
      
      // Search from the end of the path (most specific) to the beginning
      for (let i = inputDirParts.length - 1; i >= 0; i--) {
        if (styleKeywords.includes(inputDirParts[i])) {
          extractedStyle = inputDirParts[i];
          // If we found the style and there's a next part in the path, use it as category
          if (i < inputDirParts.length - 1) {
            extractedCategory = inputDirParts[i + 1];
          }
          break;
        }
      }
      
      style = extractedStyle || 'auto';
      category = sanitizePathComponent(extractedCategory) || 'general';
      iconName = sanitizePathComponent(path.basename(pathParts[0], '.svg'));
    }
    
    // Convert to PascalCase component name
    componentName = toPascalCase(iconName);
    
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
    }
    
    // Create prefixed component filename with style suffix
    let styleSuffix = style.charAt(0).toUpperCase() + style.slice(1);
    // Replace hyphens with PascalCase (duo-stroke -> DuoStroke)
    styleSuffix = styleSuffix.split('-').map(part => 
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join('');
    prefixedComponentName = `Pi${componentName}${styleSuffix}`;
    
    // Process SVG with advanced optimization and theming
    if (optimize) {
      try {
        svgContent = await optimizeSvg(svgContent, { style });
      } catch (error) {
        if (verbose) {
          console.error(chalk.red(`SVG optimization failed for ${svgFile}: ${error.message}`));
        }
        // Continue with unoptimized content
      }
    }
    
    const componentsGenerated = [];
    
    // Generate components for each format
    for (const format of formats) {
      const componentContent = await generateComponent(svgContent, {
        componentName,
        format,
        style,
        category,
        iconName
      });
      
      const extension = getExtensionForFormat(format);
      
      // Sanitize all path components for output
      const sanitizedFormat = sanitizePathComponent(format);
      const sanitizedStyle = sanitizePathComponent(style);
      const sanitizedCategory = sanitizePathComponent(category);
      const sanitizedComponentName = sanitizePathComponent(prefixedComponentName);
      
      const outputFilePath = path.join(
        outputDir,
        sanitizedFormat,
        sanitizedStyle,
        sanitizedCategory,
        `${sanitizedComponentName}${extension}`
      );
      
      // Validate the output path is safe
      if (!isPathSafe(outputFilePath, outputDir)) {
        if (verbose) {
          console.error(chalk.red(`Skipping unsafe output path: ${outputFilePath}`));
        }
        continue;
      }
      
      if (!dryRun) {
        await fs.promises.mkdir(path.dirname(outputFilePath), { recursive: true });
        await fs.promises.writeFile(outputFilePath, componentContent);
      }
      
      componentsGenerated.push({
        format,
        outputPath: outputFilePath,
        size: componentContent.length
      });
    }
    
    return {
      success: true,
      file: svgFile,
      style,
      category,
      iconName: prefixedComponentName,
      componentsGenerated,
      skipped: false
    };
    
  } catch (error) {
    return {
      success: false,
      file: svgFile,
      error: error.message,
      skipped: false
    };
  }
}

/**
 * Process SVG icons and generate framework components (Parallel version)
 * @param {Object} options - Processing options
 * @param {string} options.inputDir - Input directory containing SVG icons
 * @param {string} options.outputDir - Output directory for generated components
 * @param {string[]} options.formats - List of output formats
 * @param {boolean} options.optimize - Whether to optimize SVGs
 * @param {boolean} options.dryRun - Whether to perform a dry run
 * @param {boolean} options.verbose - Whether to output verbose logs
 * @param {boolean} options.autoDetectStyle - Whether to auto-detect icon styles
 * @param {boolean} options.cleanupAfter - Whether to cleanup processed SVGs
 * @param {boolean} options.includeProcessedSvgs - Whether to include processed SVGs in output
 * @param {string} options.processedSvgsDir - Directory containing processed SVGs
 * @param {boolean} options.formatWithPrettier - Whether to format code with prettier
 * @returns {Promise<void>}
 */
export async function processIcons(options) {
  const {
    inputDir = './iconpack/input',
    outputDir = './iconpack/output',
    formats = ['react-jsx'],
    optimize = true,
    dryRun = false,
    verbose = false,
    autoDetectStyle = false,
    cleanupAfter = false,
    includeProcessedSvgs = false,
    processedSvgsDir = null,
    formatWithPrettier = false
  } = options;

  // Validate input directory
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
  
  // Calculate optimal concurrency and start timer
  const concurrency = calculateOptimalConcurrency(svgFiles.length, formats);
  const startTime = Date.now();
  
  console.log(chalk.cyan(`🚀 Processing ${svgFiles.length} files with ${concurrency} workers...`));
  
  // Process files in parallel
  const processingOptions = {
    inputDir,
    outputDir,
    formats,
    optimize,
    autoDetectStyle,
    dryRun,
    verbose: false // Disable verbose for individual files to avoid spam
  };
  
  const results = await processFilesInParallel(
    svgFiles,
    (svgFile) => processSingleSvgFile(svgFile, processingOptions),
    {
      concurrency,
      verbose: true,
      progressMessage: `Processing ${svgFiles.length} SVG files`
    }
  );
  
  // Process results and update statistics
  for (const result of results) {
    if (result.success && !result.skipped) {
      stats.processed++;
      
      // Update style statistics
      if (result.result && result.result.style && stats.byStyle[result.result.style] !== undefined) {
        stats.byStyle[result.result.style]++;
      }
      
      if (verbose && result.result) {
        console.log(chalk.blue(`✓ ${result.file} → ${result.result.iconName} (${result.result.style})`));
      }
    } else if (result.success && result.skipped) {
      if (verbose) {
        console.log(chalk.yellow(`⚠ Skipped: ${result.file} - ${result.error}`));
      }
    } else {
      if (verbose) {
        console.error(chalk.red(`✗ Failed: ${result.file} - ${result.error}`));
      }
    }
  }
  
  // Log performance metrics
  const metrics = logPerformanceMetrics(startTime, svgFiles.length, concurrency, verbose);
  
  console.log(chalk.green(`\n✅ Parallel processing completed!`));
  console.log(chalk.gray(`   Files processed: ${stats.processed}/${svgFiles.length}`));
  console.log(chalk.gray(`   Throughput: ${metrics.throughput.toFixed(1)} files/second`));
  console.log(chalk.gray(`   Components generated: ${stats.processed * formats.length}`));

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
          // Validate SVG file is within expected directory
          if (!isPathSafe(svgFile, processedSvgsDir)) {
            if (verbose) {
              console.error(chalk.red(`Skipping unsafe SVG file: ${svgFile}`));
            }
            continue;
          }

          const relativePath = path.relative(processedSvgsDir, svgFile);
          const outputPath = path.join(svgsOutputDir, relativePath);
          
          // Validate output path is safe
          if (!isPathSafe(outputPath, svgsOutputDir)) {
            if (verbose) {
              console.error(chalk.red(`Skipping unsafe SVG output path: ${outputPath}`));
            }
            continue;
          }
          
          await fs.promises.mkdir(path.dirname(outputPath), { recursive: true });
          await fs.promises.copyFile(svgFile, outputPath);
        }
        
        console.log(chalk.green(`✅ Processed SVGs copied successfully (${svgFiles.length} files)`));
      } catch (error) {
        console.error(chalk.red(`Error copying processed SVGs: ${error.message}`));
      }
    }
  }

  // Show statistics
  console.log(chalk.cyan('\n📊 Processing Statistics:'));
  Object.entries(stats.byStyle).forEach(([style, count]) => {
    if (count > 0) {
      console.log(chalk.gray(`   ${style}: ${count} icons`));
    }
  });

  // Format with prettier if requested
  if (formatWithPrettier && !dryRun) {
    console.log(chalk.cyan('\n🎨 Formatting generated components...'));
    
    if (await isPrettierAvailable()) {
      const result = await formatGeneratedFiles(outputDir, verbose);
      if (result.success) {
        console.log(chalk.green(`✅ Formatted ${result.formatted} files successfully`));
      } else {
        console.log(chalk.yellow(`⚠️ Formatting completed with ${result.errors.length} warnings`));
      }
    } else {
      console.log(chalk.yellow('⚠️ Prettier not available, skipping formatting'));
    }
  }

  if (dryRun) {
    console.log(chalk.yellow(`Would generate ${svgFiles.length * formats.length} components (dry run)`));
  }
}