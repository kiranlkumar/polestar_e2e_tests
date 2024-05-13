const { expect } = require('@playwright/test');

exports.Polestar_2_Page = class Polestar_2_Page {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async validateScreenDisplayed() {
        await page.locator("//span[normalize-space()='Discover Polestar 2']").click();
        return await page.locator(`(//span[@class='css - 1xewhek'][normalize-space()='Polestar 2'])[2]`)
    }
};