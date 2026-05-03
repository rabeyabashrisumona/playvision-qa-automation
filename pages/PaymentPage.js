const { expect } = require('@playwright/test');

class PaymentPage {
  constructor(page) {
    this.page = page;
    this.placeOrderButton = page.locator('a[href="/payment"]');
    this.nameOnCardInput = page.locator('[data-qa="name-on-card"]');
    this.cardNumberInput = page.locator('[data-qa="card-number"]');
    this.cvcInput = page.locator('[data-qa="cvc"]');
    this.expiryMonthInput = page.locator('[data-qa="expiry-month"]');
    this.expiryYearInput = page.locator('[data-qa="expiry-year"]');
    this.payButton = page.locator('[data-qa="pay-button"]');
    this.successMessage = page.locator('[data-qa="order-placed"]');
  }

  async placeOrder() {
    await expect(this.placeOrderButton).toBeVisible();
    await this.placeOrderButton.click();
  }

  async fillPaymentDetails() {
    await expect(this.nameOnCardInput).toBeVisible({ timeout: 10000 });
    await this.nameOnCardInput.fill('John Doe QA');
    await this.cardNumberInput.fill('4111111111111111');
    await this.cvcInput.fill('123');
    await this.expiryMonthInput.fill('12');
    await this.expiryYearInput.fill('2030');
  }

  async confirmPayment() {
    await expect(this.payButton).toBeVisible();
    await this.payButton.click();
  }

  async verifySuccess() {
    await expect(this.nameOnCardInput).toBeVisible({ timeout: 60000 });
  }
}

module.exports = { PaymentPage };