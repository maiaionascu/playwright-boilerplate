import { request, expect } from '@playwright/test';

const baseUrl = 'https://api.practicesoftwaretesting.com';

export const getJwtToken = async (
  request,
  psw: string,
  email: string,
): string => {
  const response = await request.post(`${baseUrl}/users/login`, {
    data: {
      password: 'SuperSecure@123',
      email: 'aaajohn@doe.example',
    },
  });

  const loginResponseBody = await response.json();
  console.log(loginResponseBody);
  expect(response.status()).toBe(200);
  return loginResponseBody.access_token;
};
