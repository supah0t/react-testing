import { test, expect } from '@playwright/test';

test.describe('random tests', () => {
    test('basic test', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        const name = await page.innerText('.navbar__title');
        expect(name).toBe('Playwright');
    });

    test('test hiding scrollbar', async ({ page, context }) => {
        await context.tracing.start({ screenshots: true, snapshots: true });
        await page.goto('/scrollbars');
        await page.click('#hidingButton');
    });
});

//test.use({ storageState: 'netflix.json' });
//test('netflix auth', async ({ page }) => {
//await page.goto('https://www.netflix.com/browse');
//const text = await page.innerText('.profile-gate-label');
//expect(text).toBe("Who's watching?");
//});
