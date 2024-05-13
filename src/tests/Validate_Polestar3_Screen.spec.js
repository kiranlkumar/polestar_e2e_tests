const { test, expect } = require('@playwright/test');
const { Polestar_3_Page } = require('../pages/polestar3');
const { basepage } = require('../pages/basepage');

test('Verify Polister 3 screen is loading without any error', async ({ page }) => {
    const polestar3 = new Polestar_3_Page(page);
    const basePage = new basepage(page);

    await basePage.goto();
    await basePage.popupHandle("Accept All");
    await basePage.menuIconSelect();
    expect(await polestar3.validateScreenDisplayed()).toHaveText('Polestar 3');
})
