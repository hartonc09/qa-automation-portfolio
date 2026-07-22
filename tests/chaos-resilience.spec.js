import { test, expect } from '@playwright/test';

test.describe('Chaos Engineering & Error Handling', () => {
  test('handles simulated 500 server errors gracefully', async ({ page }) => {
    await page.goto('/');

    // 1. Open QA Dev Tools Drawer, enable 500 error switch, then close panel
    await page.getByRole('button', { name: 'Toggle QA Dev Tools' }).click();
    await page.getByRole('switch', { name: '500 error on checkout' }).click(); 
    await page.getByRole('button', { name: 'Toggle QA Dev Tools' }).click();

    // 2. Add item to cart and go to checkout screen
    await page.getByRole('button', { name: 'Add to Cart' }).first().click();
    await page.getByRole('button', { name: 'Open cart' }).click();
    await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

    // 3. Fill checkout details
    await page.getByRole('textbox', { name: 'Full Name' }).fill('Jane Doe');
    await page.getByRole('textbox', { name: 'Email' }).fill('jane@example.com');
    await page.getByRole('textbox', { name: 'Shipping Address' }).fill('123 Main St');
    await page.getByRole('textbox', { name: 'Card Number' }).fill('4111111111111111');
    await page.getByRole('textbox', { name: 'Expiry' }).fill('12/28');
    await page.getByRole('textbox', { name: 'CVV' }).fill('123');

    // 4. Place order to trigger the simulated server error
    await page.getByRole('button', { name: 'Place Order' }).click();

    // 5. Assert 500 error toast appears
    await expect(page.getByText(/500/i)).toBeVisible();
  });
});