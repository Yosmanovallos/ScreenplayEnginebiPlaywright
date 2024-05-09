const qaTestData = require('../actors/qa.json');
const prodTestData = require('../actors/prod.json');
const { test, expect } = require('@playwright/test')
const { MailSlurp } = require('mailslurp-client');

const apiKey = process.env.API_KEY;
const mailslurp = new MailSlurp({ apiKey });

class InputActions {

    

     /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
     constructor(page){
        // Init page object
        this.page = page;
        this.firtsnamelabel = page.getByLabel('First Name');
        this.lastnamelabel = page.getByLabel('Last Name');
        this.emailaddresslabel = page.getByLabel('Email Address');
        this.phonenumer = page.getByLabel('Business Phone Number');
        this.comapanyname = page.getByLabel('Company Name');
        this.city = page.getByLabel('City');
        this.testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;

    }


    
    generateRandomCompanyName() {
        const adjectives = ["Dynamic", "Innovative", "Global", "Leading", "NextGen", "Creative"];
        const nouns = ["Solutions", "Technologies", "Systems", "Enterprises", "Holdings", "Concepts"];
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        return `${adjective} ${noun}`;
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

        const { emailAddress, id } = await mailslurp.createInbox();

        await expect(this.emailaddresslabel).toBeVisible();
        await this.emailaddresslabel.click();
        await this.emailaddresslabel.fill(emailAddress);
    }

    async fillBusinessPhoneNumber() {

        await expect(this.phonenumer).toBeVisible();
        await this.phonenumer.click();
        await this.phonenumer.fill(this.testData.phoneNumber);
    }

    async fillCompanyName() {
        const randomCompanyName = this.generateRandomCompanyName();
        await expect(this.comapanyname).toBeVisible();
        await this.comapanyname.click();
        await this.comapanyname.fill(randomCompanyName);
    }

    async fillCity() {

        await expect(this.city).toBeVisible();
        await this.city.click();
        await this.city.fill(this.testData.cityData);
    }


}
module.exports = InputActions;