import {test, expect, Browser, Page, Locator} from '@playwright/test'
import  {webkit, chromium, firefox} from 'playwright'

test('login test', async()=>{
const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
const page:Page =await browser.newPage();
await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

const email:Locator = await page.locator('#input-email');
const password:Locator = await page.locator('#input-password');
const loginButton:Locator= await page.locator("[value='Login']");

await email.fill("pwtest33@opencart.com");
await password.fill('playwright@123');
await loginButton.click();

const title = await page.title();
console.log ("home page title :", title);

await page.screenshot({path: 'homepage.png'});

expect(title).toEqual('My Account');

await browser.close();

});

test('Registration script', async()=>{
const browser:Browser =await firefox.launch({headless:false});
const page:Page =await browser.newPage();

await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

const lContinueButton:Locator = await page.locator("//*[@class='btn btn-primary'and text()='Continue']");
const rFirstName:Locator =await page.locator("#input-firstname");
const rlastName:Locator = await page.locator("#input-lastname");
const rEmailID:Locator = await page.locator('#input-email');
const rTelephone:Locator = await page.locator('#input-telephone');
const rPassword:Locator = await page.locator('#input-password');
const rConfirmPassword:Locator = await page.locator('#input-confirm');
const rAgreeCheckbox:Locator = await page.locator('[name="agree"]');
const rContinueButton:Locator = await page.locator('[type="submit"]');
const rAccountCreationHeading = await page.locator('//h1["Your Account Has Been Created!"]');

await lContinueButton.click();
await rFirstName.fill("Tester");
await rlastName.fill("TesterLast");
await rEmailID.fill("pw45@opencart.com");
await rTelephone.fill("12234567890");
await rPassword.fill('playwright@123')
await rConfirmPassword.fill('playwright@123');
await rAgreeCheckbox.check();
await rContinueButton.click();

await expect(rAccountCreationHeading).toBeVisible();

await browser.close()

})