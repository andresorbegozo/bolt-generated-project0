import express from 'express';
    import { fileURLToPath } from 'url';
    import { dirname, join } from 'path';
    import { DataScheduler } from './utils/scheduler.js';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const app = express();
    const scheduler = new DataScheduler();

    // Start the scheduler when the server starts
    scheduler.startScheduler();

    // Serve static files from the dist directory
    app.use(express.static(join(__dirname, '../dist')));

    // API endpoints for monitoring
    app.get('/api/scheduler/status', (req, res) => {
      res.json(scheduler.getStatus());
    });

    app.post('/api/scheduler/stop', (req, res) => {
      scheduler.stop();
      res.json({ message: 'Scheduler stopped' });
    });

    app.post('/api/scheduler/start', (req, res) => {
      scheduler.startScheduler();
      res.json({ message: 'Scheduler started' });
    });

    // Handle client-side routing by serving index.html for all non-API routes
    app.get('*', (req, res) => {
      if (!req.path.startsWith('/api')) {
        res.sendFile(join(__dirname, '../dist/index.html'));
      }
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
