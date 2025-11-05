import { test, expect } from '@playwright/test';
import { getJwtToken } from '../../lib/get-api-token';

const baseUrl = 'https://api.practicesoftwaretesting.com';

let jwtToken = '';

test.describe('API Test Automation Suite', async () => {
  test.beforeAll(async ({ request }) => {
    jwtToken = await getJwtToken(
      request,
      'SuperSecure@123',
      'aaajohn@doe.example',
    );
    console.log(jwtToken);
  });

  test('test authenticated GET /me endpoint', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    expect(response.status()).toBe(200);
  });
});
