const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartTable = page.locator('#cart_info_table');
    this.deleteButton = page.locator('.cart_quantity_delete').first();
    this.checkoutButton = page.locator('.check_out');
    this.emptyCart = page.locator('#empty_cart');
  }

  async verifyItemInCart() {
    await expect(this.cartTable).toBeVisible({ timeout: 15000 });
    const rows = this.page.locator('#cart_info_table tbody tr');
    await expect(rows.first()).toBeVisible();
  }

  async removeItem() {
    await expect(this.deleteButton).toBeVisible();
    await this.deleteButton.click();
    await expect(this.emptyCart).toBeVisible({ timeout: 5000 });
  }

  async proceedToCheckout() {
    await expect(this.checkoutButton).toBeVisible();
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };