import app from '../src/server';
import supertest from 'supertest';
import db from '../src/database/models'

describe('GET /plans/all', () => {
  it("should respond with 200 status code", async () => {
    const response = await supertest(app)
    .get("/plans/all");

   expect(response.statusCode).toBe(200);
  })
})

describe('GET /features/all', () => {
  it("should respond with 200 status code", async () => {
    const response = await supertest(app)
    .get("/features/all");

   expect(response.statusCode).toBe(200);
  })
})

describe('GET /plan-features/all', () => {
  it("should respond with 200 status code", async () => {
    const response = await supertest(app)
    .get("/plan-features/all");

   expect(response.statusCode).toBe(200);
  })
})

afterAll(async () => {
  await db.sequelize.close()
})