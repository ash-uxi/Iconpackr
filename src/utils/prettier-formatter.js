/**
 * Prettier formatting utilities for generated components
 */

import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import ora from 'ora';

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
 * Format generated files with prettier
 * @param {string} outputDir - Directory containing generated files
 * @param {boolean} verbose - Whether to show verbose output
 * @returns {Promise<{success: boolean, formatted: number, errors: string[]}>}
 */
export async function formatGeneratedFiles(outputDir, verbose = false) {
  const spinner = ora('Formatting generated files with prettier...').start();
  
  try {
    // Create prettier config
    const configPath = createPrettierConfig(outputDir);
    
    const errors = [];
    let formattedCount = 0;

    // Format different file types
    const formatTasks = [
      { pattern: "**/*.{js,jsx,ts,tsx}", description: "React/TypeScript files" },
      { pattern: "**/*.vue", description: "Vue files" },
      { pattern: "**/*.svg", description: "SVG files", parser: "--parser html" }
    ];

    for (const task of formatTasks) {
      try {
        const command = `npx prettier --write "${task.pattern}" ${task.parser || ''} --config "${configPath}"`;
        
        if (verbose) {
          spinner.text = `Formatting ${task.description}...`;
        }

        const result = execSync(command, { 
          cwd: outputDir, 
          encoding: 'utf-8',
          stdio: verbose ? 'inherit' : 'pipe'
        });

        // Count formatted files from prettier output
        const lines = result.split('\n').filter(line => line.trim());
        const fileCount = lines.length;
        formattedCount += fileCount;

        if (verbose && fileCount > 0) {
          console.log(chalk.gray(`  ✓ Formatted ${fileCount} ${task.description}`));
        }

      } catch (error) {
        // Some file types might not exist, that's okay
        if (error.message.includes('No files matching')) {
          if (verbose) {
            console.log(chalk.gray(`  ⚠ No ${task.description} found to format`));
          }
        } else {
          errors.push(`Error formatting ${task.description}: ${error.message}`);
        }
      }
    }

    // Handle Svelte files separately (prettier doesn't have built-in support)
    try {
      const svelteFiles = execSync('find . -name "*.svelte" -type f', { 
        cwd: outputDir, 
        encoding: 'utf-8' 
      }).trim();
      
      if (svelteFiles) {
        const svelteFileList = svelteFiles.split('\n');
        if (verbose) {
          console.log(chalk.gray(`  ⚠ Found ${svelteFileList.length} Svelte files (manual formatting recommended)`));
        }
      }
    } catch (error) {
      // No Svelte files found, ignore
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
 * @returns {boolean} True if prettier is available
 */
export function isPrettierAvailable() {
  try {
    execSync('npx prettier --version', { stdio: 'pipe' });
    return true;
  } catch (error) {
    return false;
  }
}