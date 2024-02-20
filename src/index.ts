import 'dotenv/config';
import { Logger } from './lib/logger';

(async () => {
  // Main application logic
})()
  .catch((e) => {
    Logger.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Do some cleanup (e.g. close database connections, etc.)
  });
