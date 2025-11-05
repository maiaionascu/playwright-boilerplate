import { Locator, Page } from '@playwright/test';
import { test, expect } from '../base';
import 'dotenv/config';

export class LoginPage {
  page: Page;
  user: Locator;
  password: Locator;
  submitBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.user = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.submitBtn = page.locator('[data-test="login-button"]');
  }

  async doLogin(user = 'standard_user', passw = `${process.env.PSW}`) {
    await this.user.fill(user);
    await this.password.fill(passw);
    await this.submitBtn.click();
  }
}
