import path from 'path';
import fs from 'fs';
import { glob } from 'glob';
import chalk from 'chalk';
import ora from 'ora';
import { optimizeSvg } from './svgo.js';
import { detectIconStyle } from './style-handler.js';
import { processSvgForTheming } from './svg-attribute-handler.js';

/**
 * Process raw SVGs and save them to a processed directory
 * @param {Object} options - Processing options
 * @param {string} options.inputDir - Input directory containing raw SVG icons
 * @param {string} options.processedDir - Output directory for processed SVGs
 * @param {boolean} options.dryRun - Whether to perform a dry run
 * @param {boolean} options.verbose - Whether to output verbose logs
 * @param {Object} options.processingOptions - SVG processing options
 * @returns {Promise<Object>} Processing results with statistics
 */
export async function preprocessSvgs(options) {
  const { 
    inputDir, 
    processedDir, 
    dryRun = false, 
    verbose = false,
    processingOptions = {}
  } = options;
  
  // Validate input directory exists
  if (!fs.existsSync(inputDir)) {
    throw new Error(`Input directory does not exist: ${inputDir}`);
  }
  
  // Create processed directory if it doesn't exist
  if (!dryRun && !fs.existsSync(processedDir)) {
    fs.mkdirSync(processedDir, { recursive: true });
  }
  
  // Find all SVG files
  const spinner = ora('Scanning for raw SVG files...').start();
  const svgFiles = await glob(`${inputDir}/**/*.svg`);
  
  if (svgFiles.length === 0) {
    spinner.fail('No SVG files found');
    return { processed: 0, failed: 0, skipped: 0 };
  }
  
  spinner.succeed(`Found ${svgFiles.length} SVG files to process`);
  
  // Processing statistics
  const stats = {
    total: svgFiles.length,
    processed: 0,
    failed: 0,
    skipped: 0,
    errors: []
  };
  
  if (verbose && Object.keys(processingOptions).length > 0) {
    console.log(chalk.cyan('SVG Processing Options:'));
    console.log(chalk.gray(JSON.stringify(processingOptions, null, 2)));
  }
  
  // Process each SVG file
  const processingSpinner = ora('Processing SVG files...').start();
  
  for (const svgFile of svgFiles) {
    try {
      // Calculate relative path and output path
      const relativePath = path.relative(inputDir, svgFile);
      const outputPath = path.join(processedDir, relativePath);
      
      if (verbose) {
        processingSpinner.text = `Processing: ${relativePath}`;
      }
      
      // Read raw SVG content
      const rawSvgContent = await fs.promises.readFile(svgFile, 'utf8');
      
      // Detect icon style first
      const detectedStyle = detectIconStyle(rawSvgContent);
      
      // Process the SVG with advanced optimization and theming
      let processedSvgContent = await optimizeSvg(rawSvgContent, { style: detectedStyle });
      
      if (verbose) {
        console.log(chalk.gray(`    Style: ${detectedStyle}`));
      }
      
      // Check if processing actually changed the content
      if (processedSvgContent === rawSvgContent) {
        if (verbose) {
          console.log(chalk.yellow(`  Skipped (no changes): ${relativePath}`));
        }
        stats.skipped++;
      } else {
        // Write processed SVG if not dry run
        if (!dryRun) {
          await fs.promises.mkdir(path.dirname(outputPath), { recursive: true });
                      await fs.promises.writeFile(outputPath, processedSvgContent);
        }
        
        if (verbose) {
          console.log(chalk.green(`  Processed: ${relativePath}`));
        }
        stats.processed++;
      }
      
    } catch (error) {
      stats.failed++;
      stats.errors.push({
        file: svgFile,
        error: error.message
      });
      
      if (verbose) {
        console.error(chalk.red(`  Error processing ${svgFile}: ${error.message}`));
      }
    }
  }
  
  processingSpinner.succeed('SVG processing completed');
  
  // Print summary
  console.log(chalk.cyan('\nSVG Processing Summary:'));
  console.log(chalk.green(`  Processed: ${stats.processed} files`));
  if (stats.skipped > 0) {
    console.log(chalk.yellow(`  Skipped: ${stats.skipped} files (no changes)`));
  }
  if (stats.failed > 0) {
    console.log(chalk.red(`  Failed: ${stats.failed} files`));
    if (verbose && stats.errors.length > 0) {
      console.log(chalk.red('\nErrors:'));
      stats.errors.forEach(({ file, error }) => {
        console.log(chalk.red(`  ${file}: ${error}`));
      });
    }
  }
  
  if (dryRun) {
    console.log(chalk.yellow('\n⚠️ Dry run mode: No files were written'));
  } else {
    console.log(chalk.green(`\n✅ Processed SVGs saved to: ${processedDir}`));
  }
  
  return stats;
}

/**
 * Check if processed SVGs exist and are up to date
 * @param {string} inputDir - Raw SVG input directory
 * @param {string} processedDir - Processed SVG directory
 * @returns {Promise<Object>} Status information
 */
export async function checkProcessedSvgs(inputDir, processedDir) {
  const rawSvgFiles = await glob(`${inputDir}/**/*.svg`);
  const processedSvgFiles = await glob(`${processedDir}/**/*.svg`);
  
  const status = {
    rawCount: rawSvgFiles.length,
    processedCount: processedSvgFiles.length,
    needsProcessing: false,
    missingFiles: [],
    outdatedFiles: []
  };
  
  // Check if processed directory exists
  if (!fs.existsSync(processedDir)) {
    status.needsProcessing = true;
    return status;
  }
  
  // Check for missing processed files
  for (const rawFile of rawSvgFiles) {
    const relativePath = path.relative(inputDir, rawFile);
    const processedFile = path.join(processedDir, relativePath);
    
    if (!fs.existsSync(processedFile)) {
      status.missingFiles.push(relativePath);
      status.needsProcessing = true;
    } else {
      // Check if raw file is newer than processed file
      const rawStat = await fs.promises.stat(rawFile);
      const processedStat = await fs.promises.stat(processedFile);
      
      if (rawStat.mtime > processedStat.mtime) {
        status.outdatedFiles.push(relativePath);
        status.needsProcessing = true;
      }
    }
  }
  
  return status;
}

/**
 * Clean up processed SVG directory
 * @param {string} processedDir - Processed SVG directory to clean
 * @param {boolean} dryRun - Whether to perform a dry run
 * @returns {Promise<void>}
 */
export async function cleanProcessedSvgs(processedDir, dryRun = false) {
  if (!fs.existsSync(processedDir)) {
    console.log(chalk.yellow('Processed SVG directory does not exist, nothing to clean'));
    return;
  }
  
  if (dryRun) {
    console.log(chalk.yellow(`Would remove processed SVG directory: ${processedDir}`));
  } else {
    await fs.promises.rm(processedDir, { recursive: true, force: true });
    console.log(chalk.green(`Cleaned processed SVG directory: ${processedDir}`));
  }
}