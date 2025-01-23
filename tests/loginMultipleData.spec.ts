import {test} from "@playwright/test"
const testdata = JSON.parse(JSON.stringify(require("../test-data multiple.json")))

test.describe("Multiple test data ", function()
{

    for (let data of testdata) 
        {
        test.describe(`test data ${data.id}`, function()
            {

            test("getting data ", async({page})=>
                {
            page.goto("https://demo.wpeverest.com/user-registration/guest-registration-form/");
            page.locator("#first_name").fill(data.firstName)
            page.locator("#last_name").fill(data.lastName)
                })
            })
        
    }
})