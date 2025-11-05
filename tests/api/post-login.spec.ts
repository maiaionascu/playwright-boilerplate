import { test } from '@playwright/test';
import { getJwtToken } from '../../lib/get-api-token';

const baseUrl = 'https://api.practicesoftwaretesting.com';

let jwtToken = '';

test.describe('API Test Automation Suite', async () => {
  test('POST login', async ({ request }) => {
    jwtToken = await getJwtToken(
      request,
      'SuperSecure@123',
      'aaajohn@doe.example',
    );
    console.log(jwtToken);
  });
});
