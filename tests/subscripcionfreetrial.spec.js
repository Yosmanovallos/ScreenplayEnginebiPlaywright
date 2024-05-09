require('dotenv').config();
const { test } = require('@playwright/test');
const { SubscribeTask } = require('./tasks/subscriptionstask');
const { MailSlurp } = require('mailslurp-client');

const apiKey = process.env.API_KEY;
const mailslurp = new MailSlurp({ apiKey });

test.describe('Subscription Page Tests', () => {
    test('Free trial Subscriptions', async ({ page }) => {
        
        const subscribeTask = new SubscribeTask(page);
        await subscribeTask.SubscrtiptionFreeTrialTask();
    });

    test('Monthly subscriptions', async ({ page }) => {
        const subscribeTask = new SubscribeTask(page);
        await subscribeTask.SubscrtiptionMonthlyTask();
    });

    test('Annual subscriptions', async ({ page }) => {
        const subscribeTask = new SubscribeTask(page);
        await subscribeTask.SubscrtiptionAnnualTask();
    });

    test('Platinum subscriptions', async ({ page }) => {
        const subscribeTask = new SubscribeTask(page);
        await subscribeTask.SubscrtiptionPlatinumTask();
    });

});