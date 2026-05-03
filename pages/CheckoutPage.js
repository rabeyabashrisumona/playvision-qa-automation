class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#customer-email').first();
    this.firstNameInput = page.locator('[name="firstname"]');
    this.lastNameInput = page.locator('[name="lastname"]');
    this.companyInput = page.locator('[name="company"]');
    this.streetInput = page.locator('[name="street[0]"]');
    this.cityInput = page.locator('[name="city"]');
    this.stateSelect = page.locator('[name="region_id"]');
    this.zipInput = page.locator('[name="postcode"]');
    this.countrySelect = page.locator('[name="country_id"]');
    this.phoneInput = page.locator('[name="telephone"]');
    this.shippingMethodRadio = page.locator('input[type="radio"]').first();
    this.nextButton = page.locator('button.continue');
    
    // Payment Page Locators
    this.placeOrderButton = page.locator('button.action.primary.checkout');
    this.successMessage = page.locator('.page-title-wrapper');
  }

  async fillShippingInfo(info) {
    // Wait for form to load
    await this.emailInput.waitFor({ state: 'visible', timeout: 30000 });
    
    await this.emailInput.fill(info.email);
    await this.firstNameInput.fill(info.firstName);
    await this.lastNameInput.fill(info.lastName);
    await this.streetInput.fill(info.street);
    await this.cityInput.fill(info.city);
    await this.stateSelect.selectOption({ label: info.state });
    await this.zipInput.fill(info.zip);
    await this.countrySelect.selectOption({ label: info.country });
    await this.phoneInput.fill(info.phone);
  }

  async selectShippingMethod() {
    // Wait for shipping methods to load after address is filled
    await this.shippingMethodRadio.waitFor({ state: 'visible', timeout: 20000 });
    await this.shippingMethodRadio.check();
  }

  async proceedToPayment() {
    await this.nextButton.click();
  }

  async placeOrder() {
    // Wait for the place order button to appear on the payment step
    await this.placeOrderButton.waitFor({ state: 'visible', timeout: 30000 });
    // Prevent clicking while the overlay loader is active
    await this.page.waitForSelector('.loading-mask', { state: 'hidden', timeout: 30000 });
    await this.placeOrderButton.click();
  }

  async verifyOrderSuccess() {
    await this.successMessage.waitFor({ state: 'visible', timeout: 30000 });
    const text = await this.successMessage.innerText();
    if (!text.includes('Thank you for your purchase!')) {
      throw new Error(`Expected success message but found: ${text}`);
    }
  }
}

module.exports = { CheckoutPage };
