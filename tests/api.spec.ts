import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('GET a post', async({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/1`);

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body).toHaveProperty('title');
});

test('POST a new post', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/posts`, {
    data: {
      title: 'Practice API testing',
      body: 'Learning the request fixture',
      userId: 1,
    },
  });

  expect(response.status()).toBe(201);
  const body = await response.json();
  expect(body.title).toBe('Practice API testing');
  expect(body).toHaveProperty('id');
});

test('GET a post that does not exist', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/posts/99999`);

  expect(response.status()).toBe(404);
});