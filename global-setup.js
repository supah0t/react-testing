import chromium from '@playwright/test';

module.exports = async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.netflix.com/');
    await page.click('text=Sign In');
    await page.fill('input[name="userLoginId"]', 'user');
    await page.fill('input[name="password"]', 'password');
    await page.click('.login-button');
    await page.context().storageState({ path: 'netflix.json' });
    await browser.close();
};
