import { test, expect } from '../../base';

//const baseUrl = 'https://www.saucedemo.com/';
const baseUrl = `${process.env.BASE_URL}`;

test.describe('User authentication', () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto(`${baseUrl}`);
    await loginPage.doLogin();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
  });

  test('logout test', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });
});
