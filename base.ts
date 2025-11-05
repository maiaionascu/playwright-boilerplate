import { test as baseTest } from '@playwright/test'; // give alias for test from playwright so the test can become fixture
import { LoginPage } from './pages/login.page';
import { OrderPage } from './pages/order.page';

type MyFixtures = {
  loginPage: LoginPage;
  orderPage: OrderPage;
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  orderPage: async ({ page }, use) => {
    await use(new OrderPage(page));
  },
});

export { expect } from '@playwright/test';
