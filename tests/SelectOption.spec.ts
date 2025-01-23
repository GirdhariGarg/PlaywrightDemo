import {test} from '@playwright/test'
import exp from 'constants';

test('select test', async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await page.locator("#state").selectOption({label:'Delhi'});

    await page.waitForTimeout(3000);

    await page.locator("#state").selectOption({value:'Chandigarh'});

    await page.waitForTimeout(3000);

    //await page.locator("#state").selectOption({index:6})

    await page.waitForTimeout(3000);

    const statedata = await page.locator("#state").textContent();

    console.log(statedata);

    const check = await expect(statedata?.includes('Goa'));
    console.log(check);

    await page.waitForTimeout(3000);

    let states = await page.$('#state');
    let allelements= await states?.$$("options")
    console.log("Delhi is :"+allelements)
    await page.close()
})