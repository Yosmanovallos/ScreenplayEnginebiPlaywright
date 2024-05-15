require('dotenv').config();
const { test } = require('@playwright/test');
const { HomePageVerifyTask } = require('./tasks/homepageverifytask')

test.describe('Verify components HomePage', () => {
    test('Verify all components', async ({ page }) => {
        const homepageQuestions = new HomePageVerifyTask(page);

        // Ejecutar la tarea de suscripción completa
        await homepageQuestions.VerifyHomePage();
    });
});