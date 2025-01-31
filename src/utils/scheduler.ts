import cron from 'node-cron';
import { DataCollector } from './dataCollectors.js';
import { DataUpdater } from './dataUpdater.js';
import { DataVerifier } from './dataVerification.js';
import { Store } from '../types.js';

export class DataScheduler {
  private collector: DataCollector;
  private updater: DataUpdater;
  private cronJob: cron.ScheduledTask | null = null;
  private isRunning: boolean = false;
  private lastRun: Date | null = null;

  constructor() {
    this.collector = new DataCollector();
    this.updater = new DataUpdater();
  }

  startScheduler() {
    if (this.isRunning) {
      console.log('Scheduler is already running');
      return;
    }

    // Run every day at 3 AM
    this.cronJob = cron.schedule('0 3 * * *', () => {
      this.runCollection();
    });

    this.isRunning = true;
    console.log('Data collection scheduler started');

    // Run initial collection
    this.runCollection();
  }

  private async runCollection() {
    try {
      console.log('Starting scheduled data collection:', new Date().toISOString());

      // 1. Collect new data
      const companies = await this.collector.collectData();
      console.log(`Found ${companies.length} potential companies`);

      // 2. Verify and filter companies
      const validCompanies = await this.verifyCompanies(companies);
      console.log(`${validCompanies.length} companies passed verification`);

      // 3. Update data files
      if (validCompanies.length > 0) {
        await this.updater.updateData();
        console.log('Data files updated successfully');
      }

      this.lastRun = new Date();
      console.log('Data collection completed:', this.lastRun.toISOString());

    } catch (error) {
      console.error('Error during scheduled data collection:', error);
    }
  }

  private async verifyCompanies(companies: Store[]): Promise<Store[]> {
    const validCompanies: Store[] = [];

    for (const company of companies) {
      try {
        // Use static method from DataVerifier
        const isValid = await DataVerifier.verifyCompany(company);
        if (isValid) {
          validCompanies.push(company);
        }
      } catch (error) {
        console.error(`Error verifying company ${company.name}:`, error);
      }
    }

    return validCompanies;
  }

  stop() {
    if (this.cronJob) {
      this.cronJob.stop();
    }
    this.isRunning = false;
    console.log('Data collection scheduler stopped');
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      lastRun: this.lastRun?.toISOString() || null,
      nextRun: this.getNextRunTime()
    };
  }

  private getNextRunTime(): string | null {
    if (!this.isRunning) return null;
    
    const now = new Date();
    const nextRun = new Date(now);
    nextRun.setHours(3, 0, 0, 0);
    
    if (now >= nextRun) {
      nextRun.setDate(nextRun.getDate() + 1);
    }
    
    return nextRun.toISOString();
  }
}
