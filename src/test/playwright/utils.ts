import { expect, Page } from '@playwright/test';

const STORYBOOK_HOST = 'http://localhost:6006';
const STORYBOOK_CANVAS_URL = '/iframe.html?args=&globals=&viewMode=story&id=';

export const expectScreenshot = async ({
  page,
  storyId,
  screenshotName,
}: {
  page: Page;
  storyId: string;
  screenshotName: string;
}) => {
  await page.goto(`${STORYBOOK_HOST}${STORYBOOK_CANVAS_URL}${storyId}`);
  await page.waitForSelector('#story-content');
  await expect(page).toHaveScreenshot(screenshotName);
};
