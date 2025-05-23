import { test } from '@playwright/test';

import { expectScreenshot } from './utils';

test('All SVG component other flags should match the saved snapshot', async ({
  page,
}) => {
  await expectScreenshot({
    page,
    storyId: 'testing--others-svg',
    screenshotName: 'other-flags.png',
  });
});

test('All React component other flags should match the saved snapshot', async ({
  page,
}) => {
  await expectScreenshot({
    page,
    storyId: 'testing--others-react',
    screenshotName: 'other-flags.png',
  });
});
