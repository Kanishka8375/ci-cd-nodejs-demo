// app.test.js
const request = require('supertest');
const app = require('./app');

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
