import {expect, Page} from '@playwright/test'

export default class {
    constructor(public page:Page){
    }
    async newRegister(){
        await this.page.locator("button[name='Createaccount']").click()
    }
    async kyc(){
        await this.page.locator("button[type='button']").click()
    }
    async firstName(fn:string){
        const dummy = this.page.locator("input[name='firstname']")
        await dummy.scrollIntoViewIfNeeded()
        await dummy.fill(fn)
    }
    async firstNameval(){
        await expect(this.page.locator("//p[text()='First Name is required']")).toBeVisible()
    }
    async lastNameval(){
        await expect(this.page.locator("//p[text()='Last Name is required']")).toBeVisible()
    }
    async Designationval(){
        await expect(this.page.locator("//p[text()='Designation is required']")).toBeVisible()
    }
    async cmpNameval(){
        await expect(this.page.locator("//p[text()='Company Name is required']")).toBeVisible()
    }
    async emailNameval(){
        await expect(this.page.locator("//p[text()='Email is required']")).toBeVisible()
    }
    async contactNoval(){
        await expect(this.page.locator("//p[text()='Phone Number is required']")).toBeVisible()
    }
    async iecodeval(){
        await expect(this.page.locator("//p[text()='IE Code is required']")).toBeVisible()
    }
    async panval(){
        await expect(this.page.locator("//p[text()='PAN Number is required']")).toBeVisible()
    }
    async passval(){
        await expect(this.page.locator("//p[text()='Password is required']")).toBeVisible()
    }
    async cpassval(){
       await expect(this.page.locator("//p[text()='Confirm Password is required']")).toBeVisible()
    }
    async termsval(){
        await expect(this.page.locator("//p[text()='You should accept the terms and conditions']")).toBeVisible()
    }
    async ieuplval(){
        await this.page.waitForLoadState()
        await expect(this.page.locator("//div[text()='Please Upload IE Code File']")).toBeVisible()
    }
    async panuplval(){
        await this.page.waitForLoadState()
        await expect(this.page.locator("//div[text()='Please Upload PAN File']")).toBeVisible()
    }
    async fileremval(){
        await this.page.waitForLoadState()
        await expect(this.page.locator("//div[text()='File Removed']")).toBeVisible()
    }
    async fileuplval(){
        await this.page.waitForLoadState()
        await expect(this.page.locator("//div[text()='File Uploaded']")).toHaveText("File Uploaded")
    }
    async uplpdfval(){
        await this.page.waitForLoadState()
        await expect(this.page.locator("//div[text()='Upload only Pdf']")).toBeVisible()
    }
    async threeuplval(){
        await this.page.waitForLoadState()
        await expect(this.page.locator("//div[text()='Upload file under 3mb']")).toBeVisible()
    }
    async register_success(){
        await this.page.waitForLoadState()
        await expect(this.page.locator("//div[text()='Registered Successfully']")).toBeVisible()
    }
    async diffuplval(){
        await this.page.waitForLoadState()
        await expect(this.page.locator("//div[text()='Upload a different file']")).toBeVisible()
    }

    async delone(){
        await this.page.locator("//label[@name='iecodedel']").click()
    }
    async deltwo(){
        await this.page.locator("//label[@name='pandel']").click()
    }

    async lastName(ln:string){
      const dummy = await this.page.locator("input[name='lastname']")
      await dummy.scrollIntoViewIfNeeded()
      await dummy.fill(ln)
    }
    async designation(design:string){
        const dummy = await this.page.locator("input[name='designation']")
        await dummy.scrollIntoViewIfNeeded()
        await dummy.fill(design)
    }
    async companyName(comp:string){
        const dummy = await this.page.locator("input[name='companyName']")
        await dummy.scrollIntoViewIfNeeded()
        await dummy.fill(comp)
    }
    async emailId(mail:string){
        const dummy = await this.page.locator("input[type='email']")
        await dummy.scrollIntoViewIfNeeded()
        await dummy.fill(mail)
    }
    async phoneNo(phone:string){
        const dummy = await this.page.locator("input[name='phone']")
        await dummy.scrollIntoViewIfNeeded()
        await dummy.fill(phone)
    }
    async ieCode(ie:string){
        const dummy = await this.page.locator("input[name='iecode']")
        await dummy.scrollIntoViewIfNeeded()
        await dummy.fill(ie)
      }
    async panCard(pan:string){
        const dummy = await this.page.locator("input[name='pan']")
        await dummy.scrollIntoViewIfNeeded()
        await dummy.fill(pan)
      
    }
    async password(pass:string){
        const dummy = await this.page.locator("input[name='password']")
        await dummy.scrollIntoViewIfNeeded()
        await dummy.fill(pass)
    
    }
    async cPassword(cpass:string){
        const dummy = await this.page.locator("input[name='passwordConfirmation']")
        await dummy.scrollIntoViewIfNeeded()
        await dummy.fill(cpass)
       
    }
    async termsAndCondition(){
        let termsAndCondition= this.page.locator("input[type='checkbox']")
        await termsAndCondition.scrollIntoViewIfNeeded
        await termsAndCondition.click()
    }
    async submit(){
        await this.page.locator("button[name='Createaccount']").click()
    }
    async ieUpload(ieU:string){
        await this.page.locator('(//input[@name="iecodeFile"])').setInputFiles(ieU)
     //  await upload1.setInputFiles("ieU")
    }
    async panUpload(panU:string){
        await this.page.locator('(//input[@name="panfile"])').setInputFiles(panU)
    }

    async alphabets_allowed(){
        await expect(this.page.locator("//p[text()='Only Alphabets are allowed']")).toBeVisible()
    }
    async all_allowed(){
        await expect(this.page.locator("//p[text()='Only Alphabets are allowed']")).not.toBeVisible()
    }
    async valid_mail(){
        await expect(this.page.locator("//p[text()='Enter valid Email ID']")).toBeVisible()
    }
    async valid_phone(){
        await expect(this.page.locator("//p[text()='Enter Valid Phone Number']")).toBeVisible()
    }
    async valid_IE(){
        await expect(this.page.locator("//p[text()='Enter valid IE Code']")).toBeVisible()
    }
    async valid_PAN(){
        await expect(this.page.locator("//p[text()='Please enter valid PAN']")).toBeVisible()
    }
    async mail_already_used(){
        await expect(this.page.locator("//p[text()='This email is already used']")).toBeVisible()
    }
    async ie_already_used(){
        await expect(this.page.locator("//p[text()='This IE code is already used']")).toBeVisible()
    }


}
























//logout
