import { test } from '@playwright/test';
import { getProductId } from '../../lib/get-product-id';

const baseUrl = 'https://api.practicesoftwaretesting.com';

test.describe('API Test Automation Suite', async () => {
  test('get product by id', async ({ request }) => {
    const response = await request.get(`${baseUrl}/products/${getProductId}}`);
  });
});
