const NavigationActions = require('../actions/navigationactions');
const InputActions = require('../actions/inputactions');
const ListActions = require('../actions/listactions');


exports.SubscribeTask = class SubscribeTask {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.navigationActions = new NavigationActions(page);
        this.inputActions = new InputActions(page);
        this.listActions = new ListActions(page)
    }

    async SubscrtiptionFreeTrialTask() {
        await this.navigationActions.goto();
        await this.navigationActions.clickStartNowButton();
        await this.inputActions.fillFirstName();
        await this.inputActions.fillLastName();
        await this.inputActions.fillEmailAddress();
        await this.inputActions.fillBusinessPhoneNumber(); 
        await this.navigationActions.clickNextButton();
        await this.listActions.CompanyInformationFreetrial();
        
    }

    async SubscrtiptionMonthlyTask() {
        await this.navigationActions.goto();
        await this.navigationActions.clickSubscribeNowButtonMonthly();
        await this.inputActions.fillFirstName();
        await this.inputActions.fillLastName();
        await this.inputActions.fillEmailAddress();
        await this.inputActions.fillBusinessPhoneNumber(); 
        await this.navigationActions.clickNextButton();
        await this.listActions.CompanyInformationSubscriptions();
    }

    async SubscrtiptionAnnualTask() {
        await this.navigationActions.goto();
        await this.navigationActions.clickSubscribeNowButtonAnnual();
        await this.inputActions.fillFirstName();
        await this.inputActions.fillLastName();
        await this.inputActions.fillEmailAddress();
        await this.inputActions.fillBusinessPhoneNumber(); 
        await this.navigationActions.clickNextButton();
        await this.listActions.CompanyInformationSubscriptions();
    }

    async SubscrtiptionPlatinumTask() {
        await this.navigationActions.goto();
        await this.navigationActions.clickSubscribeNowButtonPlaytinum();
        await this.inputActions.fillFirstName();
        await this.inputActions.fillLastName();
        await this.inputActions.fillEmailAddress();
        await this.inputActions.fillBusinessPhoneNumber(); 
        await this.navigationActions.clickNextButton();
        await this.listActions.CompanyInformationSubscriptions();
    }
}
