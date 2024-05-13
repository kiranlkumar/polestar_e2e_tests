const { test, expect } = require('@playwright/test');
const { Polestar_2_Page } = require('../pages/polestar2');
const { basepage } = require('../pages/basepage');

test('Verify Polister 2 screen is loading without any error', async ({ page }) => {
    const polestar2 = new Polestar_2_Page(page);
    const basePage = new basepage(page);

    await basePage.goto();
    await basePage.popupHandle("Accept All");
    await basePage.menuIconSelect();
    expect(await polestar2.validateScreenDisplayed()).toHaveText('Polestar 2');
})

