import {test, expect, Browser, Page} from "@playwright/test";
import LoginPage from "../pages/loginpage";
import { beforeEach } from "node:test";
const testdata = JSON.parse(JSON.stringify(require("../test-data.json")));
import { webkit, chromium, firefox } from "@playwright/test";
import { channel } from "diagnostics_channel";

//const firstName ="Girdhari";
//const lastName = "Garg";

test.use({viewport:{height:1010, width:1030}})
    

test.beforeEach("beforeEach test", async({page})=>{
   // const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
   // const page1 = (await browser.newContext()).newPage();
   // const page2 = (await browser.newContext()).newPage();
    //(await page1).goto("https://www.google.com");
    //(await page2).goto("https://www.yahoo.com");
  // const page = (await browser.newContext()).newPage();
(await page).goto("https://demo.wpeverest.com/user-registration/guest-registration-form/");
}
);
test("registration test @smoke1", {tag: '@smoke'}, async({page})=>{
    
    console.log("Username:"+testdata.username);
    console.log("Password:"+testdata.password);
    console.log("first name:"+testdata.firstName);
    console.log("last name:"+testdata.lastName);
    console.log("country"+testdata.country[2]);
    console.log("address : "+testdata.address.area +" /n"+testdata.address.city +"/n "+testdata.address.zipcode)
const loginpage= new LoginPage(page);

await page.waitForTimeout(4000);
loginpage.enterUsername(testdata.firstName);
loginpage.enterLastName(testdata.lastName);
loginpage.clickSubmit();
const frame = page.frame("#frame locator")
frame?.fill("#locatore", testdata.username);

//page.close();
});

test.afterEach("after each testcase", async({page})=>{
    await page.close();
})
