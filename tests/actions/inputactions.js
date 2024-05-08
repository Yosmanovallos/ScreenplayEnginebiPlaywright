const qaTestData = require('../actors/qa.json');
const prodTestData = require('../actors/prod.json');
const { test, expect } = require('@playwright/test')

class InputActions {

     /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
     constructor(page){
        // Init page object
        this.page = page;
        this.firtsnamelabel = page.getByLabel('First Name')
        this.lastnamelabel = page.getByLabel('Last Name')
        this.emailaddresslabel = page.getByLabel('Email Address')
        this.phonenumer = page.getByLabel('Business Phone Number')
        this.testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;

    }


    async fillFirstName() {
        await expect(this.firtsnamelabel).toBeVisible();
        await this.firtsnamelabel.click
        await this.firtsnamelabel.fill(this.testData.firtsNamedata)
    }

    async fillLastName() {

        await expect(this.lastnamelabel).toBeVisible();
        await this.lastnamelabel.click
        await this.lastnamelabel.fill(this.testData.lastNamedata)
    }

    async fillEmailAddress() {

        await expect(this.emailaddresslabel).toBeVisible();
        await this.emailaddresslabel.click();
        await this.emailaddresslabel.fill(this.testData.emailData);
    }

    async fillBusinessPhoneNumber() {

        await expect(this.phonenumer).toBeVisible();
        await this.phonenumer.click();
        await this.phonenumer.fill(this.testData.phoneNumber);
    }
}
module.exports = InputActions;