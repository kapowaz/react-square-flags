import { test } from '@playwright/test';

import { expectScreenshot } from './utils';

test('All SVG component country flags should match the saved snapshot', async ({
  page,
}) => {
  await expectScreenshot({
    page,
    storyId: 'testing--countries-svg',
    screenshotName: 'country-flags.png',
  });
});

test('All React component country flags should match the saved snapshot', async ({
  page,
}) => {
  await expectScreenshot({
    page,
    storyId: 'testing--countries-react',
    screenshotName: 'country-flags.png',
  });
});
