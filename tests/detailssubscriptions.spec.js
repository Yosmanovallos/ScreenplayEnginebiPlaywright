require('dotenv').config();
const { test } = require('@playwright/test');
const { DetailsSubscriptionsTask } = require('./tasks/detailssubscriptionstask')

test.describe('Details subscriptions verify', () => {
    test('Details subscriptions verify', async ({ page }) => {
        const detailsQuestions = new DetailsSubscriptionsTask(page);

        // Ejecutar la tarea de suscripción completa
        await detailsQuestions.DetailsVerifications();
        
    });
});