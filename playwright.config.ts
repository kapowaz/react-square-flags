import { defineConfig } from '@playwright/test';

export default defineConfig({
  snapshotDir: './src/test/playwright/snapshots',
  reporter: 'html',
  testDir: './src/test/playwright',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    trace: 'on-first-retry',
    viewport: { width: 1296, height: 1360 },
  },
  snapshotPathTemplate: '{testDir}/screenshots/{testFilePath}/{arg}{ext}',
});
