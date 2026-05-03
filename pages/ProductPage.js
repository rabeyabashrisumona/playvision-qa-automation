class ProductPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.viewProductLinks = page.locator('.choose > ul > li > a');
    this.addToCartButtonDetail = page.locator('button.cart');
    this.continueShoppingButton = page.locator('button:has-text("Continue Shopping")');
    this.viewCartLink = page.locator('u:has-text("View Cart")');
  }

  async addRandomProduct() {
    await this.viewProductLinks.first().waitFor({ state: 'visible', timeout: 15000 });
    const count = await this.viewProductLinks.count();
    const randomIndex = count > 1 ? Math.floor(Math.random() * count) : 0;

    await this.viewProductLinks.nth(randomIndex).scrollIntoViewIfNeeded();
    await this.viewProductLinks.nth(randomIndex).click();

    const productNameLocator = this.page.locator('.product-information h2');
    await productNameLocator.waitFor({ state: 'visible' });
    const productName = await productNameLocator.innerText();
    console.log(`[LOG] 🛍️ ADDING TO CART: ${productName.trim()}`);

    await this.addToCartButtonDetail.waitFor({ state: 'visible', timeout: 15000 });
    await this.addToCartButtonDetail.click();

    await this.page.waitForTimeout(1500);
    await this.continueShoppingButton.waitFor({ state: 'visible', timeout: 15000 });
    await this.continueShoppingButton.dispatchEvent('click');
  }

  async proceedToCart() {
    await this.viewCartLink.waitFor({ state: 'visible', timeout: 15000 });
    await this.viewCartLink.click();
  }
}

module.exports = { ProductPage };