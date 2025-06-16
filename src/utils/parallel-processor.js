/**
 * Parallel processing utilities for high-performance icon processing
 * Provides intelligent batching and concurrency control
 */

import os from 'os';
import pLimit from 'p-limit';
import chalk from 'chalk';
import ora from 'ora';

/**
 * Calculate optimal concurrency based on system resources and workload
 * @param {number} totalFiles - Total number of files to process
 * @param {string[]} formats - Array of output formats
 * @returns {number} Optimal concurrency level
 */
export function calculateOptimalConcurrency(totalFiles, formats = ['react-jsx']) {
  const cpuCount = os.cpus().length;
  const totalTasks = totalFiles * formats.length;
  
  // For small workloads, use fewer workers to avoid overhead
  if (totalTasks < 50) {
    return Math.min(2, cpuCount);
  }
  
  // For medium workloads, use more workers
  if (totalTasks < 500) {
    return Math.min(cpuCount, 8);
  }
  
  // For large workloads, use most available cores but leave some for system
  return Math.min(cpuCount * 2, 16);
}

/**
 * Split array into chunks for parallel processing
 * @param {Array} array - Array to split
 * @param {number} chunkSize - Size of each chunk
 * @returns {Array[]} Array of chunks
 */
export function chunkArray(array, chunkSize) {
  if (chunkSize <= 0) {
    throw new Error('Chunk size must be greater than 0');
  }
  
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

/**
 * Process files in parallel with intelligent batching
 * @param {string[]} svgFiles - Array of SVG file paths
 * @param {Function} processingFunction - Function to process each file
 * @param {Object} options - Processing options
 * @param {number} options.concurrency - Concurrency limit (auto-calculated if not provided)
 * @param {boolean} options.verbose - Whether to show progress
 * @param {string} options.progressMessage - Message to show during processing
 * @returns {Promise<Array>} Array of processing results
 */
export async function processFilesInParallel(svgFiles, processingFunction, options = {}) {
  const {
    concurrency = calculateOptimalConcurrency(svgFiles.length),
    verbose = false,
    progressMessage = 'Processing files in parallel'
  } = options;
  
  if (!svgFiles || svgFiles.length === 0) {
    return [];
  }
  
  if (typeof processingFunction !== 'function') {
    throw new Error('Processing function is required');
  }
  
  // Create concurrency limiter
  const limit = pLimit(concurrency);
  
  const spinner = verbose ? ora(`${progressMessage} (${concurrency} workers)`).start() : null;
  
  let completed = 0;
  const total = svgFiles.length;
  
  try {
    // Process files with concurrency control
    const results = await Promise.all(
      svgFiles.map((file, index) => 
        limit(async () => {
          try {
            const result = await processingFunction(file, index);
            completed++;
            
            if (spinner) {
              spinner.text = `${progressMessage} (${completed}/${total} completed, ${concurrency} workers)`;
            }
            
            return { success: true, file, result, index };
          } catch (error) {
            completed++;
            
            if (spinner) {
              spinner.text = `${progressMessage} (${completed}/${total} completed, ${concurrency} workers)`;
            }
            
            return { success: false, file, error: error.message, index };
          }
        })
      )
    );
    
    const successCount = results.filter(r => r.success).length;
    const failureCount = results.filter(r => !r.success).length;
    
    if (spinner) {
      if (failureCount === 0) {
        spinner.succeed(`✅ Processed ${successCount} files successfully (${concurrency} workers)`);
      } else {
        spinner.warn(`⚠️ Processed ${successCount} files, ${failureCount} failed (${concurrency} workers)`);
      }
    }
    
    return results;
    
  } catch (error) {
    if (spinner) {
      spinner.fail(`❌ Parallel processing failed: ${error.message}`);
    }
    throw error;
  }
}

/**
 * Process files in batches with progress tracking
 * @param {string[]} svgFiles - Array of SVG file paths
 * @param {Function} batchProcessor - Function to process each batch
 * @param {Object} options - Processing options
 * @returns {Promise<Array>} Array of batch results
 */
export async function processBatches(svgFiles, batchProcessor, options = {}) {
  const {
    batchSize = calculateOptimalConcurrency(svgFiles.length),
    verbose = false,
    progressMessage = 'Processing batches'
  } = options;
  
  const batches = chunkArray(svgFiles, batchSize);
  const spinner = verbose ? ora(`${progressMessage} (${batches.length} batches)`).start() : null;
  
  const results = [];
  
  try {
    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];
      
      if (spinner) {
        spinner.text = `${progressMessage} (batch ${i + 1}/${batches.length}, ${batch.length} files)`;
      }
      
      const batchResult = await batchProcessor(batch, i);
      results.push(batchResult);
    }
    
    if (spinner) {
      spinner.succeed(`✅ Processed ${batches.length} batches successfully`);
    }
    
    return results;
    
  } catch (error) {
    if (spinner) {
      spinner.fail(`❌ Batch processing failed: ${error.message}`);
    }
    throw error;
  }
}

/**
 * Monitor system resources during processing
 * @returns {Object} System resource information
 */
export function getSystemResourceInfo() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;
  const memoryUsagePercent = (usedMemory / totalMemory) * 100;
  
  return {
    cpuCount: os.cpus().length,
    totalMemoryMB: Math.round(totalMemory / 1024 / 1024),
    freeMemoryMB: Math.round(freeMemory / 1024 / 1024),
    usedMemoryMB: Math.round(usedMemory / 1024 / 1024),
    memoryUsagePercent: Math.round(memoryUsagePercent),
    platform: os.platform(),
    arch: os.arch()
  };
}

/**
 * Log performance metrics
 * @param {number} startTime - Processing start time
 * @param {number} fileCount - Number of files processed
 * @param {number} concurrency - Concurrency level used
 * @param {boolean} verbose - Whether to show detailed metrics
 */
export function logPerformanceMetrics(startTime, fileCount, concurrency, verbose = false) {
  const duration = Date.now() - startTime;
  const throughput = fileCount / (duration / 1000);
  
  if (verbose) {
    const resources = getSystemResourceInfo();
    
    console.log(chalk.cyan('\n📊 Performance Metrics:'));
    console.log(chalk.gray(`   Duration: ${duration}ms`));
    console.log(chalk.gray(`   Files processed: ${fileCount}`));
    console.log(chalk.gray(`   Throughput: ${throughput.toFixed(1)} files/second`));
    console.log(chalk.gray(`   Concurrency: ${concurrency} workers`));
    console.log(chalk.gray(`   CPU cores: ${resources.cpuCount}`));
    console.log(chalk.gray(`   Memory usage: ${resources.memoryUsagePercent}% (${resources.usedMemoryMB}MB/${resources.totalMemoryMB}MB)`));
  }
  
  return {
    duration,
    fileCount,
    throughput,
    concurrency
  };
}

/**
 * Smart retry logic for failed processing
 * @param {Function} operation - Operation to retry
 * @param {number} maxRetries - Maximum number of retries
 * @param {number} baseDelay - Base delay between retries in ms
 * @returns {Promise} Operation result
 */
export async function retryOperation(operation, maxRetries = 3, baseDelay = 100) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      
      if (attempt === maxRetries) {
        break;
      }
      
      // Exponential backoff
      const delay = baseDelay * Math.pow(2, attempt - 1);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw lastError;
}