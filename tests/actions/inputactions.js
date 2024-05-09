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
        const adjectives = [
            "Dynamic", "Innovative", "Global", "Leading", "NextGen", "Prueba", 
            "Turebe", "Tramee", "Trinical", "Prevelt", "Agile", "Brilliant", 
            "Creative", "Diverse", "Efficient", "Futuristic", "Global", "HighTech"
        ];
        const nouns = [
            "Solutions", "Technologies", "Systems", "Enterprises", "Holdings", 
            "Concepts", "Trine", "Pevaar", "AWS", "Appleton", "Ventures", 
            "Corporation", "Industries", "Services", "Network", "Innovations", 
            "Group", "Dynamics"
        ];
        const suffixes = [
            "Corp", "Inc", "Ltd", "LLC", "GmbH", "PLC", "SA", "Pvt", "Co", 
            "AG", "BV", "SAS", "SL", "Ltd", "AB", "OY", "AS", "NV"
        ];
    
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generates a number between 1000 and 9999
    
        return `${randomAdjective} ${randomNoun} ${randomSuffix} ${randomNumber}`;
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
        console.log(`Correo generado: ${emailAddress}`);
        console.log(`ID generado: ${id}`);
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
    // LOGIN inputs
    async fillCity() {

        await expect(this.city).toBeVisible();
        await this.city.click();
        await this.city.fill(this.testData.cityData);
    }
}
module.exports = InputActions;