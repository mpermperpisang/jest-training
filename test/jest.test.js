const request = require('supertest');

const baseURL = 'https://reqres.in/api';

describe('Hit https://reqres.in/', function() {
  it('GET example', async () => {
    await request(baseURL).get('/users?page=2').expect(200);
  });

  it('POST example', async () => {
    const response = await request(baseURL)
      .post('/users')
      .send({
          "name": "morpheus",
          "job": "leader"
      });

		expect(response.statusCode).toBe(201);
  });

  it('PUT example', async () => {
    const response = await request(baseURL)
      .put('/users/2')
      .send({
        "name": "morpheus",
        "job": "zion resident"
      });

		expect(response.statusCode).toBe(200);
  });

  it('PATCH example', async () => {
    const response = await request(baseURL)
      .patch('/users/2')
      .send({
        "name": "morpheus",
        "job": "zion resident"
      });

		expect(response.statusCode).toBe(200);
  });

  it('DELETE example', async () => {
    const response = await request(baseURL)
      .del('/users/2');

		expect(response.statusCode).toBe(204);
  });
});
