import { Command } from 'commander';
import chalk from 'chalk';
import { processIcons } from './index.js';
import { preprocessSvgs, checkProcessedSvgs, cleanProcessedSvgs } from './utils/svg-preprocessor.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get package version by reading package.json directly
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
const { version } = packageJson;

/**
 * Configure and run the CLI interface
 * @param {string[]} args - Command line arguments
 */
export function cli(args) {
  const program = new Command();

  program
    .name('iconpackr')
    .description('Transform SVG icon collections into optimized component libraries')
    .version(version);

  // Main command for full processing (preprocess + generate)
  program
    .argument('[input]', 'Input directory containing SVG icons', './iconpack/input')
    .argument('[output]', 'Output directory for generated components', './iconpack/output')
    .option('-f, --formats <formats>', 'Comma-separated list of output formats (react-jsx,react-tsx,vue,react-native,svelte)', 'react-jsx,react-tsx,vue,react-native,svelte')
    .option('--no-optimize', 'Skip SVG optimization')
    .option('-d, --dry-run', 'Preview without writing files', false)
    .option('-v, --verbose', 'Enable verbose output', false)
    .option('-a, --auto-detect-style', 'Auto-detect icon styles based on content analysis', false)
    .option('-s, --style <style>', 'Default icon style to use when not specified in path (stroke, solid, contrast, duo-stroke, duo-solid)', 'auto')
    .option('--preprocess-only', 'Only preprocess raw SVGs, do not generate components', false)
    .option('--skip-preprocess', 'Skip preprocessing step and use existing processed SVGs', false)
    .option('--processed-dir <dir>', 'Directory for processed SVGs', './processed-svgs')
    .option('--include-processed', 'Include processed SVGs in the final output', true)
    .option('--clean-processed', 'Clean processed SVGs directory before processing', false)
    .option('--cleanup-after', 'Automatically clean up processed SVGs directory after successful generation', false)
    .option('--no-format', 'Skip prettier formatting of generated files', false)
    .action(async (input, output, options) => {
      try {
        // Check if default folders exist, create them if they don't
        if (input === './iconpack/input' && !fs.existsSync(input)) {
          console.log(chalk.cyan('📁 Creating default input folder...'));
          fs.mkdirSync(input, { recursive: true });
          fs.writeFileSync(path.join(input, '.gitkeep'), '# Place your SVG files here\n\n# IconPackr will process all SVG files in this directory\n# and maintain the folder structure in the output.');
        }
        
        if (output === './iconpack/output' && !fs.existsSync(output)) {
          console.log(chalk.cyan('📁 Creating default output folder...'));
          fs.mkdirSync(output, { recursive: true });
        }
        
        const formatsList = options.formats.split(',').map(format => format.trim());
        
        console.log(chalk.blue('🔍 IconPackr'));
        console.log(chalk.gray(`Input: ${input}`));
        console.log(chalk.gray(`Output: ${output}`));
        console.log(chalk.gray(`Processed SVGs: ${options.processedDir}`));
        console.log(chalk.gray(`Formats: ${formatsList.join(', ')}`));
        
        if (options.autoDetectStyle) {
          console.log(chalk.cyan('🎨 Auto-detecting icon styles based on content analysis'));
        }
        
        if (options.style !== 'auto' && !options.autoDetectStyle) {
          console.log(chalk.cyan(`🎨 Using default style: ${options.style}`));
        }
        
        if (options.dryRun) {
          console.log(chalk.yellow('⚠️ Dry run mode: No files will be written'));
        }

        // Clean processed directory if requested
        if (options.cleanProcessed) {
          console.log(chalk.cyan('🧹 Cleaning processed SVGs directory...'));
          await cleanProcessedSvgs(options.processedDir, options.dryRun);
        }

        // Stage 1: Preprocess raw SVGs
        if (!options.skipPreprocess) {
          console.log(chalk.cyan('📝 Stage 1: Preprocessing raw SVGs...'));
          
          const preprocessStats = await preprocessSvgs({
            inputDir: input,
            processedDir: options.processedDir,
            dryRun: options.dryRun,
            verbose: options.verbose,
            processingOptions: {
              // You can add custom processing options here
            }
          });

          if (preprocessStats.failed > 0) {
            console.log(chalk.yellow(`⚠️ Some SVGs failed to preprocess (${preprocessStats.failed}/${preprocessStats.total})`));
          }

          if (options.preprocessOnly) {
            console.log(chalk.green('✅ Preprocessing completed (preprocess-only mode)'));
            return;
          }
        } else {
          console.log(chalk.cyan('⏭️ Skipping preprocessing step'));
          
          // Check if processed SVGs exist
          const status = await checkProcessedSvgs(input, options.processedDir);
          if (status.needsProcessing) {
            console.log(chalk.yellow('⚠️ Warning: Processed SVGs may be missing or outdated'));
            if (status.missingFiles.length > 0) {
              console.log(chalk.yellow(`  Missing: ${status.missingFiles.length} files`));
            }
            if (status.outdatedFiles.length > 0) {
              console.log(chalk.yellow(`  Outdated: ${status.outdatedFiles.length} files`));
            }
          }
        }

        // Stage 2: Generate components from processed SVGs
        console.log(chalk.cyan('🏗️ Stage 2: Generating components from processed SVGs...'));
        
        await processIcons({
          inputDir: options.processedDir, // Use processed SVGs as input
          outputDir: output,
          formats: formatsList,
          optimize: options.optimize,
          dryRun: options.dryRun,
          verbose: options.verbose,
          autoDetectStyle: options.autoDetectStyle || options.style === 'auto',
          defaultStyle: options.style,
          includeProcessedSvgs: options.includeProcessed,
          processedSvgsDir: options.processedDir,
          cleanupProcessedSvgs: options.cleanupAfter,
          formatOutput: options.format
        });
        
        // Auto-cleanup processed SVGs for simplified workflow
        if (input === './iconpack/input' && output === './iconpack/output') {
          console.log(chalk.cyan('🧹 Cleaning up processed SVGs...'));
          await cleanProcessedSvgs(options.processedDir, options.dryRun);
        }
        
        console.log(chalk.green('✅ Completed successfully'));
      } catch (error) {
        console.error(chalk.red(`❌ Error: ${error.message}`));
        if (options.verbose) {
          console.error(chalk.red(error.stack));
        }
        process.exit(1);
      }
    });

  // Subcommand for preprocessing only
  program
    .command('preprocess')
    .description('Preprocess raw SVGs only')
    .argument('<input>', 'Input directory containing raw SVG icons')
    .argument('[processed]', 'Output directory for processed SVGs', './processed-svgs')
    .option('-d, --dry-run', 'Preview without writing files', false)
    .option('-v, --verbose', 'Enable verbose output', false)
    .option('--clean', 'Clean processed directory before processing', false)
    .action(async (input, processed, options) => {
      try {
        console.log(chalk.blue('🔍 IconPackr - Preprocess Mode'));
        console.log(chalk.gray(`Input: ${input}`));
        console.log(chalk.gray(`Processed Output: ${processed}`));

        if (options.clean) {
          console.log(chalk.cyan('🧹 Cleaning processed SVGs directory...'));
          await cleanProcessedSvgs(processed, options.dryRun);
        }

        await preprocessSvgs({
          inputDir: input,
          processedDir: processed,
          dryRun: options.dryRun,
          verbose: options.verbose
        });

        console.log(chalk.green('✅ Preprocessing completed'));
      } catch (error) {
        console.error(chalk.red(`❌ Error: ${error.message}`));
        if (options.verbose) {
          console.error(chalk.red(error.stack));
        }
        process.exit(1);
      }
    });

  // Subcommand for checking processed SVGs status
  program
    .command('check')
    .description('Check status of processed SVGs')
    .argument('<input>', 'Input directory containing raw SVG icons')
    .argument('[processed]', 'Directory containing processed SVGs', './processed-svgs')
    .action(async (input, processed) => {
      try {
        console.log(chalk.blue('🔍 IconPackr - Check Status'));
        
        const status = await checkProcessedSvgs(input, processed);
        
        console.log(chalk.cyan('\nProcessed SVGs Status:'));
        console.log(chalk.gray(`  Raw SVGs: ${status.rawCount}`));
        console.log(chalk.gray(`  Processed SVGs: ${status.processedCount}`));
        
        if (status.needsProcessing) {
          console.log(chalk.yellow('  Status: Needs processing'));
          if (status.missingFiles.length > 0) {
            console.log(chalk.yellow(`  Missing files: ${status.missingFiles.length}`));
          }
          if (status.outdatedFiles.length > 0) {
            console.log(chalk.yellow(`  Outdated files: ${status.outdatedFiles.length}`));
          }
        } else {
          console.log(chalk.green('  Status: Up to date'));
        }
      } catch (error) {
        console.error(chalk.red(`❌ Error: ${error.message}`));
        process.exit(1);
      }
    });

  // Subcommand for cleaning processed SVGs
  program
    .command('clean')
    .description('Clean processed SVGs directory')
    .argument('[processed]', 'Directory containing processed SVGs', './processed-svgs')
    .option('-d, --dry-run', 'Preview without removing files', false)
    .action(async (processed, options) => {
      try {
        console.log(chalk.blue('🔍 IconPackr - Clean Mode'));
        
        await cleanProcessedSvgs(processed, options.dryRun);
        
        console.log(chalk.green('✅ Cleaning completed'));
      } catch (error) {
        console.error(chalk.red(`❌ Error: ${error.message}`));
        process.exit(1);
      }
    });

  program.parse(args);
}

// Automatically run CLI when this file is executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  cli(process.argv);
}