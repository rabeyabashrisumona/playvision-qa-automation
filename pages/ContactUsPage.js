class ContactUsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.contactMenu = page.locator('a[href="/contact_us"]');
    this.nameInput = page.locator('[data-qa="name"]');
    this.emailInput = page.locator('[data-qa="email"]');
    this.subjectInput = page.locator('[data-qa="subject"]');
    this.messageInput = page.locator('[data-qa="message"]');
    this.submitButton = page.locator('[data-qa="submit-button"]');
    this.homeButton = page.locator('.btn-success:has-text("Home")');
  }

  async navigateToContactUs() {
    await this.contactMenu.click();
  }

  async submitFakeTicket() {
    await this.nameInput.pressSequentially('Test User', { delay: 300 });
    await this.emailInput.pressSequentially('test@qa.com', { delay: 300 });
    await this.subjectInput.pressSequentially('Testing Support Form', { delay: 200 });
    await this.messageInput.pressSequentially('Automated test run.', { delay: 100 });
    
    // Playwright automatically dismisses dialogs by default, but we should handle it to be safe
    this.page.once('dialog', dialog => dialog.accept());
    await this.submitButton.click();
  }

  async returnHome() {
    await this.homeButton.click();
  }
}

module.exports = { ContactUsPage };
