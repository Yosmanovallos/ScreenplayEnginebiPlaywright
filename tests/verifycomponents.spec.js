require('dotenv').config();
const { test } = require('@playwright/test');
const { HomePageVerifyTask } = require('./tasks/homepageverifytask')

test.describe('Verify components HomePage', () => {
    test('User can subscribe to a basic plan', async ({ page }) => {
        const homepageQuestions = new HomePageVerifyTask(page);

        // Ejecutar la tarea de suscripción completa
        await homepageQuestions.VerifyHomePage();

        // Aquí puedes añadir aserciones adicionales para verificar el resultado de la suscripción
        // Por ejemplo, comprobar que se ha llegado a una página de confirmación, etc.
    });
});