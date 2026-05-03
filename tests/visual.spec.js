const { test, expect } = require('@playwright/test');

const CAROUSEL_MASK = (page) => [page.locator('.carousel')];
const ADS_MASK = (page) => [page.locator('iframe'), page.locator('.Crousel_img')];

test.describe('Visual Regression Tests', () => {

  test('Homepage - visual snapshot', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('homepage.png', {
      maxDiffPixelRatio: 0.2,
      mask: [...CAROUSEL_MASK(page), ...ADS_MASK(page)],
    });
  });

  test('Products page - visual snapshot', async ({ page }) => {
    await page.goto('https://automationexercise.com/products');
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('products-page.png', {
      maxDiffPixelRatio: 0.2,
      mask: ADS_MASK(page),
    });
  });

  test('Login page - visual snapshot', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot('login-page.png', {
      maxDiffPixelRatio: 0.1,
      mask: ADS_MASK(page),
    });
  });

  test('Cart page - visual snapshot', async ({ page }) => {
    await page.goto('https://automationexercise.com/view_cart');
    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot('cart-page.png', {
      maxDiffPixelRatio: 0.1,
      mask: ADS_MASK(page),
    });
  });

  test('Contact Us page - visual snapshot', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot('contact-page.png', {
      maxDiffPixelRatio: 0.1,
      mask: ADS_MASK(page),
    });
  });

});