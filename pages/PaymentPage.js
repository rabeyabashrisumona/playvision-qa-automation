require('dotenv').config();
const { testData } = require('../testdata');

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
    await expect(this.nameOnCardInput).toBeVisible({ timeout: 60000 });
    await this.nameOnCardInput.fill(testData.payment.nameOnCard);
    await this.cardNumberInput.fill(testData.payment.cardNumber);
    await this.cvcInput.fill(testData.payment.cvc);
    await this.expiryMonthInput.fill(testData.payment.expiryMonth);
    await this.expiryYearInput.fill(testData.payment.expiryYear);
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