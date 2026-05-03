class CategoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Parent Categories Navigation (left sidebar toggle)
    this.womenCategory = page.locator('a[href="#Women"]');
    this.menCategory = page.locator('a[href="#Men"]');
    this.kidsCategory = page.locator('a[href="#Kids"]');

    // Sub-Categories
    // Women
    this.womenDressLink = page.locator('a[href="/category_products/1"]');
    this.womenTopsLink = page.locator('a[href="/category_products/2"]');
    this.womenSareeLink = page.locator('a[href="/category_products/7"]');
    // Men
    this.menTshirtsLink = page.locator('a[href="/category_products/3"]');
    this.menJeansLink = page.locator('a[href="/category_products/6"]');
    // Kids
    this.kidsDressLink = page.locator('a[href="/category_products/4"]');
    this.kidsTopsShirtsLink = page.locator('a[href="/category_products/5"]');

    // Brands
    this.poloBrandLink = page.locator('a[href="/brand_products/Polo"]');
  }

  // --- Women ---
  async visitWomenDress() {
    await this.womenCategory.click();
    await this.womenDressLink.waitFor({ state: 'visible' });
    await this.womenDressLink.click();
  }
  async visitWomenTops() {
    await this.womenCategory.click();
    await this.womenTopsLink.waitFor({ state: 'visible' });
    await this.womenTopsLink.click();
  }
  async visitWomenSaree() {
    await this.womenCategory.click();
    await this.womenSareeLink.waitFor({ state: 'visible' });
    await this.womenSareeLink.click();
  }

  // --- Men ---
  async visitMenTshirts() {
    await this.menCategory.click();
    await this.menTshirtsLink.waitFor({ state: 'visible' });
    await this.menTshirtsLink.click();
  }
  async visitMenJeans() {
    await this.menCategory.click();
    await this.menJeansLink.waitFor({ state: 'visible' });
    await this.menJeansLink.click();
  }

  // --- Kids ---
  async visitKidsDress() {
    await this.kidsCategory.click();
    await this.kidsDressLink.waitFor({ state: 'visible' });
    await this.kidsDressLink.click();
  }
  async visitKidsTopsShirts() {
    await this.kidsCategory.click();
    await this.kidsTopsShirtsLink.waitFor({ state: 'visible' });
    await this.kidsTopsShirtsLink.click();
  }

  // --- Brand ---
  async visitBrand(brandName) {
    const brandLink = this.page.locator(`a[href="/brand_products/${brandName}"]`);
    await brandLink.click();
  }
}

module.exports = { CategoryPage };
