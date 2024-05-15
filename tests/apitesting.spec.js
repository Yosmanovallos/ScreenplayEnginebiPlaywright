import { test, expect } from '@playwright/test';
require('dotenv').config();
import fetch from 'node-fetch';

test.describe('API Testing', () => {

  const baseurl = process.env.API_TEST

  test('should return the list of countries with correct data structure', async () => {

    const response = await fetch(`${baseurl}/countries`, {
      method: 'GET',
      headers: {
        'Origin': 'https://app-qa.enginebi.net',
      }
    });

    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toContain('application/json');
    const data = await response.json();
    expect(Array.isArray(data)).toBeTruthy();
    expect(data[0]).toHaveProperty('name');
    expect(data[0].name).toBe('United States');
    console.log('Response data:', data);
    console.log('Response status:', response.status);
  });

  test('validate mail API', async () => {   
    const response = await fetch(`${baseurl}/enroll/validatemail/sdfsfdsfsdfad@yopmail.com`, {
      method: 'GET',
      headers: {
        'Origin': 'https://app-qa.enginebi.net', // Asegúrate que este origen es aceptado por el servidor
      }
    });
    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toContain('application/json');
    const data = await response.json();
    expect(data).toBe(true);
    console.log('Response data:', data);
    console.log('Response status:', response.status);
  });
  
  test('validate Create API', async () => {   
    console.log(`Using API Token: ${process.env.API_KEY}`);  // Debug para verificar el token

    const payload = {
      name: "John",
      lastName: "Doe",
      phone: "+1234567893",
      email: "emailAfsdfsdfdsf@yopmail.com",
      customerName: "dfghfdgdgfdg",
      fiscalMonth: "August",
      employees: 1,
      industryTypeId: 1,
      serviceIds: [],
      city: { name: "Medellin", stateId: 1 },
      currencyId: "USD",
      accountingSoftware: "FreshBooks",
      priceId: "price_1Npc1EE5jkUcCAnTbkDoXHEj",
      trial: true
    };

    const headers = {
      'Content-Type': 'application/json',
      'Origin': 'https://app-qa.enginebi.net',
      'Authorization': `Bearer ${process.env.API_TOKEN}`
    };

    // Debug para verificar los encabezados
    console.log(headers);

    // Hacer la solicitud POST
    const response = await fetch(`${baseurl}/enroll/create`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });

    expect(response.status).toBe(401); // 201 Created
    console.log(`Response Status: ${response.status}`);
});

});