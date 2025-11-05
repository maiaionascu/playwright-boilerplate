import { test, page, expect } from '@playwright/test';
import { validateSchemaZod } from 'playwright-schema-validator';
import { getProductSchema } from '../../data/resp/get-product-schema.js';

const baseUrl = 'https://api.practicesoftwaretesting.com';

test.describe('API Test Automation Suite', async () => {
  //with schema
  test('get api products', async ({ request }) => {
    const response = await request.get(`${baseUrl}/products`);

    const respBody = await response.json();
    expect(await response.status()).toBe(200);
    expect(respBody.data.length).toBeGreaterThanOrEqual(1);
    expect(typeof respBody.total).toBe('number');

    await validateSchemaZod({ page }, respBody, getProductSchema);
  });
});
