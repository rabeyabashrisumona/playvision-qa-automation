require('dotenv').config();
const { testData } = require('../testdata');

const { test, expect, request } = require('@playwright/test');

const BASE_URL = 'https://automationexercise.com/api';

test.describe('API Tests - AutomationExercise', () => {

  test('AT01 - GET all products returns 200 and list', async () => {
    const context = await request.newContext();
    const response = await context.get(`${BASE_URL}/productsList`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(body.products).toBeDefined();
    expect(body.products.length).toBeGreaterThan(0);
  });

  test('AT02 - GET all brands returns 200 and list', async () => {
    const context = await request.newContext();
    const response = await context.get(`${BASE_URL}/brandsList`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(body.brands).toBeDefined();
    expect(body.brands.length).toBeGreaterThan(0);
  });

  test('AT03 - POST search product returns matching results', async () => {
    const context = await request.newContext();
    const response = await context.post(`${BASE_URL}/searchProduct`, {
      form: { search_product: testData.searchTerm }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(body.products.length).toBeGreaterThan(0);
  });

  test('AT04 - POST search with no parameter returns 400', async () => {
    const context = await request.newContext();
    const response = await context.post(`${BASE_URL}/searchProduct`, {
      form: {}
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.responseCode).toBe(400);
  });

  test('AT05 - DELETE products list method not allowed returns 405', async () => {
    const context = await request.newContext();
    const response = await context.delete(`${BASE_URL}/productsList`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.responseCode).toBe(405);
  });

  test('AT06 - POST register user with valid data', async () => {
    const context = await request.newContext();
    const fakeEmail = `apitestuser_${Date.now()}@qa.com`;
    const response = await context.post(`${BASE_URL}/createAccount`, {
      form: {
        name: testData.apiUser.name,
        email: fakeEmail,
        password: testData.apiUser.password,
        title: testData.apiUser.title,
        birth_date: testData.apiUser.birthDate,
        birth_month: testData.apiUser.birthMonth,
        birth_year: testData.apiUser.birthYear,
        firstname: testData.apiUser.firstname,
        lastname: testData.apiUser.lastname,
        company: testData.apiUser.company,
        address1: testData.apiUser.address1,
        address2: testData.apiUser.address2,
        country: testData.apiUser.country,
        zipcode: testData.apiUser.zipcode,
        state: testData.apiUser.state,
        city: testData.apiUser.city,
        mobile_number: testData.apiUser.mobile,
}
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.responseCode).toBe(201);
    expect(body.message).toContain('User created');
  });

});