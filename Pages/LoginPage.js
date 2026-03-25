const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    }

    async login(username, password) {
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="submit"]');
    }

    async validateLoginSuccess() {
        await expect(this.page.locator('h6')).toHaveText('Dashboard');
    }

    async validateLoginError() {
        const error = this.page.locator('.oxd-alert-content-text');

        await expect(error).toBeVisible();
        await expect(error).toContainText(/Invalid credentials/i);
    }
}

module.exports = { LoginPage };