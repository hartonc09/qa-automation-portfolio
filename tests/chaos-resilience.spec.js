
import { test, expect } from '@playwright/test';

test.describe('Chaos Engineering & Error Handling', () => {
  test('handles simulated 500 server errors gracefully', async ({ page }) => {
    await page.goto('/');

    // 1. Open QA Dev Tools using Role Locator
    await page.getByRole('button', { name: 'Toggle QA Dev Tools' }).click();

    // 2. Toggle 500 Error mode (update selector or use label/role)
    await page.getByLabel('Simulate 500 Error').check(); 

    // 3. Trigger action and assert toast
    await page.getByRole('button', { name: 'Add to Cart' }).first().click();
    await page.getByRole('button', { name: 'Open cart' }).click();
    await page.getByRole('button', { name: 'Checkout' }).click();

    await expect(page.getByText('500 Internal Server Error')).toBeVisible();
  });
});