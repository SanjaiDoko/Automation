import { test, expect } from '../Allmaster pom_fixture/all_pom_fixture'
import * as data from "../Allmaster data/Datas.json"

test.describe("login funtionality", async () => {
  test.beforeEach(async ({ baseURL, page }) => {
    await page.goto(`${baseURL}`)
  })

  test.describe('login functionality with mulitple logins as customer', async () => {
    test.only("login with valid username and password as customer", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type1)
      await loginpg.emailID(data.mailID_ff)
      await loginpg.password(data.password_ff)
      await page.waitForTimeout(10000)
      await loginpg.sign_in()
      await loginpg.logout_dd()
      await page.close()
    })

    test("login with Invalid username and valid password as customer", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type1)
      await loginpg.emailID(data.InvmailID_ff)
      await loginpg.password(data.password_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })

    test("login with valid username and Invalid password as customer and check that wrong toast message for first three times after should have different toast message", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type1)
      await loginpg.emailID(data.mailID_ff)
      await loginpg.password(data.Invpassword_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await loginpg.emailID(data.mailID_ff)
      await loginpg.password(data.Invpassword_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await loginpg.emailID(data.mailID_ff)
      await loginpg.password(data.Invpassword_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast2()
      await page.close()

    })

    test("login with Invalid username and Invalid password as customer", async ({ loginpg, page }) => {
      await loginpg.select_type(data.type1)
      await loginpg.emailID(data.InvmailID_ff)
      await loginpg.password(data.password_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()

    })

    test("login with valid credentials of customer but as partner and adminstrator", async ({ loginpg, page }) => {
      await loginpg.select_type(data.type1)
      await loginpg.emailID(data.InvmailID_ff)
      await loginpg.password(data.password_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()

    })

  })

  test.describe('login functionality with mulitple logins as partner', async () => {
    test("login with valid username and password as partner", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type2)
      await loginpg.emailID("chennai@ocfs.com")
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await loginpg.logout_dd()
      await page.close()
    })

    test("login with valid username and Invalid password as partner", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type2)
      await loginpg.emailID("chennai@ocfs.com")
      await loginpg.password("Doko2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })

    test("login with Invalid username and valid password as partner", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type2)
      await loginpg.emailID("chennaiocfs.com")
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })

    test("login with Invalid credentials as partner", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type2)
      await loginpg.emailID("chennaiocfs.com")
      await loginpg.password("Doko2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })


  })

  test.describe('login functionality with mulitple logins as administrator', async () => {
    test("login with valid username and password as administrator", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type3)
      await loginpg.emailID("admin@ams.com")
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await loginpg.logout_dd()
      await page.close()
    })

    test("login with valid username and Invalid password as administrator", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type3)
      await loginpg.emailID("admin@ams.com")
      await loginpg.password("Doko2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })

    test("login with Invalid username and valid password as administrator", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type3)
      await loginpg.emailID("adminams.com")
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })

    test("login with Invalid credentials as administrator", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type3)
      await loginpg.emailID("adminams.com")
      await loginpg.password("Doko2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })
  })


  test("checking the login functionality with validation msg ", async ({ loginpg, page }) => {

    await loginpg.sign_in()
    await loginpg.email_toast()
    await loginpg.password_toast()
    await loginpg.emailID(data.numeric_data)
    await loginpg.email_toast1()
    await loginpg.emailID(data.alphabets_data)
    await loginpg.email_toast1()
    await loginpg.emailID(data.splcharacter_data)
    await loginpg.email_toast1()
    await loginpg.emailID(data.space_data)
    await loginpg.email_toast1()
    await loginpg.password(data.space_data)
    await loginpg.password_toast()
    await page.close()
  })
})

test.describe("Register personal details", async () => {// already registered mail id need to implement and official mail ID
  test.beforeEach(async ({ baseURL, page }) => {
    await page.goto(`${baseURL}`)
  })
  test("checking the register personal details with validation message", async ({ page, loginpg }) => {

    await page.locator("//button[text()='Register']").click()
    await page.locator("//input[@type='checkbox']").click()
    await page.locator("//button[text()='Get Started']").click()
    
    await expect(page.locator("//p[text()='Full Name is required']")).toBeVisible()
    await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("   ")
    await expect(page.locator("//p[text()='Full Name is required']")).toBeVisible()
    await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("#$%^&")
    await expect(page.locator("//p[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("32132")
    await expect(page.locator("//p[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("kevin")

    const till= await page.locator("//select[@name='designation']")
    await till.selectOption("IT")

    const tils= await page.locator("//select[@name='mobileCode']")
    await tils.selectOption("+971")
    await expect(page.locator("//p[text()='Mobile Number is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number']").fill("67657")
    await expect(page.locator("//p[text()='Mobile Number format is not correct']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number']").fill("3233222")

    await expect(page.locator("//p[text()='Email is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Email Address']").fill("492389")
    await expect(page.locator("//p[text()='Enter valid email address']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Email Address']").fill("efsdfd")
    await expect(page.locator("//p[text()='Enter valid email address']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Email Address']").fill("#$@#$%$")
    await expect(page.locator("//p[text()='Enter valid email address']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Email Address']").fill("sanjai.s@gmail.com")
    await expect(page.locator("//p[text()='Enter your official email']")).toBeVisible()
    

    await expect(page.locator("//p[text()='Password is required']")).toBeVisible()
    await page.locator("(//input[@type='password'])[1]").fill("3233222")
    await expect(page.locator("//p[text()='Invalid Password format']")).toBeVisible()
    await page.locator("(//input[@type='password'])[1]").fill("fsddsfdfdf")
    await expect(page.locator("//p[text()='Invalid Password format']")).toBeVisible()
    await page.locator("(//input[@type='password'])[1]").fill("%#^&*###")
    await expect(page.locator("//p[text()='Invalid Password format']")).toBeVisible()
    await page.locator("(//input[@type='password'])[1]").fill("Doko2023")
    await expect(page.locator("//p[text()='Invalid Password format']")).toBeVisible()
    await page.locator("(//input[@type='password'])[1]").fill("Doko@2023")

    await expect(page.locator("//p[text()='Confirm Password is required']")).toBeVisible()
    await page.locator("(//input[@type='password'])[2]").fill("3233222")
    await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
    await page.locator("(//input[@type='password'])[2]").fill("Doko@2023")

    await page.locator("//input[@placeholder='Enter Email Address']").fill("sanjai.s@dokonaly.com")
    await page.locator("//button[text()='Get Started']").click()
    await expect(page.locator("//div[text()='Email Already Exists']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Email Address']").fill("sanjai.raja@dokonaly.com") /// change email everytime
    await page.locator("//button[text()='Get Started']").click()

    await page.pause()

    // otp need to put 

    await loginpg.select_type(data.type1)
    await loginpg.emailID("sanjai.raja@dokonaly.com") // change mail id everytime
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
    
    await page.locator("//button[text()='Continue']").click()
    await page.locator("//input[@id='ci']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='ci']").setInputFiles("data-files/3mb(1).pdf")
    await expect(page.locator("//p[text()='Upload file under 1 MB']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='bl']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='bl']").setInputFiles("data-files/3mb(1).pdf")
    await expect(page.locator("//p[text()='Upload file under 1 MB']")).toBeVisible()
    await page.reload()
  
    await page.locator("//input[@id='ci']").setInputFiles("data-files/1mbcopy (1).pdf")
    await page.locator("//input[@id='bl']").setInputFiles("data-files/1mbcopy (1).pdf")
    await expect(page.locator("//p[text()='Upload a different file']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='bl']").setInputFiles("data-files/1mbcopy (1).pdf")
    await page.locator("//input[@id='ci']").setInputFiles("data-files/1mbcopy (1).pdf")
    await expect(page.locator("//p[text()='Upload a different file']")).toBeVisible()
    await page.reload()
    await page.locator("//button[text()='Continue']").click()
    await expect(page.locator("//p[text()='Legal Entity Name is required']")).toBeVisible()
    await expect(page.locator("//select[@name='country']")).toBeDisabled()
    //await expect(page.locator("//*[text()='United Arab Emirates']")).toBeVisible()   need to check manually
    await expect(page.locator("//p[text()='State is required']")).toBeVisible()
    await expect(page.locator("//p[text()='City is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Please Upload COI File']")).toBeVisible()
    await expect(page.locator("//p[text()='MTO is Required']")).toBeVisible()
    await expect(page.locator("//p[text()='Please Upload BL File']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("   ")
    await expect(page.locator("//p[text()='Legal Entity Name is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("Robert cargo pvt ltd")

    const state = await page.locator("//select[@name='state']")
    await state.selectOption("Dnipropetrovska Oblast")

    const city = await page.locator("//select[@name='city']")
    await city.selectOption("Novomoskovsk")
    await page.locator("//input[@id='bl']").setInputFiles("data-files/1mbcopy (1).pdf")
    await page.locator("//input[@id='ci']").setInputFiles("data-files/ie.pdf")
    await expect(page.locator("//p[text()='MTO is Required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter MTO / Trade License']").fill("    ")
    await expect(page.locator("//p[text()='MTO is Required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter MTO / Trade License']").fill("Robert tl")
    await page.locator("//input[@placeholder='Enter Name']").fill("robi group")


    await page.locator("//button[text()='Continue']").click()
    await page.pause()
  

  })
})
// test("Ran", async({ page})=>{
//   await page.goto("https://www.hdfcbank.com/")
//   const drop = await page.locator("//input[@id='search-chatInput']").click()
//   await page.locator("//div[text()='HDFC Merger']").dblclick()
//   await page.close()

// })

// EXTRA ALL THINGS NEED TO INACTIVE

test.describe("Country", async () => {;
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(3600000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("rdt@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }

  })
  test("check all the fields with validation and add one country (INDIA -> ACTIVE)", async ({ page, adminpg, loginpg, baseURL }) => {

    await adminpg.country_head()
    await adminpg.search_country(data.countryname)   //change
    await adminpg.no_rows()
    await adminpg.add_country()
    await adminpg.save_country()
    await adminpg.coun_name_req()
    await adminpg.coun_code_req()
    await adminpg.coun_region_req()
    await adminpg.coun_currency_req()
    await adminpg.coun_rate_req()
    await adminpg.coun_phonecode_req()
    await adminpg.coun_phoneformat_req()

    await adminpg.country(data.splcharacter_data)
    await adminpg.coun_name_req1()
    await adminpg.country(data.numeric_data)
    await adminpg.coun_name_req1()
    await adminpg.country(data.space_data)
    await adminpg.coun_name_req()
    await adminpg.country(data.countryname)

    await adminpg.countrycode(data.splcharacter_data)
    await adminpg.coun_code_req1()
    await adminpg.countrycode(data.numeric_data)
    await adminpg.coun_code_req1()
    await adminpg.countrycode(data.space_data)
    await adminpg.coun_code_req()
    //  await adminpg.countrycode(data.countrycode)
    //  await adminpg.coun_code_req()
    //  await adminpg.countrycode(data.countrycode_tr)
    //  await adminpg.coun_code_req()
    await adminpg.countrycode(data.countrycode)  //change

    await adminpg.region(data.australia)
    await adminpg.region(data.africa)
    await adminpg.region(data.Namerica)
    await adminpg.region(data.Samerica)
    await adminpg.region(data.Camerica)
    await adminpg.region(data.Europe)
    await adminpg.region(data.asia)


    await adminpg.currency(data.splcharacter_data)
    await adminpg.coun_currency_req1()
    await adminpg.currency("093")
    await adminpg.coun_currency_req1()
    await adminpg.currency(data.space_data)
    await adminpg.coun_currency_req()
    await adminpg.currency(data.countrycode_s)
    await adminpg.curr_code_req()
    await adminpg.currency(data.countrycode_db)
    await adminpg.curr_code_req()
    await adminpg.currency(data.currency)

    await adminpg.rate(data.splcharacter_data)
    await adminpg.coun_rate_req1()
    await adminpg.rate(data.space_data)
    await adminpg.coun_rate_req()
    await adminpg.rate(data.alphabets_data)
    await adminpg.coun_rate_req1()
    await adminpg.rate(data.zero_data)
    await adminpg.coun_rate_req2()
    await adminpg.rate(data.rate)

    await adminpg.phonecode(data.splcharacter_data)
    await adminpg.coun_phonecode_req1()
    await adminpg.phonecode(data.numeric_data)
    await adminpg.coun_phonecode_req1()
    await adminpg.phonecode(data.space_data)
    await adminpg.coun_phonecode_req()
    await adminpg.phonecode(data.apl_phonecode)
    await adminpg.coun_phonecode_req1()
    await adminpg.phonecode(data.spl_phonecode)
    await adminpg.coun_phonecode_req1()
    await adminpg.phonecode(data.phonecode)

    await adminpg.numberformat(data.splcharacter_data)
    await adminpg.coun_phoneformat_req1()
    await adminpg.numberformat(data.space_data)
    await adminpg.coun_phoneformat_req()
    await adminpg.numberformat(data.alphabets_data)
    await adminpg.coun_phoneformat_req1()
    await adminpg.numberformat(data.numeric_data)
    //  await adminpg.Inactive()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await page.waitForTimeout(1000)
    await adminpg.search_country(data.countryname)
    await adminpg.search_country_one()

  })
  test("check that able to add country with same details like same country name and code (NOT ADDED)", async ({ page, baseURL, adminpg, loginpg }) => {

    await adminpg.country_head()
    await adminpg.add_country()
    await adminpg.country(data.countryname)
    await adminpg.countrycode(data.countrycode)
    await adminpg.region(data.asia)
    await adminpg.currency(data.currency)
    await adminpg.rate(data.rate)
    await adminpg.phonecode(data.phonecode)
    await adminpg.numberformat(data.numeric_data)
    await adminpg.Inactive()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await adminpg.errortoast()
  })
  test("check that able to add country with same details with different country name and code (UAE -> ACTIVE)", async ({ page, baseURL, adminpg, loginpg }) => {

    await adminpg.country_head()
    await adminpg.add_country()
    await adminpg.country(data.countryname1)
    await adminpg.countrycode(data.countrycode1)
    await adminpg.region(data.asia)
    await adminpg.currency("aed")
    await adminpg.rate("0.044")
    await adminpg.phonecode("+971")
    await adminpg.numberformat("1234567")
    await adminpg.active()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await adminpg.search_country(data.countryname1)
    await adminpg.search_country_one()

  })
  test("Add one country edit each and every field and check for duplicates also (DUMMY COUNTRY -> ACTIVE)", async ({ page, baseURL, adminpg, loginpg }) => {

    await adminpg.country_head()
    await adminpg.add_country()
    await adminpg.country("dummy country")
    await adminpg.countrycode("dcy")
    await adminpg.region(data.africa)
    await adminpg.currency("fdr")
    await adminpg.rate("10")
    await adminpg.phonecode("+103")
    await adminpg.numberformat("12345678")
    await adminpg.active()
    await adminpg.save_country()
    await adminpg.pop_up_yes()

    await adminpg.search_country("dummy country")
    await adminpg.search_country_one()
    await adminpg.edit_country()

    await adminpg.country("india")
    //await adminpg.Inactive()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await adminpg.duptoast()
    await page.waitForTimeout(8000)
    await adminpg.countrycode("in")
    //await adminpg.Inactive()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await adminpg.duptoast()


    await adminpg.country("dummy coun")
    await adminpg.countrycode("dct")
    await adminpg.region(data.Europe)
    await adminpg.currency("fdv")
    await adminpg.rate("8")
    await adminpg.phonecode("+102")
    await adminpg.numberformat("123456789")
    //await adminpg.Inactive()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await adminpg.edi_sch_toast()
  })
  test("search the country in another country filter (SEARCH INDIA IN AFRICA FILTER)", async ({ adminpg }) => {
    await adminpg.filters()
    await adminpg.filter_Africa()
    await adminpg.search_country(data.countryname)
    await adminpg.no_rows()
  })
  test("search the country in same country filter (SEARCH DUMMY COUN IN EUROPE FILTER)", async ({ adminpg, page }) => {
    await adminpg.filters()
    await adminpg.filter_Europe()
    await adminpg.search_country("dummy coun")
    await adminpg.search_country_one()
  })
})

test.describe("Lane Management", async () => {

  ///////// Don't add extra active lane, it will shows in dashboard

  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(3600000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("rdt@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }

  })
  test("check all the fields with validation and add one lane (INNSA -> ACTIVE)", async ({ adminpg, page }) => {
    await adminpg.laneheading()
    await adminpg.addlane()
    await adminpg.savelane()
    await adminpg.lane_coun_val()
    await adminpg.lane_portname_val()
    await adminpg.lane_portcode_val()
    await adminpg.lane_gatefee_val()
    await adminpg.lane_gatewaycode_val()

    await adminpg.lane_country(data.countryname)   //change
    await adminpg.lane_type(data.gateway)

    await adminpg.lane_portname(data.splcharacter_data)
    await adminpg.lane_portname_val1()
    await adminpg.lane_portname(data.numeric_data)
    await adminpg.lane_portname_val1()
    await adminpg.lane_portname(data.space_data)
    await adminpg.lane_portname_val()
    await adminpg.lane_portname(data.portname)  //change

    await adminpg.lane_portcode(data.splcharacter_data)
    await adminpg.lane_portname_val1()
    await adminpg.lane_portcode(data.numeric_data)
    await adminpg.lane_portname_val1()
    await adminpg.lane_portcode(data.space_data)
    await adminpg.lane_portcode_val()
    await adminpg.lane_portcode(data.portcode)   //change

    await adminpg.lane_gateway_fee(data.zero_data)
    await adminpg.lane_gatefee_val()
    await adminpg.lane_gateway_fee(data.fee)

    await page.locator("//input[@placeholder='Enter Gateway Code']").fill("   ")
    await expect(page.locator("//span[text()='Gateway Code is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Gateway Code']").fill("Q#$%^")
    await expect(page.locator("//span[text()='Only Numbers are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Gateway Code']").fill("sdsds")
    await expect(page.locator("//span[text()='Only Numbers are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Gateway Code']").fill("100")

    await adminpg.savelane()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Lane Added Successfully']")).toBeVisible()

  })
  test("check that able to add lane with same details like same port name and code (NOT ADDED)", async ({ adminpg, page }) => {
    await adminpg.laneheading()
    await adminpg.addlane()
    await adminpg.lane_country(data.countryname) //change
    await adminpg.lane_type(data.gateway)
    await adminpg.lane_portname(data.portname)  //change
    await adminpg.lane_portcode(data.portcode)  //change
    await adminpg.lane_gateway_fee(data.fee)
    await page.locator("//input[@placeholder='Enter Gateway Code']").fill("100")
    await adminpg.savelane()
    await adminpg.pop_up_yes()
    await adminpg.lane_error()

  })
  test("check that able to add lane with different details for another gateway(INMAA -> ACTIVE)", async ({ page, adminpg }) => {
    await adminpg.laneheading()
    await adminpg.addlane()
    await adminpg.lane_country(data.countryname) //change
    await adminpg.lane_type(data.gateway)
    await adminpg.lane_portname("chennai port")  //change
    await adminpg.lane_portcode("inmaa")  //change
    await adminpg.lane_gateway_fee(data.fee)
    await page.locator("//input[@placeholder='Enter Gateway Code']").fill("101")
    await adminpg.savelane()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Lane Added Successfully']")).toBeVisible()

  })
  test("check that able to add lane with same details with different port name and code(AEJEA -> ACTIVE)", async ({ page, adminpg }) => {
    await adminpg.laneheading()
    await adminpg.addlane()
    await adminpg.lane_country(data.countrynamee)   //change
    await adminpg.lane_type(data.destination)
    await adminpg.lane_portname(data.ano_portname)//change
    await adminpg.lane_portcode(data.ano_portcode)//change
    await adminpg.savelane()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Lane Added Successfully']")).toBeVisible()
  })
  test("Add one country edit each and every field and check duplicates also(SMPLA -> ACTIVE)", async ({ page, adminpg }) => {
    await adminpg.laneheading()
    await adminpg.addlane()
    await adminpg.lane_country(data.countryname) //change
    await adminpg.lane_type(data.gateway)
    await adminpg.lane_portname("sample port")  //change
    await adminpg.lane_portcode("smpla")  //change
    await adminpg.lane_gateway_fee("20")
    await page.locator("//input[@placeholder='Enter Gateway Code']").fill("103")
    await adminpg.savelane()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Lane Added Successfully']")).toBeVisible()

    await adminpg.lane_search("sample port")
    await adminpg.edit_first()
    await adminpg.lane_country("dummy coun")
    await adminpg.lane_type(data.destination)
    await adminpg.lane_portname("dest sample port")  //change
    await adminpg.lane_portcode("dspla")
    //await adminpg.Inactive()
    await adminpg.updatelane()
    await adminpg.pop_up_yes()
    await adminpg.edi_sch_toast()

    await adminpg.laneheading()
    await adminpg.lane_search("dest sample port")
    await adminpg.edit_first()
    await adminpg.lane_portcode(data.portcode)
    await adminpg.updatelane()
    await adminpg.pop_up_yes()
    await adminpg.duptoast()
    await page.waitForTimeout(7000)
    await adminpg.lane_portname(data.portname)
    await adminpg.updatelane()
    await adminpg.pop_up_yes()
    await adminpg.duptoast()

  })
  test("search the lane in different filter (SEARCH JEBEL ALI IN GATEWAY AND SEARCH NHAVA SHEVA IN DESTINATION)", async ({ adminpg }) => {
    await adminpg.laneheading()
    await adminpg.lane_filter3()
    await adminpg.lane_filter_gate()
    await adminpg.lane_search(data.ano_portname)
    await adminpg.no_rows()
    await adminpg.lane_filter3()
    await adminpg.lane_filter_dest()
    await adminpg.lane_search(data.portname)
    await adminpg.no_rows()

  })
  test("search the lane in correct filter (SEARCH NHAVA SHEVA IN DESTINATION AND SEARCH JEBEL ALI IN GATEWAY)", async ({ adminpg }) => {
    await adminpg.laneheading()
    await adminpg.lane_filter3()
    await adminpg.lane_filter_gate()
    await adminpg.lane_search(data.portname)
    await adminpg.search_lane_one()
    await adminpg.lane_filter3()
    await adminpg.lane_filter_dest()
    await adminpg.lane_search(data.ano_portname)
    await adminpg.search_lane_one()
  })
})

test.describe("Cost Heading Management", async () => {

  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(3600000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("rdt@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }

  })
  test("check all the fields with validation and add one cost heading (UAE COUNTRY -> ACTIVE)", async ({ adminpg, page }) => {
    await adminpg.costheading()
    await adminpg.add_costheading()
    await adminpg.save_costheading()
    await adminpg.costheading_sac_val()
    await adminpg.costheading_ch_val()
    await adminpg.costheading_countries_val()

    await adminpg.costheading_sac(data.splcharacter_data)
    await adminpg.costheading_sac_val1()
    await adminpg.costheading_sac(data.alphabets_data)
    await adminpg.costheading_sac_val1()
    await adminpg.costheading_sac(data.space_data)
    await adminpg.costheading_sac_val()
    await adminpg.costheading_sac(data.sac)

    await adminpg.costheading_ch(data.splcharacter_data)
    await adminpg.costheading_ch_val1()
    await adminpg.costheading_ch(data.numeric_data)
    await adminpg.costheading_ch_val1()
    await adminpg.costheading_ch(data.space_data)
    await adminpg.costheading_ch_val()
    await adminpg.costheading_ch(data.costheading)

    await adminpg.costheading_countries()
    await adminpg.costheading_countries_dum()  //change
    await adminpg.click_out()

    await adminpg.save_costheading()
    await adminpg.pop_up_yes()
    await adminpg.Addedcostheading_toast()

  })
  test("check add same cost heading for added country (NO ADDED)", async ({ adminpg }) => {
    await adminpg.costheading()
    await adminpg.add_costheading()
    await adminpg.costheading_sac(data.sac1)
    await adminpg.costheading_ch(data.costheading1)
    await adminpg.costheading_countries()
    await adminpg.costheading_countries_dum()
    await adminpg.click_out()

    await adminpg.save_costheading()
    await adminpg.pop_up_yes()
    await adminpg.costheading_error()
  })
  test("check add another cost heading for already added country (DUMMY COUN -> ACTIVE)", async ({ page, adminpg }) => {
    await adminpg.costheading()
    await adminpg.add_costheading()
    await adminpg.costheading_sac(data.sac1)
    await adminpg.costheading_ch(data.costheading1)
    await adminpg.costheading_countries()
    await adminpg.costheading_countries_dum()  //change
    await adminpg.click_out()
    await adminpg.save_costheading()
    await adminpg.pop_up_yes()
    await adminpg.costheading_error()

    await page.reload()

    await adminpg.costheading()
    await adminpg.add_costheading()
    await adminpg.costheading_sac(data.sac1)
    await adminpg.costheading_ch(data.costheading1)
    await adminpg.costheading_countries()
    await page.locator("//span[text()='dummy coun']").click()
    await adminpg.click_out()

    await adminpg.save_costheading()
    await adminpg.pop_up_yes()
    await adminpg.Addedcostheading_toast()

    await adminpg.cost_searchbox("ams new")
    await expect(page.locator("(//div[@data-field='sacCode'])[2]")).toBeVisible()
    await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
    await adminpg.costheading_sac("901321")
    await adminpg.costheading_ch("chs")
    await page.click("//button[text()='Update Cost Heading']")
    await adminpg.pop_up_yes()
    await adminpg.edi_sch_toast()

  })
  test("search with valid cost heading", async ({ page, adminpg }) => {
    await adminpg.costheading()
    await adminpg.cost_searchbox("chs")
    await expect(page.locator("(//div[@data-field='sacCode'])[2]")).toBeVisible()

  })
  test("search with Invalid cost heading", async ({ adminpg }) => {
    await adminpg.costheading()
    await adminpg.cost_searchbox(data.numeric_data)
    await adminpg.cost_norows()

  })
})

test.describe("Cfs Management", async () => {
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(3600000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("rdt@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
  test("check all the fields with validation and add one cfs (NHAVA SHEVA CFS -> ACTIVE, MAIL->SUBHAM)", async ({ adminpg, page }) => {
    await adminpg.cfsmanagement()
    await adminpg.add_cfs()
    await adminpg.save_cfs()
    await adminpg.cfs_country_val()
    await adminpg.cfs_type_val()
    //await expect(page.locator("(//span[text()='Only numbers are allowed'])[2]")).toBeVisible()
    await adminpg.cfs_cfsname_val()
    await adminpg.cfs_cfsbranch_val()
    await adminpg.cfs_fullname_val()
    await adminpg.cfs_email_val()
    await adminpg.cfs_address_val()
    await adminpg.cfs_phonecode_val()

    await adminpg.cfs_countryname(data.countryname)
    await adminpg.cfs_type(data.typedes)
    await adminpg.save_cfs()
    await adminpg.cfs_destination_val()
    await expect(page.locator("(//span[text()='Only numbers are allowed'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Storage Free days']").fill("0000")
    await expect(page.locator("//span[text()='Only positive numbers are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Storage Free days']").fill("5")
    //await expect(page.locator("(//span[text()='Only numbers are allowed'])[1]")).toBeHidden()

    await adminpg.cfs_type(data.typeori)
    await adminpg.save_cfs()
    await adminpg.cfs_gateway_val()
    await adminpg.cfs_gateway(data.cfs_orilane)

    await adminpg.cfs_cfsname("     ")
    await adminpg.cfs_cfsname_val()
    await adminpg.cfs_cfsbranch("    ")
    await adminpg.cfs_cfsbranch_val()

    await adminpg.cfs_cfsname(data.cfsname)
    await adminpg.cfs_cfsbranch(data.cfsbranch)

    await adminpg.cfs_fullname(data.splcharacter_data)
    await adminpg.cfs_fullname_1_val()
    await adminpg.cfs_fullname(data.numeric_data)
    await adminpg.cfs_fullname_1_val()
    await adminpg.cfs_fullname(data.space_data)
    await adminpg.cfs_fullname_val()
    await adminpg.cfs_fullname(data.name)

    await adminpg.cfs_email(data.splcharacter_data)
    await adminpg.cfs_email_1_val()
    await adminpg.cfs_email(data.numeric_data)
    await adminpg.cfs_email_1_val()
    await adminpg.cfs_email(data.space_data)
    await adminpg.cfs_email_val()
    await adminpg.cfs_email(data.cfs_email)

    await adminpg.cfs_address(data.space_data)
    await adminpg.cfs_address_val()
    await adminpg.cfs_address(data.cfs_Address)

    await adminpg.cfs_phonecode(data.splcharacter_data)
    await adminpg.cfs_phonecode_1_val()
    await adminpg.cfs_phonecode(data.numeric_data)
    await adminpg.cfs_phonecode_1_val()
    await adminpg.cfs_phonecode(data.space_data)
    await adminpg.cfs_phonecode_1_val()
    await adminpg.cfs_phonecode(data.alphabets_data)
    await adminpg.cfs_phonecode_1_val()
    await adminpg.cfs_phonecode("")
    await expect(page.locator("//span[text()='Mobile Number is required']")).toBeVisible()
    await adminpg.cfs_phonecode(data['mobilecode&number'])

    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/10 mb file.pdf")
    await page.waitForTimeout(5000)
    await page.locator("(//p[text()='10 mb file.pdf']/following-sibling::div)[1]").click()
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
    await page.waitForTimeout(3000)
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//div[text()='File already uploaded']")).toBeVisible()
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//div[text()='Upload only Pdf']")).toBeVisible()

    await adminpg.save_cfs()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='CFS Added Successfully']")).toBeVisible()

  })
  test("check all the fields with validation and add one cfs (CHENNAI CFS -> ACTIVE, MAIL->BALREDDY)", async ({ adminpg, page }) => {

    await adminpg.cfsmanagement()
    await adminpg.add_cfs()
    await adminpg.cfs_countryname(data.countryname)
    await adminpg.cfs_type(data.typeori)
    await adminpg.cfs_gateway("chennai port")
    await adminpg.cfs_cfsname("chennai")
    await adminpg.cfs_cfsbranch("branch 1")
    await adminpg.cfs_fullname("balreddy")
    await adminpg.cfs_email("balreddy.mahendra@dokonaly.com")
    await adminpg.cfs_address("balreddy address")
    await adminpg.cfs_phonecode(data['mobilecode&number'])

    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/10 mb file.pdf")
    await page.waitForTimeout(5000)
    await page.locator("(//p[text()='10 mb file.pdf']/following-sibling::div)[1]").click()
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
    await page.waitForTimeout(3000)
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//div[text()='File already uploaded']")).toBeVisible()

    await page.locator("(//p[text()='3mb(1).pdf']/following-sibling::div)[1]").click()
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/1mbcopy (1).pdf")
    await page.waitForTimeout(5000)

    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//div[text()='Upload only Pdf']")).toBeVisible()

    await adminpg.save_cfs()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='CFS Added Successfully']")).toBeVisible()

  })
  test("check all the fields with validation and add one cfs (JEBEL ALI CFS -> ACTIVE, MAIL->VIJAY RAGHAV)", async ({ adminpg, page }) => {
    await adminpg.cfsmanagement()
    await adminpg.add_cfs()
    await adminpg.cfs_countryname(data.countrynamee)
    await adminpg.cfs_type(data.typedes)
    await adminpg.cfs_destination("jebel ali")
    await page.locator("//input[@placeholder='Enter Storage Free days']").fill("5")
    await adminpg.cfs_cfsname("jebel ali cfs")
    await adminpg.cfs_cfsbranch("branch 1")
    await adminpg.cfs_fullname("vijay")
    await adminpg.cfs_email("vijayaragavan.s@dokonaly.com")
    await adminpg.cfs_address("vijay address")
    await adminpg.cfs_phonecode("+9711234567")

    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/10 mb file.pdf")
    await page.waitForTimeout(5000)
    await page.locator("(//p[text()='10 mb file.pdf']/following-sibling::div)[1]").click()
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
    await page.waitForTimeout(3000)
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//div[text()='File already uploaded']")).toBeVisible()
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//div[text()='Upload only Pdf']")).toBeVisible()

    await adminpg.save_cfs()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='CFS Added Successfully']")).toBeVisible()

  })
  test("check mail validations ", async ({ adminpg, page }) => {
    await adminpg.cfsmanagement()
    await adminpg.add_cfs()
    await adminpg.save_cfs()
    await adminpg.cfs_email(data.cfs_email)
    await adminpg.cfs_duplicatemailval()

    const dm = 62
    for (let i = 0; i < dm; i++) {
      await adminpg.cfs_email(data.sample[i])
      await adminpg.cfs_offemailval()
    }
    await page.close()
  })

  test.skip("check add same name and branch", async ({ page, adminpg }) => {
    await adminpg.costheading()
    await adminpg.add_cfs()
    await adminpg.cfs_countryname(data.countryname)
    await adminpg.cfs_type(data.typeori)
    await adminpg.cfs_gateway(data.cfs_orilane)
    await adminpg.cfs_cfsname(data.cfsname)
    await adminpg.cfs_cfsbranch(data.cfsbranch)
    await adminpg.cfs_fullname("balreddy")
    await adminpg.cfs_email("balreddy.mahendra@dokonaly.com")
    await adminpg.cfs_address("balreddy address")
    await adminpg.cfs_phonecode(data['mobilecode&number'])
    await expect(page.locator("//div[text()=' CFS Already Exists']")).toBeVisible()
    await adminpg.save_cfs()
    await adminpg.pop_up_yes()

  })
  test.skip("check add same name and diff branch", async ({ adminpg }) => {
    await adminpg.costheading()
    await adminpg.add_cfs()
    await adminpg.cfs_countryname(data.countryname)
    await adminpg.cfs_type(data.typeori)
    await adminpg.cfs_gateway(data.cfs_orilane)
    await adminpg.cfs_cfsname(data.cfsname)
    await adminpg.cfs_cfsbranch(data.cfsbranch_vel)
    await adminpg.cfs_fullname("balreddy")
    await adminpg.cfs_email("balreddy.mahendra@dokonaly.com")
    await adminpg.cfs_address("balreddy address")
    await adminpg.cfs_phonecode(data['mobilecode&number'])
    await adminpg.save_cfs()
    await adminpg.pop_up_yes()

  })
  test.skip("check add different cfs name and same branch name", async ({ adminpg }) => {
    await adminpg.costheading()
    await adminpg.add_cfs()
    await adminpg.cfs_countryname(data.countrynamee)
    await adminpg.cfs_type(data.typedes)
    await adminpg.cfs_gateway(data.ano_portname)
    await adminpg.cfs_cfsname(data.cfsname_another)
    await adminpg.cfs_cfsbranch(data.cfsbranch)
    await adminpg.cfs_fullname("vijay")
    await adminpg.cfs_email("vijayaragavan.s@dokonaly.com")
    await adminpg.cfs_address("vijay address")
    await adminpg.cfs_phonecode(data['mobilecode&number'])
    await adminpg.save_cfs()
    await adminpg.pop_up_yes()

  })
  test.skip("login with ocfs and dcfs credentials", async ({ page, baseURL, loginpg }) => {
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type2)
    await loginpg.emailID("subham.sidhartha@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await loginpg.logout_dd()

    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type2)
    await loginpg.emailID("balreddy.mahendra@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await loginpg.logout_dd()

    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type2)
    await loginpg.emailID("vijayaragavan.s@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await loginpg.logout_dd()
    await page.close()
  })


  // check mail, check add same name and branch, add same name and diff branch, add diff name with same branch
  // Add one for dummy countrt an edit for it (toast msg also), In edit each and every field & change from ocfs to dcfs
  // set password and login with those credientails
  // search

})

test.describe("Schedule", async () => {

  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(3600000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("rdt@ams.com")
    await loginpg.password(data.password_Ad)
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })

  test("Adding a new schedule with status as Active (INNSA-AEJEA -> ACTIVE)", async ({ adminpg, page }) => {//only
    //await page.locator("div.add_div-heading > svg").click()     close icon in schedule
    await adminpg.schedule()
    await adminpg.add_schedule()

    await adminpg.sch_pol(data.ori_portcode)
    await adminpg.sch_pod("AEJEA")
    await adminpg.sch_container("40HC")
    await adminpg.schedule_vessel("hyundai")
    await adminpg.schedule_voyage("V. 128")
    await adminpg.schedule_service("IEX21")
    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='28']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='27']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='27']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='29']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='30']").click()

    await adminpg.sch_oricfsname("mumbai")
    await adminpg.sch_oricfsbranch("branch 1")
    await adminpg.ct()
    await adminpg.ct_select()
    await adminpg.ct_ok()

    await adminpg.sch_destcfsname("jebel ali cfs")
    await adminpg.sch_destcfsbranch("branch 1")
    await adminpg.ct()
    await adminpg.ct_select()
    await adminpg.ct_ok()
    await adminpg.save_schedule()
    await adminpg.pop_up_yes()
    await adminpg.add_sch_toast()

  })
  test("Adding a new schedule with status as Active (INMAA-AEJEA -> ACTIVE)", async ({ adminpg, page }) => {//only
    //await page.locator("div.add_div-heading > svg").click()     close icon in schedule
    await adminpg.schedule()
    await adminpg.add_schedule()

    await adminpg.sch_pol("INMAA")
    await adminpg.sch_pod("AEJEA")
    await adminpg.sch_container("40HC")
    await adminpg.schedule_vessel("evergreen")
    await adminpg.schedule_voyage("V. 19WIO")
    await adminpg.schedule_service("LVS2")
    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='28']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='27']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='27']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='29']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='30']").click()

    await adminpg.sch_oricfsname("chennai")
    await adminpg.sch_oricfsbranch("branch 1")
    await adminpg.ct()
    await adminpg.ct_select()
    await adminpg.ct_ok()

    await adminpg.sch_destcfsname("jebel ali cfs")
    await adminpg.sch_destcfsbranch("branch 1")
    await adminpg.ct()
    await adminpg.ct_select()
    await adminpg.ct_ok()
    await adminpg.save_schedule()
    await adminpg.pop_up_yes()
    await adminpg.add_sch_toast()

  })
  test.skip("Adding a new schedule with status as Inactive", async ({ page, adminpg }) => {
    await adminpg.schedule()
    await adminpg.add_schedule()

    await adminpg.sch_pol(data.ori_portcode)
    await adminpg.sch_pod("AEJEA")
    await adminpg.sch_container("40HC")
    await adminpg.schedule_vessel("vess")
    await adminpg.schedule_voyage("voyage")
    await adminpg.schedule_service("service")

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='27']").click()


    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='27']").click()


    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='27']").click()


    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='30']").click()


    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='31']").click()

    await adminpg.sch_oricfsname("INsAa")
    await adminpg.sch_oricfsbranch("BRancH")
    await adminpg.ct()
    await adminpg.ct_select()
    await adminpg.ct_ok()

    await adminpg.sch_destcfsname("EmiRaTes")
    await adminpg.sch_destcfsbranch("BrAnch1")
    await adminpg.ct()
    await adminpg.ct_select()
    await adminpg.ct_ok()
    await page.click("//button[text()='Inactive']")
    await adminpg.save_schedule()
    await adminpg.pop_up_yes()
    await adminpg.add_sch_toast()
  })
  test("check all validation message (INNSA-AEJEA -> ACTIVE)", async ({ page, adminpg }) => {

    await adminpg.schedule()
    await adminpg.add_schedule()
    await adminpg.save_schedule()
    await expect(page.locator("//span[text()='POL is required']")).toBeVisible()
    await expect(page.locator("//span[text()='POD is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Container type is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Volume is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Weight is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Vessel is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Voyage is required']")).toBeVisible()

    await expect(page.locator("//span[text()='Service Name is required']")).toBeVisible()

    await expect(page.locator("//span[text()='ETD is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Booking CutOff Date is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Origin CFS CutOff Date is required']")).toBeVisible()
    await expect(page.locator("//span[text()='ETA is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Destination CFS Cargo Delivery Date is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Origin CFS Name is required']")).toBeVisible()

    await expect(page.locator("//span[text()='Origin CFS Closing Time is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Destination CFS Name is required']")).toBeVisible()

    await expect(page.locator("//span[text()='Destination Available Time is required']")).toBeVisible()

    await adminpg.schedule_vessel("!@#$%")
    //  await expect(page.locator("//span[text()='Vessel is required']")).toBeHidden()
    await adminpg.schedule_vessel("78728")
    //  await expect(page.locator("//span[text()='Vessel is required']")).toBeHidden()
    await adminpg.schedule_vessel("kdjs")
    // await expect(page.locator("//span[text()='Vessel is required']")).toBeHidden()
    await adminpg.schedule_vessel("   ")
    await expect(page.locator("//span[text()='Vessel is required']")).toBeVisible()

    await adminpg.schedule_voyage("!@#$%")
    //  await expect(page.locator("//span[text()='Voyage is required']")).toBeHidden()
    await adminpg.schedule_voyage("78728")
    //await expect(page.locator("//span[text()='Voyage is required']")).toBeHidden()
    await adminpg.schedule_voyage("kdjs")
    //await expect(page.locator("//span[text()='Voyage is required']")).toBeHidden()
    await adminpg.schedule_voyage("   ")
    await expect(page.locator("//span[text()='Voyage is required']")).toBeVisible()

    await adminpg.schedule_service("@#$%")
    await expect(page.locator("//span[text()='Only alphabets & numbers are allowed']")).toBeVisible()
    await adminpg.schedule_service("324333")
    //   await expect(page.locator("//span[text()='Only alphabets & numbers are allowed']")).toBeHidden()
    await adminpg.schedule_service("    ")
    await expect(page.locator("//span[text()='Service Name is required']")).toBeVisible()
    await adminpg.schedule_service("kshjs")
    // await expect(page.locator("//span[text()='Service Name is required']")).toBeHidden()

    ///after verified with msg adding a new schedule
    await adminpg.sch_pol(data.ori_portcode)
    await adminpg.sch_pod("AEJEA")
    await adminpg.sch_container("40HC")
    await adminpg.schedule_vessel("evergreen")
    await adminpg.schedule_voyage("V. 120")
    await adminpg.schedule_service("IEX0")
    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='28']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='27']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='27']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='29']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='30']").click()

    await adminpg.sch_oricfsname("mumbai")
    await adminpg.sch_oricfsbranch("branch 1")
    await adminpg.ct()
    await adminpg.ct_select()
    await adminpg.ct_ok()

    await adminpg.sch_destcfsname("jebel ali cfs")
    await adminpg.sch_destcfsbranch("branch 1")
    await adminpg.ct()
    await adminpg.ct_select()
    await adminpg.ct_ok()
    await adminpg.save_schedule()
    await adminpg.pop_up_yes()
    await adminpg.add_sch_toast()

  })
  test.skip("Editing the schedule", async ({ page, adminpg }) => {

    await adminpg.schedule()
    await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
    await adminpg.schedule_vessel("edit vessel")
    await adminpg.schedule_voyage("edit voyage")
    await adminpg.schedule_service("edit service")
    await adminpg.save_schedule()
    await adminpg.pop_up_yes()
    await adminpg.edi_sch_toast()

    await page.reload()
    await adminpg.schedule()
    await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
    await adminpg.schedule_vessel("edit vessel again")
    await adminpg.schedule_voyage("edit voyage again")
    await adminpg.schedule_service("edit service again")
    await page.click("//button[text()='Inactive']")
    await adminpg.save_schedule()
    await adminpg.pop_up_yes()
    await adminpg.edi_sch_toast()


  })
  test.skip("Searching the schedule with pol, pod and schedule ID", async ({ page, adminpg }) => {
    //search schedule while changed the status from active to inactive
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill(" ")     //need to check weeknumber and enter correct schedule ID
    await expect(page.locator("//div[@data-colindex='1']")).toBeVisible()
    await expect(page.locator("//span[text()='Inactive']")).toBeVisible()
    // check with schedule as inactive
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill(" ")      //need to check weeknumber and enter correct schedule ID
    await expect(page.locator("//div[@data-colindex='1']")).toBeVisible()
    await expect(page.locator("//span[text()='Inactive']")).toBeVisible()
    // check with schedule as active
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill(" ")      //need to check weeknumber and enter correct schedule ID
    await expect(page.locator("//div[@data-colindex='1']")).toBeVisible()
    await expect(page.locator("//span[text()='Active']")).toBeVisible()
    // search with pol 
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("INNSA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await expect(page.locator("(//div[@data-colindex='0'])[2]")).toBeVisible()
    await expect(page.locator("(//div[@data-colindex='0'])[3]")).toBeVisible()
    // search with pod
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("AEJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await expect(page.locator("(//div[@data-colindex='0'])[2]")).toBeVisible()
    await expect(page.locator("(//div[@data-colindex='0'])[3]")).toBeVisible()

  })
  //schedule ID
  //shouldn;t able to select holiday date in ocfs and dcfs
  //based on pol and pod cfs should get display in dropdown
  //edit the schedule with each and every field and change status also

})

test.describe("Rates", async () => {
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(3600000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("rdt@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
  test.skip("verify that can able to add space in rates", async ({ adminpg, page }) => {//only
    await adminpg.rates()
    await adminpg.add_rates()
    await adminpg.select_ScheduleID(data.scheduleID)
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await adminpg.ocfs(data.space_data)
    await adminpg.odoc(data.space_data)
    await adminpg.ori_break(data.space_data)
    await adminpg.comp_ocfs(data.space_data)
    await adminpg.comp_odoc(data.space_data)
    await adminpg.freight(data.space_data)
    await adminpg.fri_break(data.space_data)
    await adminpg.comp_fri(data.space_data)
    await adminpg.dcfs(data.space_data)
    await adminpg.ddo(data.space_data)
    await adminpg.dest_break(data.space_data)
    await adminpg.comp_dcfs(data.space_data)
    await adminpg.comp_ddo(data.space_data)
    await adminpg.Ch_cost(data.space_data)
    await adminpg.Ch_comp(data.space_data)

    await adminpg.rates_confirm()
    await adminpg.ratemgmtheading()
  })
  test.skip("verify that can able to add alphabets in rates", async ({ adminpg, page }) => {
    await adminpg.rates()
    await adminpg.add_rates()
    await adminpg.select_ScheduleID(data.scheduleID)
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')

    await adminpg.ocfs(data.alphabets_data)
    await adminpg.odoc(data.alphabets_data)
    await adminpg.ori_break(data.alphabets_data)
    await adminpg.comp_ocfs(data.alphabets_data)
    await adminpg.comp_ddo(data.alphabets_data)
    await adminpg.freight(data.alphabets_data)
    await adminpg.fri_break(data.alphabets_data)
    await adminpg.comp_fri(data.alphabets_data)
    await adminpg.dcfs(data.alphabets_data)
    await adminpg.ddo(data.alphabets_data)
    await adminpg.dest_break(data.alphabets_data)
    await adminpg.comp_dcfs(data.alphabets_data)
    await adminpg.comp_ddo(data.alphabets_data)
    await adminpg.Ch_cost(data.alphabets_data)
    await adminpg.Ch_comp(data.alphabets_data)

    await adminpg.rates_confirm()
    await adminpg.ratemgmtheading()

  })
  test.skip("verify that can able to add spl char in rates", async ({ adminpg, page }) => {
    await adminpg.rates()
    await adminpg.add_rates()
    await adminpg.select_ScheduleID(data.scheduleID)
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')

    await adminpg.ocfs(data.splcharacter_data)
    await adminpg.odoc(data.splcharacter_data)
    await adminpg.ori_break(data.splcharacter_data)
    await adminpg.comp_ocfs(data.splcharacter_data)
    await adminpg.comp_ddo(data.splcharacter_data)
    await adminpg.freight(data.splcharacter_data)
    await adminpg.fri_break(data.splcharacter_data)
    await adminpg.comp_fri(data.splcharacter_data)
    await adminpg.dcfs(data.splcharacter_data)
    await adminpg.ddo(data.splcharacter_data)
    await adminpg.dest_break(data.splcharacter_data)
    await adminpg.comp_dcfs(data.splcharacter_data)
    await adminpg.comp_ddo(data.splcharacter_data)
    await adminpg.Ch_cost(data.splcharacter_data)
    await adminpg.Ch_comp(data.splcharacter_data)

    await adminpg.rates_confirm()
    await adminpg.ratemgmtheading()

  })
  test("verify that can able to add zero in rates", async ({ adminpg, page }) => {

    await adminpg.rates()
    await adminpg.add_rates()
    await adminpg.select_ScheduleID(data.scheduleID)
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')

    await adminpg.ocfs(data.zero_data)
    await adminpg.odoc(data.zero_data)
    await adminpg.ori_break(data.zero_data)
    await adminpg.comp_ocfs(data.zero_data)
    await adminpg.comp_odoc(data.zero_data)
    await adminpg.freight(data.zero_data)
    await adminpg.fri_break(data.zero_data)
    await adminpg.comp_fri(data.zero_data)
    await adminpg.dcfs(data.zero_data)
    await adminpg.ddo(data.zero_data)
    await adminpg.dest_break(data.zero_data)
    await adminpg.comp_dcfs(data.zero_data)
    await adminpg.comp_ddo(data.zero_data)
    await adminpg.Ch_cost(data.zero_data)
    await adminpg.Ch_comp(data.zero_data)

    await adminpg.rates_confirm()
    await adminpg.ratemgmtheading()
  })
  test("check the rates should get add", async ({ adminpg, page }) => {

    await adminpg.rates()
    await adminpg.add_rates()
    await adminpg.select_ScheduleID("INNSA/AEJEA/43-01")
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')

    await adminpg.ocfs(data.ocfs)
    await adminpg.odoc(data.odoc)
    await adminpg.ori_break(data.ori_break)
    await adminpg.comp_ocfs(data.comp_ocfs)
    await adminpg.comp_odoc(data.comp_odoc)
    await adminpg.freight(data.freight)
    await adminpg.fri_break(data.fri_break)
    await adminpg.comp_fri(data.comp_fri)
    await adminpg.dcfs(data.dcfs)
    await adminpg.ddo(data.ddo)
    await adminpg.dest_break(data.dest_break)
    await adminpg.comp_dcfs(data.comp_dcfs)
    await adminpg.comp_ddo(data.comp_ddo)
    await adminpg.Ch_cost(data.Ch_cost)
    await adminpg.Ch_comp(data.Ch_comp)

    //1  with costheading
    await adminpg.select_hover_ScheduleID()
    await adminpg.rates_clear()
    await adminpg.select_ScheduleID("INMAA/AEJEA/43-01")        // need to change
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')

    await adminpg.ocfs(data.ocfs)
    await adminpg.odoc(data.odoc)
    await adminpg.ori_break(data.ori_break)
    await adminpg.comp_ocfs(data.comp_ocfs)
    await adminpg.comp_odoc("3500")
    await adminpg.freight(data.freight)
    await adminpg.fri_break(data.fri_break)
    await adminpg.comp_fri(data.comp_fri)
    await adminpg.dcfs(data.dcfs)
    await adminpg.ddo(data.ddo)
    await adminpg.dest_break(data.dest_break)
    await adminpg.comp_dcfs(data.comp_dcfs)
    await adminpg.comp_ddo("3000")
    await adminpg.Ch_cost(data.Ch_cost)
    await adminpg.Ch_comp("300")
    await expect(page.locator("//h3[text()='41']")).toBeVisible()
    await expect(page.locator("//h3[text()='681']")).toBeVisible()
    await expect(page.locator("//h3[text()='220']")).toBeVisible()

    await adminpg.rates_confirm()
    await adminpg.pop_up_yes()
    await adminpg.ratemgmtheading()


    //2
    await adminpg.select_hover_ScheduleID()
    await adminpg.rates_clear()
    await adminpg.select_ScheduleID("INNSA/AEJEA/43-02")      // need to change
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')

    await adminpg.ocfs(data.ocfs)
    await adminpg.odoc(data.odoc)
    await adminpg.ori_break(data.ori_break)
    await adminpg.comp_ocfs(data.comp_ocfs)
    await adminpg.comp_odoc("2600")
    await adminpg.freight(data.freight)
    await adminpg.fri_break(data.fri_break)
    await adminpg.comp_fri(data.comp_fri)
    await adminpg.dcfs(data.dcfs)
    await adminpg.ddo(data.ddo)
    await adminpg.dest_break(data.dest_break)
    await adminpg.comp_dcfs(data.comp_dcfs)
    await adminpg.comp_ddo("2400")
    await adminpg.Ch_cost(data.Ch_cost)
    await adminpg.Ch_comp("100")

    await expect(page.locator("//h3[text()='32']")).toBeVisible()
    await expect(page.locator("//h3[text()='654']")).toBeVisible()
    await expect(page.locator("//h3[text()='100']")).toBeVisible()

    await adminpg.rates_confirm()
    await adminpg.pop_up_yes()
    await adminpg.ratemgmtheading()

    //3 
    /*await adminpg.select_hover_ScheduleID()
    await adminpg.rates_clear()
    await adminpg.select_ScheduleID(data.scheduleID)
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')

    await adminpg.ocfs(data.ocfs)
    await adminpg.odoc(data.odoc)
    await adminpg.ori_break(data.ori_break)
    await adminpg.comp_ocfs(data.comp_ocfs)
    await adminpg.comp_odoc("2000")
    await adminpg.freight(data.freight)
    await adminpg.fri_break(data.fri_break)
    await adminpg.comp_fri(data.comp_fri)
    await adminpg.dcfs(data.dcfs)
    await adminpg.ddo(data.ddo)
    await adminpg.dest_break(data.dest_break)
    await adminpg.comp_dcfs(data.comp_dcfs)
    await adminpg.comp_ddo("2000")
    await adminpg.Ch_cost(data.Ch_cost)
    await adminpg.Ch_comp("70") 

    await expect(page.locator("//h3[text()='24']")).toBeVisible()
    await expect(page.locator("//h3[text()='545']")).toBeVisible()
    await expect(page.locator("//h3[text()='70']")).toBeVisible()*/


    // await adminpg.rates_confirm()
    // await adminpg.pop_up_yes()
    // await adminpg.ratemgmtheading()
  })
  test("check the schedule without getting approved by admin & when the schedule was inactive shouldn't get display in Dashboard", async ({ adminpg, page }) => {






  })



  // rates calculation need to check start, predicted and alos can use in dashboard, but schedule need to be automate
  // search with scheudle ID
  // view the rates and not to change anymore
  // write three predefined rates to check every time coming correctly or not
})

test.describe("Holiday", async () => {
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(340000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("admin@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })

  test("Check validation & add holiday and search with holiday name", async ({ adminpg, page }) => {
    /*await adminpg.holiday()
    await adminpg.holiday_add()
    await adminpg.holiday_save()
    await adminpg.holiday_validationmsg()
    await adminpg.holiday_portcode(data.portcode_holi)
    await adminpg.holiday_dateclk()
    await adminpg.holiday_date_choose()
    await adminpg.holiday_name(data.space_data)
    await adminpg.holiday_space_validationmsg()
    await adminpg.holiday_name(data.numeric_data)
    await adminpg.holiday_name_validationmsg()
    await adminpg.holiday_name(data.splcharacter_data)
    await adminpg.holiday_name_validationmsg()

    await adminpg.holiday_name(data.name_holi)
    await adminpg.holiday_save()
    await adminpg.holiday_yes()
    await adminpg.holiday_search(data.name_holi)
    await adminpg.asser_holiday()*/

    await adminpg.holiday()
    await adminpg.holiday_headingname()
    await adminpg.holiday_add()
    await adminpg.holiday_save()
    await adminpg.holiday_validationmsg()
    await adminpg.holiday_portcode("INNSA")
    await adminpg.holiday_name("@#@#!@")
    await adminpg.holiday_name_validationmsg()
    await adminpg.holiday_name("34234234")
    await adminpg.holiday_name_validationmsg()
    await adminpg.holiday_name("     ")
    await adminpg.holiday_space_validationmsg()
    await adminpg.holiday_name("test holiday")
    await adminpg.holiday_dateclk()
    await adminpg.holiday_date_choose()

    await adminpg.holiday_save()
    await adminpg.holiday_yes()
    await adminpg.add_holiday_toast()

    await adminpg.holiday_search("test holiday")
    await expect(page.locator("//div[@data-colindex='0']")).toBeVisible()
    await expect(page.locator("//span[text()='Active']")).toBeVisible()
    await page.reload()

    await adminpg.holiday()
    await adminpg.holiday_add()
    await adminpg.holiday_save()
    await adminpg.holiday_validationmsg()
    await adminpg.holiday_portcode("AEJEA")
    await adminpg.holiday_name("@#@#!@")
    await adminpg.holiday_name_validationmsg()
    await adminpg.holiday_name("34234234")
    await adminpg.holiday_name_validationmsg()
    await adminpg.holiday_name("     ")
    await adminpg.holiday_space_validationmsg()
    await adminpg.holiday_name("test holiday")
    await adminpg.holiday_dateclk()
    await adminpg.holiday_date_choose1()
    await adminpg.holiday_save()
    await adminpg.holiday_yes()
    await adminpg.add_holiday_toast()

    await adminpg.holiday_search("test holiday")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await expect(page.locator("(//div[@data-colindex='0'])[2]")).toBeVisible()
    await expect(page.locator("(//span[text()='Active'])[1]")).toBeVisible()
    await expect(page.locator("(//span[text()='Active'])[2]")).toBeVisible()


    await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
    await adminpg.holiday_name("edit holiday")
    await page.click("(//button[@name='status']//span)[2]")
    await adminpg.holiday_update()
    await adminpg.holiday_yes()
    await adminpg.edit_holiday_toast()
    await page.reload()

    await adminpg.holiday_search("edit holiday")
    await expect(page.locator("//div[@data-colindex='0']")).toBeVisible()
    await expect(page.locator("//span[text()='Inactive']")).toBeVisible()

  })

  test("Upload different types of data in Xls file and check validation and search also", async ({ adminpg, page }) => {

    await adminpg.holiday()
    await adminpg.holiday_upload("data-files/Works.docx")
    await adminpg.otherdoc_toast()
    await page.reload()
    await adminpg.holiday_upload("data-files/test.pdf")
    await adminpg.otherdoc_toast()
    await page.reload()
    await adminpg.holiday_upload("data-files/sample.png")
    await adminpg.otherdoc_toast()
    await page.reload()

    await adminpg.holiday_upload("data-files/wrong portcode.xls")
    await adminpg.file_upload_toast()
    await adminpg.submit_button_file()
    await adminpg.holiday_yes()
    await adminpg.invalidportcode_toast()
    await page.reload()

    await adminpg.holiday_upload("data-files/wrong date.xls")
    await adminpg.file_upload_toast()
    await adminpg.submit_button_file()
    await adminpg.holiday_yes()
    await adminpg.invaliddate_toast()
    await page.reload()

    await page.pause()
    await adminpg.holiday_upload("data-files/wrong holiday name.xls")
    await adminpg.file_upload_toast()
    await adminpg.submit_button_file()
    await adminpg.holiday_yes()
    await adminpg.invalidholidayname_toast()
    await page.reload()

    await adminpg.holiday_upload("data-files/valid holiday.xls")
    await adminpg.file_upload_toast()
    await adminpg.submit_button_file()
    await adminpg.holiday_yes()
    await adminpg.add_holiday_toast()
    await page.reload()

    await adminpg.holiday_search("Upload Test One")
    await expect(page.locator("//div[@data-colindex='0']")).toBeVisible()

    await adminpg.holiday_search("Upload Test Two")
    await expect(page.locator("//div[@data-colindex='0']")).toBeVisible()


  })
})

test.describe("Full Booking", async () => {
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    await page.goto(`${baseURL}`)
    await loginpg.emailID(data.mail)
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()

    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
  test("verify that can able to complete full booking", async ({ adminpg, page }) => {
    await adminpg.inmaa()
    await adminpg.Inmaa_dash()
    await adminpg.inmaa_ratecard()
    await adminpg.savings_1_calc()
    await adminpg.savings_1()
    await adminpg.savings_2_calc()
    await adminpg.savings_2()
    await adminpg.savings_3_calc()
    await adminpg.savings_3()
    await adminpg.savings_4_calc()
    await adminpg.savings_4()
    await adminpg.savings_5_calc()
    await adminpg.savings_5()
    await adminpg.savings_6_calc()
    await adminpg.savings_6()
    await adminpg.savings_7_calc()
    await adminpg.savings_7()
    await adminpg.savings_8_calc()
    await adminpg.savings_8()
    await adminpg.savings_9_calc()
    await adminpg.savings_9()
    await adminpg.savings_10_calc()
    await adminpg.savings_10()
    await adminpg.savings_11_calc()
    await adminpg.savings_11()
    await adminpg.savings_12_calc()
    await adminpg.savings_12()
    await adminpg.inmaa_ratec()
    await adminpg.bookingjourney_ratecard()

    await adminpg.continue_to_book()
    await adminpg.cargo_details()

    await adminpg.package_0(data.Crates)
    await adminpg.length_0(data['0.90'])
    await adminpg.breadth_0(data['0.90'])
    await adminpg.height_0(data['0.90'])
    await adminpg.wpp_0(data['0.90'])
    await adminpg.nop_0(data.dest_break)
    await adminpg.commodity_0(data.commodity)
    await adminpg.hsn_0(data.hsncode)
    await adminpg.continue_to_book()

    await adminpg.Addforwarder_dis_companyname()
    await adminpg.Addforwarder_Doorno()
    await adminpg.Addforwarder_Building()
    await adminpg.Addforwarder_street()
    await adminpg.Addforwarder_area()
    await adminpg.Addforwarder_country()
    await adminpg.Addforwarder_sel_state()
    await adminpg.Addforwarder_sel_city()
    await adminpg.Addforwarder_pincode()
    await adminpg.Addforwarder_ori_fileupload()
    await adminpg.Addforwarder_hblname()
    await adminpg.continue_to_book()

    await adminpg.Addforwarder_name()
    await adminpg.Addforwarder_email()
    await adminpg.Addforwarder_ph()
    await adminpg.Addforwarder_companyname()
    await adminpg.Addforwarder_Doorno()
    await adminpg.Addforwarder_Building()
    await adminpg.Addforwarder_street()
    await adminpg.Addforwarder_area()
    await adminpg.Addforwarder_country()
    await adminpg.Addforwarder_inp_state()
    await adminpg.Addforwarder_inp_city()
    await adminpg.continue_to_book()

    await adminpg.continue_to_book()

    await adminpg.packinggfileupload()
    await adminpg.continue_to_book()
    await adminpg.confirm_booking()
    await adminpg.pop_up_yes()

  })
  test("verify that can able to do pre-booking", async ({ adminpg, page }) => {
    await adminpg.inmaa()
    await adminpg.inmaa_ratecard()
    await adminpg.continue_to_book()

    await adminpg.package_0(data.Crates)
    await adminpg.length_0(data['0.90'])
    await adminpg.breadth_0(data['0.90'])
    await adminpg.height_0(data['0.90'])
    await adminpg.wpp_0(data['0.90'])
    await adminpg.nop_0(data.dest_break)
    await adminpg.commodity_0(data.commodity)
    await adminpg.hsn_0(data.hsncode)
    await adminpg.Pre_book()
    await adminpg.Pre_book1()
    await adminpg.pre_booking_assert()
    await adminpg.check_currentdate_and_destport()
  })
  test("Complete the booking from pre-booking", async ({ adminpg, page }) => {
    await adminpg.My_bookings()
    await adminpg.pre_booking_assert()
    await adminpg.book_now_from_pre_book()
    await adminpg.continue_to_book()
    await adminpg.Addforwarder_dis_companyname()
    await adminpg.Addforwarder_Doorno()
    await adminpg.Addforwarder_Building()
    await adminpg.Addforwarder_street()
    await adminpg.Addforwarder_area()
    await adminpg.Addforwarder_country()
    await adminpg.Addforwarder_sel_state()
    await adminpg.Addforwarder_sel_city()
    await adminpg.Addforwarder_pincode()
    await adminpg.Addforwarder_ori_fileupload()
    await adminpg.Addforwarder_hblname()
    await adminpg.continue_to_book()

    await adminpg.Addforwarder_name()
    await adminpg.Addforwarder_email()
    await adminpg.Addforwarder_ph()
    await adminpg.Addforwarder_companyname()
    await adminpg.Addforwarder_Doorno()
    await adminpg.Addforwarder_Building()
    await adminpg.Addforwarder_street()
    await adminpg.Addforwarder_area()
    await adminpg.Addforwarder_country()
    await adminpg.Addforwarder_inp_state()
    await adminpg.Addforwarder_inp_city()
    await adminpg.continue_to_book()

    await adminpg.continue_to_book()

    await adminpg.packinggfileupload()
    await adminpg.continue_to_book()
    await adminpg.confirm_booking()
    await adminpg.pop_up_yes()
    //    await adminpg.check_currentdate_and_destport()
  })
  test("check that address duplicate is ge", async ({ adminpg }) => {
    await adminpg
  })

})

test.describe("Milestone", async () => {
  /*test.beforeEach(async({page, baseURL, loginpg, adminpg})=>{
    test.setTimeout(180000);
    var loop
 
    await page.goto(`${baseURL}`)
    await loginpg.emailID(data.mail)

    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
   if(input){
       console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
   }
   else {
       console.log('Pop-up is not visible.');
   }
   for (loop=0; loop<2; loop++){
    // Full Complete Booking
    await page.locator("//div[@class='vesseldiv']").click()
    await adminpg.continue_to_book()

    
    await adminpg.package_0(data.Crates)
    await adminpg.length_0("50")
    await adminpg.breadth_0("50")
    await adminpg.height_0("50")
    await adminpg.wpp_0("50")
    await adminpg.nop_0("12")
    await adminpg.commodity_0(data.commodity)
    await adminpg.hsn_0(data.hsncode)
    await page.locator("//input[@name='hazardCheck']").check()
    await adminpg.continue_to_book()
    
   // click on saved address card
    await page.locator("(//div[@class='_AddressCard_kyc54_1'])[1]").click() 
    await page.waitForTimeout(2000)
    await page.locator("input[name='hblName']").type("3244323423")
    await adminpg.continue_to_book()

    await page.locator("(//div[@class='_AddressCard_kyc54_1'])[1]").click() 
    await adminpg.continue_to_book()

    await page.locator("(//div[@class='_AddressCard_kyc54_1'])[1]").click() 
    await adminpg.continue_to_book()

    await adminpg.packinggfileupload()
    await adminpg.continue_to_book()

    await adminpg.confirm_booking()
    await adminpg.pop_up_yes()
    await page.locator("//button[text()='Close']").click()

    // await page.locator("(//button[text()='View Details '])[1]").click()

    await page.locator("//a[contains(text(),'Dashboard')]").click()
  }

  }) */
  test("Milestone with basic Flow and PDF check", async ({ loginpg, adminpg, page, baseURL }) => {

    test.setTimeout(180000);
    await loginpg.logout_mile()
    await page.goto(`${baseURL}`)
    // SO RELEASED

    await adminpg.otlogin_mile()

    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("(//button[text()='Confirm'])[2]")
    await loginpg.logout_mile_OT()

    ////CARGO RECEIVED AT CFS, SURVEY COMPLETED AND REVISED MEASUREMENTS
    await adminpg.oripartner_mile()

    await expect(page.locator("//span[text()='Cargo Received by CFS']")).toHaveText("Cargo Received by CFS")
    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//button[text()='Confirm']")

    await expect(page.locator("//span[text()='Survey Completed']")).toHaveText("Survey Completed")
    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")

    await loginpg.logout_mile()

    //CONTAINER AND SEAL NUMBER
    await adminpg.otlogin_mile()
    await page.click("//button[text()=' Back']")
    await page.click("//button[text()='Container Management']")
    await page.locator("//input[@placeholder='Enter Container Number']").type("conone")
    await page.locator("//input[@placeholder='Enter Seal Number']").type("seaone")
    await page.click("//button[@type='submit']")
    await page.click("//button[text()='Yes']")
    await page.locator("//input[@placeholder='Search Company Name']").type("sanjai pvt ltd")   // will change
    await page.click("(//button[text()='View Info'])[8]")                      // WILL CHANGE


    await loginpg.logout_mile_OT()

    // STUFFING REPORT GENERATED
    await adminpg.oripartner_mile()

    await expect(page.locator("//span[text()='Stuffing Report Generated']")).toHaveText("Stuffing Report Generated")
    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")

    await loginpg.logout_mile()

    // SHIPPING INSTRUCTION UPLOADED
    await adminpg.fflogin_mile()

    await expect(page.locator("//span[text()='Shipping Instruction Uploaded']")).toHaveText("Shipping Instruction Uploaded")
    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")

    //SHIPPING BILL UPLOADED

    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//button[@aria-label='Choose date']")
    await page.click("//button[text()='24']")
    await page.locator("//input[@placeholder='Enter Shipping Bill']").fill("shipping bill")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")

    await loginpg.logout_mile()

    //SEA WAYBILL DRAFT GENERATED

    await adminpg.otlogin_mile()

    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@placeholder='Enter Sea Waybill Number']").fill("Sea Waybill Number")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("(//button[text()='Confirm'])[2]")

    await page.locator("//input[@id='Invoice']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")

    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")

    await loginpg.logout_mile_OT()

    await adminpg.fflogin_mile()
    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@id='forwarderHblNo']").fill("Forwarder HBL No")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[@type='submit']")

    ///////////////////// Above payment complete steps

    await page.click("(//button[text()='Confirm'])[1]")
    await page.locator("//input[@placeholder='Enter UTR Number']").fill("UTR")
    await page.click("//button[@aria-label='Choose date']")
    await page.click("//button[text()='24']")
    await page.click("//button[text()='Confirm Details']")

    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//button[@type='submit']")             /// with document also

    await loginpg.logout_mile()

    await adminpg.otlogin_mile()
    ////////////////// Above payment complete step
    await page.click("//button[text()='Confirm payment']")

    // await page.click("//button[text()=' Back']")
    // await page.click("//button[text()='Container Management']")
    //  // select the date from ATD
    //  await page.click("(//button[@aria-label='Choose date'])[2]")
    //  await page.click("//button[text()='18']")

    // await page.click("//button[@type='submit']")
    // await page.click("//button[text()='Yes']")
    // await page.locator("//input[@placeholder='Search Company Name']").type("sanjai pvt ltd")   // WILL CHANGE
    await page.click("(//button[text()='View Info'])[5]")             // WILL CHANGE


    await adminpg.otlogin_mile()                    /////////////////remove 
    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")

    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@placeholder='Enter Marks & Numbers']").fill("Marks and Numbers")
    await page.click("//button[text()='Confirm']")

    // await page.click("//button[text()=' Back']")
    // await page.click("//button[text()='Container Management']")
    //  // select the date from ATA
    //  await page.click("(//button[@aria-label='Choose date'])[2]")
    //  await page.click("//button[text()='26']")

    // await page.click("//button[@type='submit']")
    // await page.click("//button[text()='Yes']")
    // await page.locator("//input[@placeholder='Search Company Name']").type("sanjai pvt ltd")     // WILL CHANGE
    // await page.click("(//button[text()='View Info'])[8]")            // WILL CHANGE


    await loginpg.logout_mile_OT()

    await adminpg.destpartner_mile()
    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//button[text()='Confirm']")

    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//button[@aria-label='Choose date']")
    await page.click("//button[text()='24']")
    await page.click("//button[text()='Confirm']")

    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")

    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//button[@aria-label='Choose date']")
    await page.click("//button[text()='24']")
    await page.click("//button[text()='Confirm']")

    await loginpg.logout_mile()

    await adminpg.otlogin_mile()
    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//button[text()='Confirm']")

    await loginpg.logout_mile_OT()

    await adminpg.destpartner_mile()
    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//input[@aria-label='Choose date']")
    await page.click("//button[text()='24']")
    await page.click("//div[@class='MuiClock-squareMask css-1umqo6f']")
    await page.click("//div[@class='MuiClock-squareMask css-1umqo6f']")
    await page.click("//button[text()='OK']")

    await page.click("//button[text()='Confirm']")

    await loginpg.logout_mile()
    await page.close()

  })
  test("Milestone with basic Flow and PDF checkcc", async ({ loginpg, adminpg, page, baseURL }) => {
    test.setTimeout(180000);
    await page.goto(`${baseURL}`)
    // await page.pause()  
    await adminpg.oripartner_mile()
    await adminpg.fileupload()

    await loginpg.logout_mile()
  })
})

test.describe("My account", async () => {
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(3600000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type1)
    await loginpg.emailID("sanjai.s@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
  test("verify able to change the details and switch the port ", async ({ adminpg, page }) => {

    await adminpg.ff_name()
    await adminpg.my_account()
    await adminpg.edit_details()
    await page.locator("//input[@id='fullName']").clear()
    await page.locator("//input[@id='Mobile']").clear()
    await adminpg.edit_submit()

    await adminpg.edit_fullname(data.numeric_data)
    await adminpg.full_name_val1()
    await adminpg.edit_fullname(data.splcharacter_data)
    await adminpg.full_name_val1()
    await adminpg.edit_fullname(data.space_data)
    await adminpg.full_name_val()

    await adminpg.edit_fullname(data.full_name)

    await adminpg.edit_mobile("  ")
    await expect(page.locator("//p[text()='Mobile Number is required']")).toBeVisible()
    await adminpg.edit_mobile(data.phone)
    await adminpg.edit_submit()

    await page.reload
    //await adminpg.assert_fullname()


    await page.locator("//button[@value='innsa']").click()
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    // schedule name assert need to add

    await adminpg.ff_name()
    await adminpg.my_account()
    await page.locator("//button[@value='inmaa']").click()
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    // schedule name assert need to add

  })
  // test.only("urgent", async({adminpg, page})=>{
  //    //await page.pause()
  //   await page.waitForTimeout(4000)
  //   await page.locator("//button[text()='Confirm My Choices']").click()
  //   await page.locator("//a[text()='Close']").click()

  //   await page.locator("//span[text()='Log in']").click()
  //   await page.waitForTimeout(2000)
  //   await page.locator("#signInName").type("opex@dokonaly.com")
  //   await page.locator("#password").type("Hapag@2021")
  //   await page.locator("//button[@id='next']").click()

  //   await page.waitForTimeout(2000)
  //   await expect(page.locator("hal-navigation-top-login-text-headline")).toBeVisible()



  // })
})