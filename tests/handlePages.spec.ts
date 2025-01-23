import {expect, test} from "@playwright/test"

test("handle multiple page", async({browser})=>{
    const context = browser.newContext();
    const page = (await context).newPage();

    (await page).goto("https://freelance-learn-automation.vercel.app");
  const [newPage] = await Promise.all([
     (await context).waitForEvent("page"), 
   (await page).locator("[href='https://www.facebook.com/groups/256655817858291']").click(),
    ])
  await newPage.waitForTimeout(5000);
  await newPage.locator("(//input[@name='email'])[2]").fill("Garg@test.com")
  await newPage.waitForTimeout(5000);

  await newPage.close();

 console.log()
 const alltext = (await page).locator("[class='name']").allTextContents()
 const text =  (await page).locator("[class='name']").count();
 //await newPage.waitForTimeout(5000);
 (await page).waitForLoadState("networkidle");
 console.log(alltext)
 console.log(text)
 expect(text).toBe(10);

 (await page).close();
});