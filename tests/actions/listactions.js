const qaTestData = require('../actors/qa.json');
const prodTestData = require('../actors/prod.json');
const { expect } = require('@playwright/test')
const NavigationActions = require('../actions/navigationactions');
const InputActions = require('../actions/inputactions');



class ListActions {

     /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
     constructor(page){
        // Init page object
        this.page = page;
        this.monthlist = page.getByText('January');
        this.monthlistchose = page.getByText('December');
        this.accountingsoftware = page.getByText('Quickbooks Online');
        this.accountingsoftwarechoose = page.getByText('FreshBooks');
        this.countrylist = page.locator('nz-input-group.ant-input-affix-wrapper input[formcontrolname="country"]');
        this.countrylistchoose = page.getByText('United States');
        this.statelist = page.getByLabel('State');
        this.statelistchoose = page.getByText('California');
        this.currency = page.getByText('USD');
        this.currencychoose = page.locator('nz-option-item.ant-select-item-option[title="USD"]');
        this.termsandconditions = page.getByLabel('I have read and agreed to the');


        this.testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;
        this.navigationActions = new NavigationActions(page);
        this.inputActions = new InputActions(page);

    }

    async verificarCorreoConPago(id, paymentLink) {
        // Verificar el último correo recibido en el buzón especificado
        const latestEmail = await mailslurp.waitForLatestEmail(id, 20000, true);
        if (latestEmail.body.includes(paymentLink)) {
            console.log('El enlace de pago fue encontrado en el correo.');
        } else {
            throw new Error('El enlace de pago no fue encontrado en el correo.');
        }
    }


    async CompanyInformationFreetrial() {   
        // Ejecutar la tarea de suscripción completa
        await this.inputActions.fillCompanyName();
        await this.monthlist.click();
        await this.monthlistchose.click();
        await this.accountingsoftware.click();
        await this.accountingsoftwarechoose.click();
        await this.countrylist.click();
        await this.countrylistchoose.click();
        await this.statelist.click();
        await this.statelistchoose.click();
        await this.inputActions.fillCity();
        await this.currency.click();
        await this.currencychoose.click();
        await this.termsandconditions.click();
        await this.navigationActions.clickNextButton();
        await this.page.waitForTimeout(5000);

    }


    async CompanyInformationSubscriptions() {   
        // Ejecutar la tarea de suscripción completa
        await this.inputActions.fillCompanyName();
        await this.monthlist.click();
        await this.monthlistchose.click();
        await this.accountingsoftware.click();
        await this.accountingsoftwarechoose.click();
        await this.countrylist.click();
        await this.countrylistchoose.click();
        await this.statelist.click();
        await this.statelistchoose.click();
        await this.inputActions.fillCity();
        await this.currency.click();
        await this.currencychoose.click();
        await this.termsandconditions.click();
        await this.navigationActions.clickNextButton();
        await this.page.waitForTimeout(5000);

    }
}

module.exports = ListActions;