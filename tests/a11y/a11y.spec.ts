import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';

const baseUrl = `${process.env.BASE_URL}`;

test.describe('A11Y', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}`);
  });

  test('accesibility test', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules(['color-contrast', 'select-name'])
      .analyze(); // 4
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
