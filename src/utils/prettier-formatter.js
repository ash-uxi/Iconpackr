/**
 * Prettier formatting utilities for generated components
 */

import { execSync, spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import ora from 'ora';
import { glob } from 'glob';

/**
 * Create prettier configuration for the output directory
 * @param {string} outputDir - Directory to create .prettierrc in
 */
export function createPrettierConfig(outputDir) {
  const prettierConfig = {
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    printWidth: 80,
    trailingComma: "es5",
    bracketSpacing: true,
    arrowParens: "always"
  };

  const configPath = path.join(outputDir, '.prettierrc');
  fs.writeFileSync(configPath, JSON.stringify(prettierConfig, null, 2));
  return configPath;
}

/**
 * Safely validate file patterns to prevent command injection
 * @param {string} pattern - File pattern to validate
 * @returns {boolean} True if pattern is safe
 */
function isValidFilePattern(pattern) {
  // Only allow alphanumeric, -, _, ., /, *, {, }, and comma
  const safePattern = /^[a-zA-Z0-9\-_.\/*{},]+$/;
  return safePattern.test(pattern) && !pattern.includes('..') && !pattern.includes(';') && !pattern.includes('|');
}

/**
 * Safely validate directory path to prevent path traversal
 * @param {string} dirPath - Directory path to validate  
 * @returns {boolean} True if path is safe
 */
function isValidDirectoryPath(dirPath) {
  const resolvedPath = path.resolve(dirPath);
  const normalizedPath = path.normalize(dirPath);
  
  // Ensure no path traversal attempts
  return !normalizedPath.includes('..') && 
         !normalizedPath.includes('~') &&
         fs.existsSync(resolvedPath) &&
         fs.statSync(resolvedPath).isDirectory();
}

/**
 * Execute prettier safely using spawn instead of execSync
 * @param {string[]} args - Prettier arguments
 * @param {string} cwd - Working directory
 * @returns {Promise<{success: boolean, output: string}>}
 */
function executePrettierSafely(args, cwd) {
  return new Promise((resolve) => {
    const child = spawn('npx', ['prettier', ...args], {
      cwd,
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: false // Important: disable shell to prevent injection
    });

    let output = '';
    let errorOutput = '';

    child.stdout.on('data', (data) => {
      output += data.toString();
    });

    child.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });

    child.on('close', (code) => {
      resolve({
        success: code === 0,
        output: output.trim(),
        error: errorOutput.trim()
      });
    });

    child.on('error', (error) => {
      resolve({
        success: false,
        output: '',
        error: error.message
      });
    });
  });
}

/**
 * Format generated files with prettier
 * @param {string} outputDir - Directory containing generated files
 * @param {boolean} verbose - Whether to show verbose output
 * @returns {Promise<{success: boolean, formatted: number, errors: string[]}>}
 */
export async function formatGeneratedFiles(outputDir, verbose = false) {
  const spinner = ora('Formatting generated files with prettier...').start();
  
  try {
    // Validate output directory
    if (!isValidDirectoryPath(outputDir)) {
      throw new Error(`Invalid or non-existent output directory: ${outputDir}`);
    }

    // Create prettier config
    const configPath = createPrettierConfig(outputDir);
    
    const errors = [];
    let formattedCount = 0;

    // Format different file types with safe patterns
    const formatTasks = [
      { pattern: "**/*.{js,jsx,ts,tsx}", description: "React/TypeScript files", parser: null },
      { pattern: "**/*.vue", description: "Vue files", parser: null },
      { pattern: "**/*.svg", description: "SVG files", parser: "html" }
    ];

    for (const task of formatTasks) {
      try {
        // Validate file pattern
        if (!isValidFilePattern(task.pattern)) {
          errors.push(`Invalid file pattern: ${task.pattern}`);
          continue;
        }

        if (verbose) {
          spinner.text = `Formatting ${task.description}...`;
        }

        // Build safe arguments array
        const args = ['--write', task.pattern];
        if (task.parser) {
          args.push('--parser', task.parser);
        }
        args.push('--config', configPath);

        const result = await executePrettierSafely(args, outputDir);

        if (result.success) {
          // Count formatted files from prettier output
          const lines = result.output.split('\n').filter(line => line.trim());
          const fileCount = lines.length;
          formattedCount += fileCount;

          if (verbose && fileCount > 0) {
            console.log(chalk.gray(`  ✓ Formatted ${fileCount} ${task.description}`));
          }
        } else {
          if (result.error.includes('No files matching')) {
            if (verbose) {
              console.log(chalk.gray(`  ⚠ No ${task.description} found to format`));
            }
          } else {
            errors.push(`Error formatting ${task.description}: ${result.error}`);
          }
        }

      } catch (error) {
        errors.push(`Error formatting ${task.description}: ${error.message}`);
      }
    }

    // Handle Svelte files safely using glob instead of shell command
    try {
      const svelteFiles = await glob('**/*.svelte', { cwd: outputDir });
      
      if (svelteFiles.length > 0 && verbose) {
        console.log(chalk.gray(`  ⚠ Found ${svelteFiles.length} Svelte files (manual formatting recommended)`));
      }
    } catch (error) {
      // No Svelte files found or glob error, ignore
    }

    // Clean up config file
    fs.unlinkSync(configPath);

    if (errors.length === 0) {
      spinner.succeed(`Formatted ${formattedCount} files successfully`);
      return { success: true, formatted: formattedCount, errors: [] };
    } else {
      spinner.warn(`Formatted ${formattedCount} files with ${errors.length} warnings`);
      if (verbose) {
        errors.forEach(error => console.log(chalk.yellow(`  ⚠ ${error}`)));
      }
      return { success: true, formatted: formattedCount, errors };
    }

  } catch (error) {
    spinner.fail(`Failed to format files: ${error.message}`);
    return { success: false, formatted: 0, errors: [error.message] };
  }
}

/**
 * Check if prettier is available
 * @returns {Promise<boolean>} True if prettier is available
 */
export async function isPrettierAvailable() {
  try {
    const result = await executePrettierSafely(['--version'], process.cwd());
    return result.success;
  } catch (error) {
    return false;
  }
}