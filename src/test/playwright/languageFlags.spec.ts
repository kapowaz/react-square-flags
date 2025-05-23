import { test } from '@playwright/test';

import { expectScreenshot } from './utils';

test('All SVG component language flags should match the saved snapshot', async ({
  page,
}) => {
  await expectScreenshot({
    page,
    storyId: 'testing--languages-svg',
    screenshotName: 'language-flags.png',
  });
});

test('All React component language flags should match the saved snapshot', async ({
  page,
}) => {
  await expectScreenshot({
    page,
    storyId: 'testing--languages-react',
    screenshotName: 'language-flags.png',
  });
});
