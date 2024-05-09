const NavigationActions = require('../actions/navigationactions');
const InputActions = require('../actions/inputactions');
const HomePageVerifyQuestions = require('../questions/homepagequestions')


exports.HomePageVerifyTask = class HomePageVerifyTask {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.navigationActions = new NavigationActions(page);
        this.inputActions = new InputActions(page);
        this.homepageQuestions = new HomePageVerifyQuestions(page);
    }

    async VerifyHomePage() {
        await this.navigationActions.goto();
        await this.homepageQuestions.verifyComponentsVisibility();
    }
}
