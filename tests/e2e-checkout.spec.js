
import { test, expect } from '@playwright/test';

test.describe('E-Commerce Checkout Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/store');
  });

  test('completes end-to-end checkout with promo code', async ({ page }) => {
    // 1. Add first item to cart
    await page.getByRole('button', { name: 'Add to Cart' }).first().click();

    // 2. Open cart drawer
    await page.getByRole('button', { name: 'Open cart' }).click();

    // 3. Apply promo code
    await page.getByPlaceholder('Promo code').fill('DISCOUNT10');
    await page.getByRole('button', { name: 'Apply' }).click();

    // 4. Submit Order
    await page.getByRole('button', { name: 'Checkout' }).click();
  });
});