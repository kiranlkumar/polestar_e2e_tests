const { expect } = require('@playwright/test');

exports.basepage = class basepage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://www.polestar.com/global/');
    }

    async popupHandle(option) {
        await page.getByRole('button', { name: `${option}` }).click();
    }

    async menuIconSelect() {
        await page.locator("//button[@title='Menu']").click();
    }
};