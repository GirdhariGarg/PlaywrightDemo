import { Page  } from "@playwright/test";
export default class LoginPage{
    page:Page
        
        firstName = "#first_name"
        lastName = "#last_name"
    constructor(page:Page){
        this.page = page;
    }

async enterUsername(username:string){
    await this.page.waitForSelector(this.firstName);
   await this.page.fill(this.firstName, username);
   console.log("this is page title "+await this.page.title());

   //await expect(this.page.locator("#firstname")).toBeVisible();
   //await this.page.locator("#firstname").screenshot({path:'locator.png'});
   //await this.page.screenshot({path:'pagescreen.png'})
   //await this.page.screenshot({path:'fullpage1.png', fullPage:true})
}

async enterLastName(lastName:string){
    await this.page.waitForSelector("#last_name");
    await this.page.locator("#last_name").fill(lastName);

}
    async clickSubmit(){
        await this.page.getByText("Submit").click();

}

}

//module.exports = LoginPage;
