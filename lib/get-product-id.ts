import { request, expect } from '@playwright/test';

const baseUrl = 'https://api.practicesoftwaretesting.com';

export const getProductId = async (request): string => {
  const response = await request.get(`${baseUrl}/products`);

  const productResponse = await response.json();
  console.log(productResponse);
  expect(productResponse.data.length).toBeGreaterThanOrEqual(1);
  expect(typeof productResponse.total).toBe('number');
  return productResponse.data.first().id;
};
