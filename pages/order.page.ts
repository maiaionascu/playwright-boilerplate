import { Locator, Page } from '@playwright/test';
import { test, expect } from '../base';

export class OrderPage {
  page: Page;
  firstName: Locator;
  lastName: Locator;
  postalCode: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
  }

  async placeOrder(first: string, last: string, postal: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(postal);
  }
}
