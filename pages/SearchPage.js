class SearchPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.productsMenu = page.locator('a[href="/products"]');
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
  }

  async navigateToProducts() {
    await this.productsMenu.click();
    // Dismiss annoying google ads overlay that sometimes appears on this site
    try { 
      const adIframe = this.page.frameLocator('iframe[name="aswift_1"]').locator('#dismiss-button');
      if (await adIframe.isVisible({ timeout: 2000 })) await adIframe.click();
    } catch (e) {}
  }

  async searchItem(itemName) {
    await this.searchInput.pressSequentially(itemName, { delay: 300 });
    await this.searchButton.click();
  }
}

module.exports = { SearchPage };
