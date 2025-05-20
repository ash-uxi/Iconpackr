import { Command } from 'commander';
import chalk from 'chalk';
import { processIcons } from './index.js';
import fs from 'fs-extra';
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
  console.log(chalk.cyan('Starting CLI with args:'), args);
  
  const program = new Command();

  program
    .name('iconpackr')
    .description('Transform SVG icon collections into optimized component libraries')
    .version(version);

  program
    .argument('<input>', 'Input directory containing SVG icons')
    .argument('[output]', 'Output directory for generated components', './dist')
    .option('-f, --formats <formats>', 'Comma-separated list of output formats (react-jsx,react-tsx,vue,react-native)', 'react-jsx,react-tsx,vue,react-native')
    .option('--no-optimize', 'Skip SVG optimization')
    .option('-d, --dry-run', 'Preview without writing files', false)
    .option('-v, --verbose', 'Enable verbose output', false)
    .option('-a, --auto-detect-style', 'Auto-detect icon styles based on content analysis', false)
    .option('-s, --style <style>', 'Default icon style to use when not specified in path (stroke, solid, contrast, duo-stroke, duo-solid)', 'auto')
    .action(async (input, output, options) => {
      try {
        console.log(chalk.yellow('CLI action triggered'));
        console.log(chalk.yellow(`Input: ${input}`));
        console.log(chalk.yellow(`Output: ${output}`));
        console.log(chalk.yellow(`Options: ${JSON.stringify(options, null, 2)}`));
        
        const formatsList = options.formats.split(',').map(format => format.trim());
        
        console.log(chalk.blue('🔍 IconPackr'));
        console.log(chalk.gray(`Input: ${input}`));
        console.log(chalk.gray(`Output: ${output}`));
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
        
        console.log(chalk.green('Calling processIcons...'));
        await processIcons({
          inputDir: input,
          outputDir: output,
          formats: formatsList,
          optimize: options.optimize,
          dryRun: options.dryRun,
          verbose: options.verbose,
          autoDetectStyle: options.autoDetectStyle || options.style === 'auto',
          defaultStyle: options.style
        });
        
        console.log(chalk.green('✅ Completed successfully'));
      } catch (error) {
        console.error(chalk.red(`❌ Error: ${error.message}`));
        if (options.verbose) {
          console.error(chalk.red(error.stack));
        }
        process.exit(1);
      }
    });

  program.parse(args);
  console.log(chalk.cyan('CLI parsing complete'));
}

// Automatically run CLI when this file is executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log(chalk.yellow('Direct execution detected, running CLI...'));
  cli(process.argv);
} 