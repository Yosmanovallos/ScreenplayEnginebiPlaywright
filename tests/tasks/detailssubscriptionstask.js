const NavigationActions = require('../actions/navigationactions');
const InputActions = require('../actions/inputactions');
const DetailsSubscriptionsQuestions = require('../questions/detailssubscriptionsquestions')



exports.DetailsSubscriptionsTask = class DetailsSubscriptionsTask {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.navigationActions = new NavigationActions(page);
        this.inputActions = new InputActions(page);
        this.detailssubscriptionsQuestions = new DetailsSubscriptionsQuestions(page);
    }

    async DetailsVerifications() {
        await this.navigationActions.goto();
        await this.navigationActions.DetailsFreetrial();
        await this.detailssubscriptionsQuestions.DetailsFreetrialVerify();
        await this.navigationActions.ClickBacktoPricesButton();
        await this.navigationActions.DeteilsMonthly();
        await this.detailssubscriptionsQuestions.DetailsMonthlyVerify();
        await this.navigationActions.ClickBacktoPricesButton();   
        await this.navigationActions.DetailsAnnual();
        await this.detailssubscriptionsQuestions.DetailsAnualVerify();
        await this.navigationActions.ClickBacktoPricesButton();    
        await this.navigationActions.DetailsPlatinium();
        await this.detailssubscriptionsQuestions.DetailsPlatiniumVerify();
    }
}