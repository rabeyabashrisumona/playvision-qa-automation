class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginMenu = page.locator('a[href="/login"]').first();
    
    // Signup form locators
    this.signupNameInput = page.locator('[data-qa="signup-name"]');
    this.signupEmailInput = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');

    // Registration massive form locators
    this.titleMrRadio = page.locator('#id_gender1');
    this.passwordInput = page.locator('[data-qa="password"]');
    this.daysSelect = page.locator('[data-qa="days"]');
    this.monthsSelect = page.locator('[data-qa="months"]');
    this.yearsSelect = page.locator('[data-qa="years"]');
    
    this.firstNameInput = page.locator('[data-qa="first_name"]');
    this.lastNameInput = page.locator('[data-qa="last_name"]');
    this.companyInput = page.locator('[data-qa="company"]');
    this.address1Input = page.locator('[data-qa="address"]');
    this.countrySelect = page.locator('[data-qa="country"]');
    this.stateInput = page.locator('[data-qa="state"]');
    this.cityInput = page.locator('[data-qa="city"]');
    this.zipcodeInput = page.locator('[data-qa="zipcode"]');
    this.mobileNumberInput = page.locator('[data-qa="mobile_number"]');
    this.createAccountButton = page.locator('[data-qa="create-account"]');
    this.continueButton = page.locator('[data-qa="continue-button"]');

    // Delete account
    this.deleteMenu = page.locator('a[href="/delete_account"]');
  }

  async navigateToLogin() {
    await this.loginMenu.click();
  }

  async signup(name, email) {
    await this.signupNameInput.pressSequentially(name, { delay: 100 });
    await this.signupEmailInput.pressSequentially(email, { delay: 100 });
    await this.signupButton.click();
  }

  async registerFullAccount(password) {
    await this.titleMrRadio.check();
    await this.passwordInput.pressSequentially(password, { delay: 100 });
    await this.daysSelect.selectOption('10');
    await this.monthsSelect.selectOption('5');
    await this.yearsSelect.selectOption('2000');

    await this.firstNameInput.pressSequentially('John', { delay: 100 });
    await this.lastNameInput.pressSequentially('Doe', { delay: 100 });
    await this.companyInput.pressSequentially('QA Company', { delay: 50 });
    await this.address1Input.pressSequentially('123 Testing Lane', { delay: 50 });
    await this.countrySelect.selectOption('United States');
    await this.stateInput.pressSequentially('Texas', { delay: 100 });
    await this.cityInput.pressSequentially('Austin', { delay: 100 });
    await this.zipcodeInput.pressSequentially('78701', { delay: 100 });
    await this.mobileNumberInput.pressSequentially('5551234567', { delay: 100 });

    await this.createAccountButton.click();
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async deleteAccount() {
  await this.deleteMenu.scrollIntoViewIfNeeded();
  await this.page.waitForTimeout(1000);
  await this.deleteMenu.click();
}
}

module.exports = { LoginPage };
