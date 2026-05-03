const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/SearchPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { LoginPage } = require('../pages/LoginPage');
const { ContactUsPage } = require('../pages/ContactUsPage');
const { PaymentPage } = require('../pages/PaymentPage');
const { CategoryPage } = require('../pages/CategoryPage');

test.describe('Automation Exercise E2E Tests', () => {

  test('TC01 - Contact Us form submits successfully', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    await page.goto('/');
    await contactUsPage.navigateToContactUs();
    await contactUsPage.submitFakeTicket();
    await expect(page.locator('.status.alert-success')).toBeVisible();  
  }
);

  test('TC02 - Search for a product returns results', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await page.goto('/products');
    await searchPage.searchItem('dress');
    await expect(page.locator('.title')).toContainText('Searched Products');
    const results = page.locator('.productinfo');
    await expect(results.first()).toBeVisible();
  });

  test('TC03 - Add product to cart and verify', async ({ page }) => {
    const categoryPage = new CategoryPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    await page.goto('/');
    await categoryPage.visitWomenDress();
    await productPage.addRandomProduct();
    await page.goto('/view_cart');
    await expect(page.locator('#cart_info_table')).toBeVisible();
    const rows = page.locator('#cart_info_table tbody tr');
    await expect(rows).toHaveCount(1);
  });

  test('TC04 - Remove item from cart', async ({ page }) => {
    const categoryPage = new CategoryPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    await page.goto('/');
    await categoryPage.visitWomenDress();
    await productPage.addRandomProduct();
    await page.goto('/view_cart');
    await cartPage.removeItem();
    await expect(page.locator('#empty_cart')).toBeVisible();
  });

  test('TC05 - Register, checkout and delete account', async ({ page }) => {
  test.setTimeout(120000);
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);
  const categoryPage = new CategoryPage(page);
  const productPage = new ProductPage(page);
  const paymentPage = new PaymentPage(page);
  const fakeEmail = `testuser_${Date.now()}@qa.com`;

  // Step 1: Register first
  await page.goto('/login');
  await loginPage.signup('Test QA Engineer', fakeEmail);
  await loginPage.registerFullAccount('SecretPassword123');
  await loginPage.clickContinue();

  // Step 2: Add product while logged in
  await categoryPage.visitWomenDress();
  await productPage.addRandomProduct();

  // Step 3: Checkout
  await page.goto('/view_cart');
  await cartPage.proceedToCheckout();
  await paymentPage.placeOrder();
  await paymentPage.fillPaymentDetails();
  await paymentPage.confirmPayment();
  await expect(paymentPage.successMessage).toBeVisible({ timeout: 60000 });

  // Step 4: Cleanup
  await loginPage.deleteAccount();
  await expect(page.locator('[data-qa="account-deleted"]')).toBeVisible();
  await loginPage.clickContinue();
});

  test('TC06 - Invalid login shows error', async ({ page }) => {
    await page.goto('/login');
    await page.locator('[data-qa="login-email"]').fill('wrong@email.com');
    await page.locator('[data-qa="login-password"]').fill('wrongpassword');
    await page.locator('[data-qa="login-button"]').click();
    await expect(page.locator('p:has-text("Your email or password is incorrect")')).toBeVisible();
  });

  test('TC07 - Checkout with empty cart shows empty state', async ({ page }) => {
    await page.goto('/view_cart');
    await expect(page.locator('#empty_cart')).toBeVisible();
  });

});