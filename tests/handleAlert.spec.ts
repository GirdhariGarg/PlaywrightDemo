import {test, expect} from "@playwright/test";

const exp = require("node:constants");


test("handle alert", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    

    page.on("dialog", async(alert)=>{
        //expect(d.type()).toContain('alert');
    
        page.waitForEvent("dialog");
        const text =  alert.message();
        console.log(text);
        alert.accept();
    })

    await page.locator("[onclick='jsAlert()']").click();
})


test("handle confirm", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    

    page.on("dialog", async(confirm)=>{
        //expect(d.type()).toContain('alert');
    
        page.waitForEvent("dialog");
        const text =  confirm.message();
        console.log(text);
        confirm.dismiss();
    })

    await page.locator("[onclick='jsConfirm()']").click();
})

test("handle prompt", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    

    page.on("dialog", async(prompt)=>{
        //expect(d.type()).toContain('alert');
    
        page.waitForEvent("dialog");
        const text =  prompt.message();
        expect(text).toContain("I am a JS prompt")
        console.log(text);
    
        prompt.accept("this is my prompt value")

       await page.waitForTimeout(5000)
    })

    await page.locator("[onclick='jsPrompt()']").click();
})