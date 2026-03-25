const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { testData } = require('../utils/testData');

// ✅ Positive Test
test('Login and Logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await loginPage.navigate();

    await loginPage.login(
            testData.validUser.username,
            testData.validUser.password
    );

    await loginPage.validateLoginSuccess();
    await dashboard.logout();
});

// ❌ Negative Test
test('Invalid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
            testData.invalidUser.username,
            testData.invalidUser.password
    );

    await loginPage.validateLoginError();
});