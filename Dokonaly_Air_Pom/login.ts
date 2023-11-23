import {expect, Page} from '@playwright/test'
 
export default class {
    constructor(public page:Page){   }
    async username(uname:string){
        await this.page.locator("input[type='email']").fill(uname)
    }
    async password(pass:string){
        await this.page.locator("input[type='password']").type(pass)
    }
    async loginbtn(){
        await this.page.locator("button[type='submit']").click()
    }
    async emailval(){
        await expect(this.page.locator("//p[text()='Email is required']")).toBeVisible()
    }
    async validemailval(){
        await expect(this.page.locator("//p[text()='Enter valid Email ID']")).toBeVisible()
    }
    async passval(){
        await expect(this.page.locator("//p[text()='Password is required']")).toBeVisible()
    }
    async toast(){
       
        await this.page.waitForNavigation({waitUntil:'networkidle'})
        await expect(this.page.locator("//div[text()='Logged In Successfully']")).toBeVisible()
        await expect(this.page.locator("//div[text()='Logged In Successfully']")).toHaveText("Logged In Successfully")
    }
    async wrtoast(){
       
        await this.page.waitForLoadState()
        await expect(this.page.locator("//div[text()='Incorrect Username or Password']")).toBeVisible()
        await expect(this.page.locator("//div[text()='Incorrect Username or Password']")).toHaveText("Incorrect Username or Password")
    }

    async logout(){
        await this.page.locator("(//a[@id='basic-nav-dropdown'])[3]").click()
        await this.page.locator("//a[contains(text(),'Sign Out')]").click()
    }
    async logout_toast(){
        await this.page.waitForNavigation({waitUntil:'networkidle'})
        await expect(this.page.locator("//div[text()='You are successfully logged out']")).toBeVisible()
        await expect(this.page.locator("//div[text()='You are successfully logged out']")).toHaveText("You are successfully logged out")
    }
    
}







