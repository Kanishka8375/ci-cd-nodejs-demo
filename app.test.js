const request = require('supertest');
const app = require('./app'); // This imports your app.js

describe('Express App', () => {
  it('GET / should return 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('GET /users should return 200', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
  });
});
