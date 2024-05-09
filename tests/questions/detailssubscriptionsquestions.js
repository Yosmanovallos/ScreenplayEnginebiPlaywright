const qaTestData = require('../actors/qa.json');
const prodTestData = require('../actors/prod.json');
const { test, expect } = require('@playwright/test');



class DetailsSubscriptionsQuestions {

    /**
    * 
    * @param {import ('@playwright/test').Page} page 
    */
    constructor(page){

        this.page = page;
       // details free trial verify components
         this.imgDayFreeTrial = page.getByRole('img', { name: 'Day Free Trial' });
         this.headingDayFreeTrial = page.getByRole('heading', { name: 'Day Free Trial' });
         this.planDetailsHeading = page.getByRole('heading', { name: 'PLAN DETAILS' });
         this.ecommerceProductDetail = page.locator('ecommerce-product-detail');
         this.ecommerceProductDetailExtendedTextfree = page.locator('ecommerce-product-detail');
         this.antCardCover = page.locator('.ant-card-cover');
         this.first30DayTrialAgency = page.locator('nz-card div').filter({ hasText: '30 Day Free TrialAgency' }).first();
        // details monthly verify components
        this.imgMonthly = page.getByRole('img', { name: 'Monthly' });
        this.headingMonthly = page.getByRole('heading', { name: 'Monthly' });
        this.ecommerceProductDetailExtendedTextMonthly = page.locator('ecommerce-product-detail');
        this.priceBoxMonthly = page.locator('ecommerce-price-box div').filter({ hasText: '$300 00 per month' }).first();
        this.cardImg = page.locator('nz-card').locator('role=img');
        this.cardMetaMonthly = page.locator('nz-card-meta');
        this.subscribeButton = page.locator('role=button[name="SUBSCRIBE"]');
         // details anual verify components
        this.imgAnnual = page.getByRole('img', { name: 'Annual' });
        this.headingAnnual = page.getByRole('heading', { name: 'Annual' });
        this.ecommerceProductDetailExtendedTextanual = page.locator('ecommerce-product-detail');
        this.priceBoxAnnual = page.locator('ecommerce-price-box div').filter({ hasText: '$3,000 00 paid up front( $250' }).first();
        this.antCardCover = page.locator('.ant-card-cover');
        this.firstAnnualAgencySpecific = page.locator('nz-card div').filter({ hasText: 'AnnualAgency Specific' }).first();
        this.subscribeButton = page.locator('role=button[name="SUBSCRIBE"]');
        this.priceWidgetAnnual = page.locator('ecommerce-price-widget');
        // details platinium
         this.imgEnginePlatinum = page.getByRole('img', { name: 'Engine Platinum' });
         this.headingEnginePlatinum = page.locator('role=heading[name="Engine Platinum"]');
         this.planDetailsHeading = page.locator('role=heading[name="PLAN DETAILS"]');
         this.ecommerceProductDetail = page.locator('ecommerce-product-detail');
         this.textAgencyLeadersCommitment = page.locator('text=All agency leaders will commit to the following: 1-year commitment to attend at least 10 of 12 meetings. Utilize EngineBI, our Business Planning & Financial Intelligence Software. Embrace EngineBI\'s role in running your agency efficiently. Build a Supportive Community. Foster a desire to create a larger organization.');
         this.bestDealPrice = page.locator('div').filter({ hasText: /^BEST DEAL \$4,860 00 paid up frontWITH A 12-MONTH COMMITMENT\( \$405 per month \)$/ }).first();
         this.priceBoxHover = page.locator('ecommerce-price-box:nth-child(2) > .price-box-hover');
         this.cardImg = page.locator('nz-card').locator('role=img');
         this.cardMetaplatinium = page.locator('nz-card-meta');
         this.priceWidgetplatinum = page.locator('ecommerce-price-widget');
         this.firstEnginePlatinumMonthly = page.locator('nz-card div').filter({ hasText: 'Engine PlatinumMonthly' }).first();
   }


   async DetailsFreetrialVerify() {
    await expect(this.imgDayFreeTrial).toBeVisible();
    await expect(this.headingDayFreeTrial).toBeVisible();
    await expect(this.ecommerceProductDetail).toContainText('Agency Specific Business Planning and Financial Intelligence Software No credit card required');
    await expect(this.planDetailsHeading).toBeVisible();
    await expect(this.ecommerceProductDetailExtendedTextfree).toContainText('Free for 30 days No credit card necessary Expert support included Valuable insights available in the first week How-to videos to guide you through data transfer Free access to our strategic approach eBook');
    await expect(this.antCardCover).toBeVisible();
    await expect(this.first30DayTrialAgency).toBeVisible();
   }

   async DetailsMonthlyVerify() {
    await expect(this.imgMonthly).toBeVisible();
    await expect(this.headingMonthly).toBeVisible();
    await expect(this.ecommerceProductDetail).toContainText('Agency Specific Business Planning and Financial Intelligence Software');
    await expect(this.planDetailsHeading).toBeVisible();
    await expect(this.ecommerceProductDetailExtendedTextMonthly).toContainText('Free expert support including onboarding from finance & accounting pros How-to videos to guide you through data transfer Free access to our strategic approach eBook Cancel any time, without loosing access your data First access to all new features');
    await expect(this.priceBoxMonthly).toBeVisible();
    await expect(this.cardImg).toBeVisible();
    await expect(this.cardMetaMonthly).toContainText('Agency Specific Business Planning and Financial Intelligence Software');
    await expect(this.subscribeButton).toBeVisible();
   }

   async DetailsAnualVerify() {
    await expect(this.imgAnnual).toBeVisible();
    await expect(this.headingAnnual).toBeVisible();
    await expect(this.ecommerceProductDetail).toContainText('Agency Specific Business Planning and Financial Intelligence Software');
    await expect(this.ecommerceProductDetailExtendedTextanual).toContainText('16% discount paying upfront Improved visibility to your monthly & quarterly trends Free expert support every step of the way from Finance & Accounting experts How-to videos to make data transfer easier Free access to our strategic approach eBook');
    await expect(this.priceBoxAnnual).toBeVisible();
    await expect(this.antCardCover).toBeVisible();
    await expect(this.firstAnnualAgencySpecific).toBeVisible();
    await expect(this.subscribeButton).toBeVisible();
    await expect(this.priceWidgetAnnual).toContainText('$3,000 00 paid up front( $250 per month )');
    await expect(this.subscribeButton).toBeVisible();
   }

   async DetailsPlatiniumVerify() { 
    await expect(this.imgEnginePlatinum).toBeVisible();
    await expect(this.headingEnginePlatinum).toBeVisible();
    await expect(this.ecommerceProductDetail).toContainText('Monthly Mastermind Meetings + Agency Specific Business Planning and Financial Intelligence Software');
    await expect(this.planDetailsHeading).toBeVisible();
    await expect(this.textAgencyLeadersCommitment).toBeVisible();
    await expect(this.bestDealPrice).toBeVisible();
    await expect(this.priceBoxHover).toBeVisible();
    await expect(this.cardImg).toBeVisible();
    await expect(this.cardMetaplatinium).toContainText('Monthly Mastermind Meetings + Agency Specific Business Planning and Financial Intelligence Software');
    await expect(this.priceWidgetplatinum).toContainText('$4,860 00 paid up front( $405 per month )');
    await expect(this.firstEnginePlatinumMonthly).toBeVisible();
   }
}

module.exports = DetailsSubscriptionsQuestions;