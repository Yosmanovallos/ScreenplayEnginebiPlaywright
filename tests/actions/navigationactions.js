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
}
module.exports = NavigationActions;