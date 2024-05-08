const NavigationActions = require('../actions/navigationactions');
const InputActions = require('../actions/inputactions');


exports.SubscribeTask = class SubscribeTask {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.navigationActions = new NavigationActions(page);
        this.inputActions = new InputActions(page);
    }

    async execute() {
        await this.navigationActions.goToSubscriptionPage();
        await this.navigationActions.clickStartNowButton();
        
        await this.inputActions.fillFirstName();
        await this.inputActions.fillLastName();
        await this.inputActions.fillEmailAddress();
        await this.inputActions.fillBusinessPhoneNumber();
        
        await this.navigationActions.clickNextButton();
    }
}
