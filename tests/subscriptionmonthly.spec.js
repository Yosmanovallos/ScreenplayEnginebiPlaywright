require('dotenv').config();
const { test } = require('@playwright/test');
const { SubscribeTask } = require('./tasks/subscriptionstask');


test.describe('Subscription Page Tests', () => {
    test('User can subscribe to a basic plan', async ({ page }) => {
        const subscribeTask = new SubscribeTask(page);

        // Ejecutar la tarea de suscripción completa
        await subscribeTask.execute();

        // Aquí puedes añadir aserciones adicionales para verificar el resultado de la suscripción
        // Por ejemplo, comprobar que se ha llegado a una página de confirmación, etc.
    });
});