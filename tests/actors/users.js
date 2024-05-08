const { test, expect } = require('@playwright/test')

exports.User = class User {
 /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */

    constructor(page) {
        this.page = page;
    }

    async goto() {
        // Asegúrate de que la URL está siendo cargada correctamente
        console.log("Navigating to URL:", process.env.URL);  // Puedes comentar esta línea después de verificar
        await this.page.goto(process.env.URL);
    }

}