import { DataCollector } from './dataCollectors.js';
import { DataUpdater } from './dataUpdater.js';

async function runCollection() {
  console.log('Starting data collection...');
  
  try {
    const collector = new DataCollector();
    const updater = new DataUpdater();
    
    // Run collection with retries
    let retries = 3;
    let success = false;
    
    while (retries > 0 && !success) {
      try {
        await updater.updateData();
        success = true;
        console.log('Data collection completed successfully');
      } catch (error) {
        retries--;
        if (retries > 0) {
          console.log(`Collection failed, retrying... (${retries} attempts remaining)`);
          await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second between retries
        } else {
          throw error;
        }
      }
    }
  } catch (error) {
    console.error('Fatal error during data collection:', error);
    process.exit(1); // Exit with error code
  }
}

// Handle process termination gracefully
process.on('SIGINT', () => {
  console.log('Collection interrupted, cleaning up...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Collection terminated, cleaning up...');
  process.exit(0);
});

// Handle uncaught errors
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (error) => {
  console.error('Unhandled rejection:', error);
  process.exit(1);
});

runCollection().catch((error) => {
  console.error('Collection failed:', error);
  process.exit(1);
});
