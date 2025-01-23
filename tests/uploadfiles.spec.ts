import {test} from "@playwright/test";

test.skip("upload file @upload", async({page})=>{
await page.goto("https://the-internet.herokuapp.com/upload")
await page.locator("#file-upload").setInputFiles("./upload/image.png")

await page.locator("[id='file-submit']").click();

await page.waitForTimeout(5000);

//expect(await page.locator("//h3").textContent()).contain("File")


});

test("keyboard actions", async({page})=>{

    await page.goto("https://www.google.com");

    await page.locator("[name='q']").fill("playwright");
    await page.locator("[name='q']").focus();

    await page.waitForSelector("//li[@role= 'presentation']")
    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")


   // await page.keyboard.press("Backspace");
    //await page.keyboard.press("Enter");
    //await page.keyboard.press("Control+A");
    //await page.keyboard.press("Delete");

    await page.waitForTimeout(5000)

    await page.close();

})