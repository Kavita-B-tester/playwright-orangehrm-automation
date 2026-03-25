const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { PIMPage } = require('../pages/PIMPage');
const { testData } = require('../utils/testData');

test('Employee End-to-End Flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const pim = new PIMPage(page);

    await loginPage.navigate();
    await loginPage.login('Admin', 'admin123');

    await pim.navigateToPIM();

    // Create
    await pim.addEmployee(
            testData.employee.firstName,
            testData.employee.lastName
    );
    await pim.verifyEmployeeCreated();

    // Search
    await pim.navigateToPIM();
    await pim.searchEmployee(testData.employee.firstName);

    // Delete
    await pim.deleteEmployee();
});