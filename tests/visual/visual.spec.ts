import { test, expect } from '@playwright/test';

const baseUrl = `${process.env.BASE_URL}`;

test.describe('Visual', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}`);
  });

  test('visual  test on homepage', async ({ page }) => {
    expect(await page.screenshot()).toMatchSnapshot('snapshot.png');
  });
});
