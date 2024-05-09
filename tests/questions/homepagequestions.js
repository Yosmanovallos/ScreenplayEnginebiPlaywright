const qaTestData = require('../actors/qa.json');
const prodTestData = require('../actors/prod.json');
const { test, expect } = require('@playwright/test')


class HomePageVerifyQuestions {
    /**
    * 
    * @param {import ('@playwright/test').Page} page 
    */
    constructor(page){
       // Init page object
        this.page = page;
        // Logos, textos y botones principales
        this.logoenginebi = page.getByRole('link', { name: 'EngineBI_Logo_Final-main' });
        this.stepprices = page.locator('enroller-progress');
        this.stepbasicinformation = page.locator('enroller-progress');
        this.stepcompanyinformation = page.locator('enroller-progress');
        this.steppaymentmethod = page.locator('enroller-progress');
        this.stepconfirmation = page.locator('enroller-progress');
        this.testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;
         // Links en el header
        this.linkHome = page.locator('wp-header').getByRole('link', { name: 'Home' });
        this.linkBlog = page.locator('wp-header').getByRole('link', { name: 'Blog' });
        this.linkPricing = page.getByRole('link', { name: 'Pricing ▾' });
        this.linkContact = page.locator('wp-header').getByRole('link', { name: 'Contact' });
         // Verificaciones de productos específicos y sus detalles
         this.productSelectionTrial = page.locator('product-selection div').filter({ hasText: '30 Day Free TrialAgency' }).nth(2);
         this.productSelectionMonthly = page.locator('product-selection div').filter({ hasText: 'MonthlyAgency Specific' }).nth(2);
         this.productSelectionAnnual = page.locator('product-selection div').filter({ hasText: 'AnnualAgency Specific' }).nth(2);
         this.productSelectionPlatinum = page.locator('product-selection div').filter({ hasText: 'Engine PlatinumMonthly' }).nth(2);
         this.startNowButton = page.getByRole('button', { name: 'START NOW' });
         this.buttonMonthly = page.locator('nz-card-meta').filter({ hasText: 'MonthlyAgency Specific' }).getByRole('button');
         this.buttonAnnual = page.locator('nz-card-meta').filter({ hasText: 'AnnualAgency Specific' }).getByRole('button');
         this.buttonPlatinum = page.locator('nz-card-meta').filter({ hasText: 'Engine PlatinumMonthly' }).getByRole('button');
   }
   async verifyComponentsVisibility() {
    // Verificaciones de visibilidad de logos, textos y botones principales
    await this.page.waitForTimeout(3000)
    await expect(this.logoenginebi).toBeVisible
    await expect(this.stepprices).toContainText('1Prices')
    await expect(this.stepbasicinformation).toContainText('2Basic Information')
    await expect(this.stepcompanyinformation).toContainText('3Company Information')
    await expect(this.steppaymentmethod).toContainText('4Payment Method');
    await expect(this.stepconfirmation).toContainText('5Confirmation');
    // Verificaciones de visibilidad de links en el header
    await expect(this.linkHome).toBeVisible();
    await expect(this.linkBlog).toBeVisible();
    await expect(this.linkPricing).toBeVisible();
    await expect(this.linkContact).toBeVisible();
    // Verificaciones de productos específicos y sus detalles
    await expect(this.productSelectionTrial).toBeVisible();
    await expect(this.productSelectionMonthly).toBeVisible();
    await expect(this.productSelectionAnnual).toBeVisible();
    await expect(this.productSelectionPlatinum).toBeVisible();
    await expect(this.startNowButton).toBeVisible();
    await expect(this.buttonMonthly).toBeVisible();
    await expect(this.buttonAnnual).toBeVisible();
    await expect(this.buttonPlatinum).toBeVisible();
}
}
module.exports = HomePageVerifyQuestions;