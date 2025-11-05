import { test, expect } from '../../base';
import { OrderPage } from '../../pages/order.page';
const { faker } = require('@faker-js/faker');

const baseUrl = `${process.env.BASE_URL}`;

test.describe('User authentication', () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto(`${baseUrl}`);
    await loginPage.doLogin();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
  });
  test('place order', async ({ page, orderPage }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    await orderPage.placeOrder(firstName, lastName, '222');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
  });
});
