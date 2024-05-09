const { expect } = require('@playwright/test');
const qaTestData = require('../actors/prod.json');
const prodTestData = require('../actors/qa.json')

class NavigationActions {

     /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
     constructor(page){
        // Init page object
        this.page = page;
        this.startnowbutton = page.getByRole('button', { name: 'START NOW' });
        this.nextbutton = page.getByRole('button', { name: 'Next' });
        this.detailsfreetrial = page.locator('nz-card-meta').filter({ hasText: '30 Day Free TrialAgency' }).locator('a');
        this.detailsmonthly = page.locator('nz-card-meta').filter({ hasText: 'MonthlyAgency Specific' }).locator('a');
        this.detailsannual = page.locator('nz-card-meta').filter({ hasText: 'AnnualAgency Specific' }).locator('a')
        this.detailsplatinium = page.locator('div:nth-child(2) > .PriceColumn-priceContainer > div > div');
        this.backtopricesbutton = page.getByRole('button', { name: 'Back to Prices' });
        this.testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;

    }

    async goto() {
        await this.page.goto(process.env.URL);
    }

    async clickStartNowButton() {
        await expect(this.startnowbutton).toBeVisible();
        await this.startnowbutton.click();
    }

    async clickNextButton() {
        await expect(this.nextbutton).toBeVisible();
        await this.nextbutton.click();
    }

    async ClickBacktoPricesButton() {
        await expect(this.backtopricesbutton).toBeVisible();
        await this.backtopricesbutton.click();
    }

    // Details

    async DetailsFreetrial() {
        await expect(this.detailsfreetrial).toBeVisible();
        await this.detailsfreetrial.click();
        await expect(this.page).toHaveURL('https://app-qa.enginebi.net/subscription/1-30_day_free_trial')
    }

    async DeteilsMonthly() {
        await expect(this.detailsmonthly).toBeVisible();
        await this.detailsmonthly.click();
        await expect(this.page).toHaveURL('https://app-qa.enginebi.net/subscription/1-monthly')
    }

    async DetailsAnnual() {
        await expect(this.detailsannual).toBeVisible();
        await this.detailsannual.click();
        await expect(this.page).toHaveURL('https://app-qa.enginebi.net/subscription/1-annual')
    }

    async DetailsPlatinium() {
        await expect(this.detailsplatinium).toBeVisible();
        await this.detailsplatinium.click();
        await expect(this.page).toHaveURL('https://app-qa.enginebi.net/subscription/1-engine_platinum')
    }



}
module.exports = NavigationActions;