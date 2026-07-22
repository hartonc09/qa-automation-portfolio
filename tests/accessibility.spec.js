import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Audits', () => {
  test('storefront catalog meets WCAG 2.1 AA standards', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // Analyze accessibility using @axe-core
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    // Assert zero violations
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});