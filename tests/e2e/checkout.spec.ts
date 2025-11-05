import { test, expect } from '../../base';

const baseUrl = `${process.env.BASE_URL}`;

test.describe('User authentication', () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto(`${baseUrl}`);
    await loginPage.doLogin();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
  });

  test('place order', async ({ page }) => {
    //order actions add to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(
      page.locator('[data-test="shopping-cart-link"]'),
    ).toBeVisible();
    //order actions remove from cart
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(
      page.locator('[data-test="shopping-cart-link"]'),
    ).toBeVisible();
  });
});
