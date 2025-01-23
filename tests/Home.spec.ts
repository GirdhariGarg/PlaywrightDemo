const {test, expect, request} = require("@playwright/test")

test("home page validation", {tag:['@homepage', '@smoke']}, async({page, context})=>{

    await page.goto("https://www.demoblaze.com/");

    var pagetitle = await page.title();
    console.log(pagetitle);

    await expect(page).toHaveTitle('STORE');

    var  pageurl = await page.url();
    console.log(pageurl);

    let image= await page.locator('//a');
let count = await image.count();
console.log(count);
    for(let i=0; i<count; i++){
        console.log(image.nth(i))
        if(i==5){
            await page.waitForTimeout(4000);
            const pagePromise = context.waitForEvent('page');
           // image.nth(i).dispatchEvent('click');
            image.nth(i).click();
            const newPage = await pagePromise;
            await page.waitForTimeout(4000);
            await newPage.locator('//*[@onclick="logIn()"]').click();
            console.log(await newPage.title);

            const [multiPage] = await Promise.all([
                page.waitForEvent("dialog"),
                page.click("#followboth")
            ])
            await multiPage.waitForLoadState();
         
            const pages = multiPage.context().pages();
            console.log('No.of tabs: ' + pages.length);
            
           // image.nth(i).html.click();
           // image.nth(i).focus();
           await page.on("popup", async ({page})=>{
            await page.waitForLoadState();
            console.log("popup"+await page.title)
            
                });
                await context.on('page', async page => {
                    await page.waitForLoadState();
                    console.log("browser"+await page.title());
                  });
        }
    }
   

 // Get all new pages (including popups) in the context

  
    //await page.close();


});