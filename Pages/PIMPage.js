const { expect } = require('@playwright/test');

class PIMPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToPIM() {
        await this.page.getByRole('link', { name: 'PIM' }).click();

        // wait for page load
        await this.page.waitForSelector('button:has-text("Add")');
    }

    async addEmployee(firstName, lastName) {
        await this.page.getByRole('button', { name: 'Add' }).click();

        // ✅ Wait for Add Employee page
        await this.page.getByRole('heading', { name: 'Add Employee' }).waitFor();

        // ✅ Use reliable locators
        await this.page.getByPlaceholder('First Name').fill(firstName);
        await this.page.getByPlaceholder('Last Name').fill(lastName);

        await this.page.getByRole('button', { name: 'Save' }).click();

        // ✅ Wait for success
        await this.page.waitForSelector('text=Successfully Saved');
    }

    async verifyEmployeeCreated() {
        await expect(
                this.page.locator('h6:has-text("Personal Details")')
        ).toBeVisible();
    }
    async searchEmployee(name) {
        await this.page.getByRole('link', { name: 'Employee List' }).click();

        await this.page.waitForSelector('h5:has-text("Employee Information")');

        const searchBox = this.page.getByRole('textbox', { name: 'Type for hints...' }).first();

        await searchBox.fill(name);

        const dropdown = this.page.locator('.oxd-autocomplete-dropdown');
        await dropdown.waitFor();

        await dropdown.locator('div').first().click();
        await expect(dropdown).toBeHidden();

        await this.page.getByRole('button', { name: 'Search' }).click();

        // ✅ BEST validation
        await expect(this.page.locator(`text=${name}`)).toBeVisible();
    }

    async deleteEmployee() {
        // ✅ Wait for employee rows
        await this.page.waitForSelector('.oxd-table-card');

        // ✅ Select first employee checkbox
        await this.page.locator('.oxd-table-card input[type="checkbox"]').first().click();

        // ✅ Click Delete button (top bar)
        await this.page.locator('button:has-text("Delete")').click();

        // ✅ Confirm delete
        await this.page.locator('button:has-text("Yes, Delete")').click();

        // ✅ Optional: wait for deletion success message
        await this.page.waitForSelector('text=Successfully Deleted');
    }
}

module.exports = { PIMPage };