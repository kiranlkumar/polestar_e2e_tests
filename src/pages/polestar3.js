const { expect } = require('@playwright/test');

exports.Polestar_3_Page = class Polestar_3_Page {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async validateScreenDisplayed() {
        await page.locator("//span[normalize-space()='Discover Polestar 3']").click();
        return await page.locator(`(//h1[normalize-space()='Polestar 3'])[1]`)
    }
};