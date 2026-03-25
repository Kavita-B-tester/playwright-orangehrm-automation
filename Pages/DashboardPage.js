class DashboardPage {
    constructor(page) {
        this.page = page;
    }

    async logout() {
        await this.page.click('.oxd-userdropdown-tab');
        await this.page.click('text=Logout');
    }
}

module.exports = { DashboardPage };