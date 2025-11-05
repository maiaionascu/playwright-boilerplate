import { test, page, expect } from '@playwright/test';
import { validateSchemaZod } from 'playwright-schema-validator';
import { getProductSchema } from '../../data/resp/get-product-schema.js';

const baseUrl = 'https://api.practicesoftwaretesting.com';

test.describe('API Test Automation Suite', async () => {
  // test('get api products', async ({ request }) => {
  //   const response = await request.get(`${baseUrl}/products`);

  //   expect(await response.status()).toBe(200);
  //   const body = await response.json();
  //   console.log(body);
  //   expect(body.data.length).toBeGreaterThanOrEqual(1);
  //   expect(typeof body.total).toBe('number');
  //   expect(body.last_page).toBe(6);
  // });

  //with schema
  test('get api products', async ({ request }) => {
    const response = await request.get(`${baseUrl}/products`);

    const respBody = await response.json();
    expect(await response.status()).toBe(200);

    await validateSchemaZod({ page }, respBody, getProductSchema);
  });
});
