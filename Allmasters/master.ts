import {test, expect} from '../Allmaster pom_fixture/all_pom_fixture'
import * as data from "../Allmaster data/Datas.json"

test.describe("login funtionality", async()=>{
  test.beforeEach(async({baseURL, page})=>{
    await page.goto(`${baseURL}`)
  })

  test.describe('login functionality with mulitple logins as customer', async()=>{
    test("login with valid username and password as customer", async({loginpg, page})=>{
    
      await loginpg.select_type(data.type1)
      await loginpg.emailID(data.mailID_ff)
      await loginpg.password(data.password_ff)
      await loginpg.sign_in()
      await loginpg.logout_dd()
      await page.close()
  })
  
    test("login with Invalid username and valid password as customer", async({loginpg, page})=>{
     
    await loginpg.select_type(data.type1)
    await loginpg.emailID(data.InvmailID_ff)
    await loginpg.password(data.password_ff)
    await loginpg.sign_in()
    await loginpg.login_wrgtoast()
    await page.close()
  })
  
    test("login with valid username and Invalid password as customer and check that wrong toast message for first three times after should have different toast message", async({loginpg, page})=>{
    
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
  
    test("login with Invalid username and Invalid password as customer", async({loginpg, page})=>{
     await loginpg.select_type(data.type1)
     await loginpg.emailID(data.InvmailID_ff)
     await loginpg.password(data.password_ff)
     await loginpg.sign_in()
     await loginpg.login_wrgtoast()
     await page.close()
       
  })

  test("login with valid credentials of customer but as partner and adminstrator", async({loginpg, page})=>{
    await loginpg.select_type(data.type1)
    await loginpg.emailID(data.InvmailID_ff)
    await loginpg.password(data.password_ff)
    await loginpg.sign_in()
    await loginpg.login_wrgtoast()
    await page.close()
      
 })

  })

  test.describe('login functionality with mulitple logins as partner', async()=>{
    test("login with valid username and password as partner", async({loginpg, page})=>{

      await loginpg.select_type(data.type2)
      await loginpg.emailID("chennai@ocfs.com")
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await loginpg.logout_dd()
      await page.close()
    })
    
    test("login with valid username and Invalid password as partner", async({loginpg, page})=>{
    
      await loginpg.select_type(data.type2)
      await loginpg.emailID("chennai@ocfs.com")
      await loginpg.password("Doko2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })
    
    test("login with Invalid username and valid password as partner", async({loginpg, page})=>{
    
      await loginpg.select_type(data.type2)
      await loginpg.emailID("chennaiocfs.com")
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })
    
    test("login with Invalid credentials as partner", async({loginpg, page})=>{
    
      await loginpg.select_type(data.type2)
      await loginpg.emailID("chennaiocfs.com")
      await loginpg.password("Doko2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })
    

  })

  test.describe('login functionality with mulitple logins as administrator', async()=>{
    test("login with valid username and password as administrator", async({loginpg, page})=>{
   
      await loginpg.select_type(data.type3)
      await loginpg.emailID("admin@ams.com")
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await loginpg.logout_dd()
      await page.close()
    })
    
    test("login with valid username and Invalid password as administrator", async({loginpg, page})=>{
       
      await loginpg.select_type(data.type3)
      await loginpg.emailID("admin@ams.com")
      await loginpg.password("Doko2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })
    
    test("login with Invalid username and valid password as administrator", async({loginpg, page})=>{
       
      await loginpg.select_type(data.type3)
      await loginpg.emailID("adminams.com")
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })
    
    test("login with Invalid credentials as administrator", async({loginpg, page})=>{
       
      await loginpg.select_type(data.type3)
      await loginpg.emailID("adminams.com")
      await loginpg.password("Doko2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })
  })


test("checking the login functionality with validation msg ", async({loginpg, page})=>{
   
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

test.describe("Register personal details",async()=>{// already registered mail id need to implement and official mail ID
  test.beforeEach(async({baseURL, page})=>{
    await page.goto(`${baseURL}`)
  })
  test("checking the register personal details with validation message",async({page, loginpg})=>{
      await loginpg.register_clk()
      await loginpg.reg_no()
      await loginpg.register_clk()
      await loginpg.reg_yes()
      await loginpg.terms_condition_clk()
      await loginpg.get_start()
      await loginpg.fullname_val()
      await loginpg.designation_val()
      await loginpg.phone_code_val()
      await loginpg.email_val()
      await loginpg.Regis_password_val()
      await loginpg.Regis_cpassword_val()
      
      await loginpg.fullname(data.space_data)
      await loginpg.fullname_val()
      await loginpg.fullname(data.numeric_data)
      await loginpg.fullname_val1()
      await loginpg.fullname(data.splcharacter_data)
      await loginpg.fullname_val1()
      await loginpg.fullname(data.alphabets_data)
      
      await loginpg.designation(data.design1)
      await loginpg.phone_code(data.numberformat)
      await loginpg.phone_code_val1()

      await loginpg.email(data.dummy_mail1)
      await loginpg.email_val2()
      await loginpg.email(data.dummy_mail2)
      await loginpg.email_val1()

      await loginpg.Regis_password(data.alphabets_data)
      await loginpg.Regis_password_val1()
      await loginpg.Regis_cpassword(data.numeric_data)
      await loginpg.Regis_cpassword1_val1()
      await loginpg.Regis_password(data.password_ff)
      await loginpg.Regis_cpassword(data.password_ff)
  })
})
// test.only("Ran", async({ page})=>{
//   await page.goto("https://www.hdfcbank.com/")
//   const drop = await page.locator("//input[@id='search-chatInput']").click()
//   await page.locator("//div[text()='HDFC Merger']").dblclick()
//   await page.close()

// })
test.describe("Country", async()=>{
    test.beforeEach(async({page, baseURL, loginpg})=>{
        await page.goto(`${baseURL}`)
        await loginpg.select_type(data.type3)
        await loginpg.emailID(data.mailID_Ad)
        await loginpg.password(data.password_Ad)
        await loginpg.sign_in()
    })
   test("check all the fields with validation and add one country",async({page, adminpg, loginpg, baseURL})=>{
     await page.waitForTimeout(18000)   
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
     await adminpg.countrycode(data.countrycode_s)
     await adminpg.coun_code_req()
    //  await adminpg.countrycode(data.countrycode_tr)
    //  await adminpg.coun_code_req()
     await adminpg.countrycode(data.countrycode)  //change
     

     await adminpg.region(data.asia)
     await adminpg.region(data.africa)
     await adminpg.region(data.Namerica)
     await adminpg.region(data.Samerica)
     await adminpg.region(data.Camerica)
     await adminpg.region(data.Europe)
     await adminpg.region(data.australia)

     await adminpg.currency(data.splcharacter_data)
     await adminpg.coun_currency_req1()
     await adminpg.currency(data.numeric_data)
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
   test("check that able to add country with same details like same country name and code",async({page, baseURL, adminpg, loginpg})=>{
 
      await adminpg.country_head()
      await adminpg.add_country()
      await adminpg.country(data.countryname)
      await adminpg.countrycode(data.countrycode)
      await adminpg.region(data.australia)
      await adminpg.currency(data.currency)
      await adminpg.rate(data.rate)
      await adminpg.phonecode(data.phonecode)
      await adminpg.numberformat(data.numeric_data)
      await adminpg.Inactive()
      await adminpg.save_country()
      await adminpg.pop_up_yes()
      await adminpg.errortoast()
   })
   test("check that able to add country with same details with different country name and code",async({page, baseURL, adminpg, loginpg})=>{
 
    await adminpg.country_head()
    await adminpg.add_country()
    await adminpg.country(data.countryname1)
    await adminpg.countrycode(data.countrycode1)
    await adminpg.region(data.australia)
    await adminpg.currency(data.currency)
    await adminpg.rate(data.rate)
    await adminpg.phonecode(data.phonecode)
    await adminpg.numberformat(data.numeric_data)
    await adminpg.active()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await adminpg.search_country(data.countryname1)
    await adminpg.search_country_one()

   })
   test("search the country in another country filter",async({adminpg})=>{
     await adminpg.filters()
     await adminpg.filter_Africa()
     await adminpg.search_country(data.countryname)
     await adminpg.no_rows()
   })
   test("search the country in same country filter",async({adminpg})=>{
    await adminpg.filters()
    await adminpg.filter_Australia()
    await adminpg.search_country(data.countryname)
    await adminpg.search_country_one()
    await adminpg.edit_country()
    await adminpg.country(data.countryname1)
    await adminpg.countrycode(data.countrycode1)
    await adminpg.active()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await adminpg.duptoast()
    await adminpg.country(data.countryname)
    await adminpg.countrycode(data.countrycode)
    await adminpg.active()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    
  })
})

test.describe("Lane Management",async()=>{
 
///////// Don't add extra active lane, it's shows in dashboard

  test.beforeEach(async({page, baseURL, loginpg})=>{
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID(data.mailID_Ad)
    await loginpg.password(data.password_Ad)
    await loginpg.sign_in()
  })
  test("check all the fields with validation and add one lane", async({adminpg, page})=>{
    await adminpg.laneheading()
    await adminpg.addlane()
    await adminpg.savelane()
    await adminpg.lane_coun_val()
    await adminpg.lane_portname_val()
    await adminpg.lane_portcode_val()
    await adminpg.lane_gatefee_val()

    await adminpg.lane_country(data.countrynamee)   //change
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
    await adminpg.savelane()
    await adminpg.pop_up_yes()
    
  })
  test("check that able to add lane with same details like same port name and code", async({adminpg})=>{
    await adminpg.laneheading()
    await adminpg.addlane()
    await adminpg.lane_country(data.countrynamee) //change
    await adminpg.lane_type(data.gateway)
    await adminpg.lane_portname(data.portname)  //change
    await adminpg.lane_portcode(data.portcode)  //change
    await adminpg.lane_gateway_fee(data.fee)
    await adminpg.savelane()
    await adminpg.pop_up_yes()
    await adminpg.lane_error()

  })
  test("check that able to add lane with same details with different port name and code", async({adminpg})=>{
    await adminpg.laneheading()
    await adminpg.addlane()
    await adminpg.lane_country(data.countrynamee)   //change
    await adminpg.lane_type(data.destination)
    await adminpg.lane_portname(data.ano_portname)//change
    await adminpg.lane_portcode(data.ano_portcode)//change
    await adminpg.savelane()
    await adminpg.pop_up_yes()
  })
  test("check that in edit can able to save with existing lane details", async({adminpg})=>{
    await adminpg.laneheading()
    await adminpg.edit_first()
    await adminpg.lane_portcode(data.portcode)
    await adminpg.updatelane()
    await adminpg.pop_up_yes()
    await adminpg.duptoast()
    await adminpg.lane_portname(data.portname)
    await adminpg.updatelane()
    await adminpg.pop_up_yes()
    await adminpg.duptoast()
  })
  test("search the lane in different filter", async({adminpg})=>{
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
  test("search the lane in correct filter", async({adminpg})=>{
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

test.describe("Cost Heading Management",async()=>{

  test.beforeEach(async({page, baseURL, loginpg})=>{
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID(data.mailID_Ad)
    await loginpg.password(data.password_Ad)
    await loginpg.sign_in()
  })
  test("check all the fields with validation and add one cost heading", async({adminpg, page})=>{
    await adminpg.costheading()
    await adminpg.add_costheading()
    await adminpg.save_costheading()
    await adminpg.costheading_sac_val()
    await adminpg.costheading_ch_val()
    await adminpg.costheading_countries_val()
    
    // await page.pause()
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
    
  })
  test("check add same cost heading for added country", async({adminpg})=>{
    await adminpg.costheading()
    await adminpg.add_costheading()
    await adminpg.costheading_sac(data.sac)
    await adminpg.costheading_ch(data.costheading)
    await adminpg.costheading_countries()
    await adminpg.costheading_countries_dum()
    await adminpg.click_out()

    await adminpg.save_costheading()
    await adminpg.pop_up_yes()
    await adminpg.costheading_error()
  })
  test("check add another cost heading for already added country", async({adminpg})=>{
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
  test("check add same cost heading for new country", async({adminpg})=>{
    await adminpg.costheading()
    await adminpg.add_costheading()
    await adminpg.costheading_sac(data.sac1)
    await adminpg.costheading_ch(data.costheading1)
    await adminpg.costheading_countries()
    await adminpg.costheading_countries_dum1()//change
    await adminpg.click_out()

    await adminpg.save_costheading()
    await adminpg.pop_up_yes()
  })
  test("search with valid cost heading", async({adminpg})=>{
    await adminpg.costheading()
    await adminpg.cost_searchbox(data.costheading1)
    await adminpg.cost_awsnew()
 
  })
  test("search with Invalid cost heading", async({adminpg})=>{
    await adminpg.costheading()
    await adminpg.cost_searchbox(data.numeric_data)
    await adminpg.cost_norows()
   
  })
})

test.describe("Cfs Management", async()=>{
  test.beforeEach(async({page, baseURL, loginpg})=>{
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID(data.mailID_Ad)
    await loginpg.password(data.password_Ad)
    await loginpg.sign_in()
  }) 
  test("check all the fields with validation and add one cfs ", async({adminpg, page})=>{
    await adminpg.cfsmanagement()
    await adminpg.add_cfs()
    await adminpg.save_cfs()
    await adminpg.cfs_country_val()
    await adminpg.cfs_type_val()
    await adminpg.cfs_cfsname_val()
    await adminpg.cfs_cfsbranch_val()
    await adminpg.cfs_fullname_val()
    await adminpg.cfs_email_val()
    await adminpg.cfs_address_val()
    await adminpg.cfs_phonecode_val()
    
    await adminpg.cfs_countryname(data.countrynamee)
    await adminpg.cfs_type(data.typeori)
    await adminpg.save_cfs()
    await adminpg.cfs_gateway_val()
    await adminpg.cfs_gateway(data.cfs_orilane)

    await adminpg.cfs_cfsname(data.cfsname)//accepting space data
    await adminpg.cfs_cfsbranch(data.cfsbranch)//doesn't accept space data

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
    await adminpg.cfs_email_1_val()
    await adminpg.cfs_email(data.cfs_email)

    await adminpg.cfs_address(data.space_data)
    await adminpg.cfs_address_val()
    await adminpg.cfs_address(data.cfs_Address)

    await adminpg.cfs_phonecode(data.splcharacter_data)
    await adminpg.cfs_phonecode_1_val
    await adminpg.cfs_phonecode(data.numeric_data)
    await adminpg.cfs_phonecode_1_val
    await adminpg.cfs_phonecode(data.space_data)
    await adminpg.cfs_phonecode_1_val
    await adminpg.cfs_phonecode(data.alphabets_data)
    await adminpg.cfs_phonecode_1_val
    await adminpg.cfs_phonecode(data['mobilecode&number'])
    
    await adminpg.save_cfs()
    await adminpg.pop_up_yes()
    
  })
  test("check mail validations ",async({adminpg, page})=>{
    await adminpg.cfsmanagement()
    await adminpg.add_cfs()
    await adminpg.save_cfs()
    await adminpg.cfs_email(data.cfs_email)
    await adminpg.cfs_duplicatemailval()
    const dm=19
    for(let i=1; i<dm; i++){
      await adminpg.cfs_email(data.sample[i])
      await adminpg.cfs_offemailval()
    }
    await page.close()
  })
  test("check add same name and branch", async({adminpg})=>{
    await adminpg.costheading()
    await adminpg.add_cfs()
    await adminpg.cfs_countryname(data.countrynamee)
    await adminpg.cfs_type(data.typeori)
    await adminpg.cfs_gateway(data.cfs_orilane)
    await adminpg.cfs_cfsname(data.cfsname)
    await adminpg.cfs_cfsbranch(data.cfsbranch)
    await adminpg.cfs_fullname(data.name)
    await adminpg.cfs_email(data.cfs_addsamplemail)
    await adminpg.cfs_address(data.cfs_Address)
    await adminpg.cfs_phonecode(data['mobilecode&number'])
  })
  test("check add same name and diff branch", async({adminpg})=>{
    await adminpg.costheading()
    await adminpg.add_cfs()
    await adminpg.cfs_countryname(data.countrynamee)
    await adminpg.cfs_type(data.typeori)
    await adminpg.cfs_gateway(data.cfs_orilane)
    await adminpg.cfs_cfsname(data.cfsname)
    await adminpg.cfs_cfsbranch(data.cfsbranch_vel)
    await adminpg.cfs_fullname(data.name)
    await adminpg.cfs_email(data.cfs_addsamplemail)
    await adminpg.cfs_address(data.cfs_Address)
    await adminpg.cfs_phonecode(data['mobilecode&number'])
  })
  test("check add different cfs name and same branch name", async({adminpg})=>{
    await adminpg.costheading()
    await adminpg.add_cfs()
    await adminpg.cfs_countryname(data.countrynamee)
    await adminpg.cfs_type(data.typeori)
    await adminpg.cfs_gateway(data.cfs_orilane)
    await adminpg.cfs_cfsname(data.cfsname_another)
    await adminpg.cfs_cfsbranch(data.cfsbranch)
    await adminpg.cfs_fullname(data.name)
    await adminpg.cfs_email(data.cfs_addsamplemail)
    await adminpg.cfs_address(data.cfs_Address)
    await adminpg.cfs_phonecode(data['mobilecode&number'])
  })


// check mail, check add same name and branch, add same name and diff branch, add diff name with same branch
// muliptle upload and view documents
// In edit change from ocfs to dcfs , set password and login with those credientails
// search
  test("", async({adminpg})=>{

  })
})

test.describe("Schedule", async()=>{
  test.beforeEach(async({page, baseURL, loginpg})=>{
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID(data.mailID_Ad)
    await loginpg.password(data.password_Ad)
    await loginpg.sign_in()
  }) 
  test("check all validation message",async({adminpg, page})=>{//only
       await adminpg.schedule()
       await adminpg.add_schedule()
       
       await adminpg.sch_pol(data.ori_portcode)
       await adminpg.sch_pod(data.ano_portcode)
      //  await adminpg.ETD()
      //  await adminpg.nextmonth_date()
      //  await adminpg.ETD_date()

      //  await adminpg.ETD()
      //  await adminpg.nextmonth_date()
      //  await adminpg.Bookcut_date()

      //  await adminpg.ETD()
      //  await adminpg.nextmonth_date()
      //  await adminpg.origincfs_date()

      //  await adminpg.ETD()
      //  await adminpg.nextmonth_date()
      //  await adminpg.nextmonth_date()
      //  await adminpg.ETA_date()

      //  await adminpg.ETD()
      //  await adminpg.nextmonth_date()
      //  await adminpg.nextmonth_date()
      //  await adminpg.destinationcfs_date()
       await adminpg.ct1()
       await adminpg.ct1_select()
       await adminpg.ct2_select()
       await adminpg.ct_ok()
       await adminpg.ct2()
       await adminpg.ct1_select()
       await adminpg.ct2_select()
       await adminpg.ct_ok()

        await page.waitForTimeout(3000)

  })
  test("Adding a new schedule with status as Inactive",async({adminpg})=>{

  })
  test("Adding a new schedule with status as Active",async({adminpg})=>{

  })
  test("Searching the schedule with pol, pod and schedule ID",async({adminpg})=>{

  })
  test("Editing the schedule",async({adminpg})=>{

  })
})

test.describe("Rates", async()=>{
  test.beforeEach(async({page, baseURL, loginpg})=>{
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID(data.mailID_Ad)
    await loginpg.password(data.password_Ad)
    await loginpg.sign_in()
  }) 
  test("verify that can able to add space in rates",async({adminpg, page})=>{//only
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
  test.skip("verify that can able to add alphabets in rates",async({adminpg, page})=>{
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
  test.skip("verify that can able to add spl char in rates",async({adminpg, page})=>{
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
  test("verify that can able to add zero in rates",async({adminpg, page})=>{
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
  test("check the rates should get add",async({adminpg, page})=>{
      await adminpg.rates()
      await adminpg.add_rates()
      await adminpg.select_ScheduleID(data.scheduleID)
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

    await adminpg.ocfs(data.ocfs)
    await adminpg.odoc(data.odoc)
    await adminpg.ori_break(data.ori_break)
    await adminpg.comp_ocfs(data.comp_ocfs)
    await adminpg.comp_odoc(data.comp_ddo)
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

    await adminpg.select_hover_ScheduleID()
    await adminpg.rates_clear()
    await adminpg.select_ScheduleID(data.scheduleID)
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')

    await adminpg.ocfs(data.ocfs)
    await adminpg.odoc(data.odoc)
    await adminpg.ori_break(data.ori_break)
    await adminpg.comp_ocfs(data.comp_ocfs)
    await adminpg.comp_odoc(data.comp_ddo)
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
    //await page.pause()

    await adminpg.rates_confirm()
    await adminpg.pop_up_yes()
    await adminpg.ratemgmtheading()
  })
  test("",async({adminpg, page})=>{
   
  })// rates calculation need to check start, predicted and alos can use in dashboard, but schedule need to be automate
  // search with scheudle ID
  // view the rates and not to change anymore

})

test.describe("Holiday", async()=>{
  test.beforeEach(async({page, baseURL, loginpg})=>{
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID(data.mailID_Ad)
    await loginpg.password(data.password_Ad)
    await loginpg.sign_in()
  })

  test("add holiday and assert by using add button", async({adminpg, page})=>{
      await adminpg.holiday()
      await adminpg.holiday_headingname()
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
      await adminpg.asser_holiday()

  })

//   test("add holiday and assert by using add button", async({adminpg, page})=>{
    
//     await adminpg.holiday()
    

// })
})

test.describe("Full Booking",async()=>{
  test.beforeEach(async({page, baseURL, loginpg})=>{
    await page.goto(`${baseURL}`)
    await loginpg.emailID(data.mail)
    // await page.pause()
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
   if(input){
       console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
   }
   else {
       console.log('Pop-up is not visible.');
   }
  }) 
  test("verify that can able to complete full booking", async({adminpg, page})=>{
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
  test("verify that can able to do pre-booking", async({  adminpg, page})=>{
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
  test("Complete the booking from pre-booking",async({adminpg, page})=>{
      await adminpg.My_bookings()
      await adminpg.pre_booking_assert()
      await adminpg.book_now_from_pre_book()
      await adminpg.continue_to_book()
    //  await page.pause()
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
  test("check that address duplicate is ge", async({adminpg})=>{
     await adminpg
  })

})

test.describe.only("Milestone", async()=>{
  // test.beforeEach(async({page, baseURL, loginpg, adminpg})=>{
  //   test.setTimeout(180000);
  //   var loop
 
  //   await page.goto(`${baseURL}`)
  //   await loginpg.emailID(data.mail)

  //   await loginpg.password("Doko@2023")
  //   await loginpg.sign_in()
  //   await page.waitForTimeout(2000)
  //   const input = await page.isVisible("//h2[text()='User Already Logged In']")
  //  if(input){
  //      console.log('Pop-up is visible.');
  //     await page.click("//button[text()='Yes']")
  //  }
  //  else {
  //      console.log('Pop-up is not visible.');
  //  }
  //  for (loop=0; loop<5; loop++){
  //   // Full Complete Booking
  //   await page.locator("//div[@class='vesseldiv']").click()
  //   await adminpg.continue_to_book()

    
  //   await adminpg.package_0(data.Crates)
  //   await adminpg.length_0("50")
  //   await adminpg.breadth_0("50")
  //   await adminpg.height_0("50")
  //   await adminpg.wpp_0("50")
  //   await adminpg.nop_0("12")
  //   await adminpg.commodity_0(data.commodity)
  //   await adminpg.hsn_0(data.hsncode)
  //   await page.locator("//input[@name='hazardCheck']").check()
  //   await adminpg.continue_to_book()
    
  //  // click on saved address card
  //   await page.locator("(//div[@class='_AddressCard_kyc54_1'])[1]").click() 
  //   await page.waitForTimeout(2000)
  //   await page.locator("input[name='hblName']").type("3244323423")
  //   await adminpg.continue_to_book()

  //   await page.locator("(//div[@class='_AddressCard_kyc54_1'])[1]").click() 
  //   await adminpg.continue_to_book()

  //   await page.locator("(//div[@class='_AddressCard_kyc54_1'])[1]").click() 
  //   await adminpg.continue_to_book()

  //   await adminpg.packinggfileupload()
  //   await adminpg.continue_to_book()

  //   await adminpg.confirm_booking()
  //   await adminpg.pop_up_yes()
  //   await page.locator("//button[text()='Close']").click()

  //   // await page.locator("(//button[text()='View Details '])[1]").click()

  //   await page.locator("//a[contains(text(),'Dashboard')]").click()
  // }

  // }) 
  test("Milestone with basic Flow and PDF check", async({loginpg, adminpg, page, baseURL})=>{
    
    test.setTimeout(180000);
    //await loginpg.logout_mile()
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

    /////CONTAINER AND SEAL NUMBER
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

  //   //SEA WAYBILL DRAFT GENERATED
   
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

      await page.click("//button[text()=' Back']")
      await page.click("//button[text()='Container Management']")
       // select the date from ATD
       await page.click("(//button[@aria-label='Choose date'])[2]")
       await page.click("//button[text()='18']")
      
      await page.click("//button[@type='submit']")
      await page.click("//button[text()='Yes']")
      await page.locator("//input[@placeholder='Search Company Name']").type("sanjai pvt ltd")   // WILL CHANGE
      await page.click("(//button[text()='View Info'])[8]")             // WILL CHANGE

      await page.click("//div[@id='currentStep']//button[1]")
      await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
      await page.click("//button[text()='Confirm']")

      await page.click("//div[@id='currentStep']//button[1]")
      await page.locator("//input[@placeholder='Enter Marks & Numbers']").fill("Marks and Numbers")
      await page.click("//button[text()='Confirm']")

      await page.click("//button[text()=' Back']")
      await page.click("//button[text()='Container Management']")
       // select the date from ATA
       await page.click("(//button[@aria-label='Choose date'])[2]")
       await page.click("//button[text()='26']")
      
      await page.click("//button[@type='submit']")
      await page.click("//button[text()='Yes']")
      await page.locator("//input[@placeholder='Search Company Name']").type("sanjai pvt ltd")     // WILL CHANGE
      await page.click("(//button[text()='View Info'])[8]")            // WILL CHANGE


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
test.only("Milestone with basic Flow and PDF checkcc", async({loginpg, adminpg, page, baseURL})=>{
  test.setTimeout(180000);
  await page.goto(`${baseURL}`)
  await page.pause()  
  await adminpg.oripartner_mile()
  await adminpg.fileupload()

    await loginpg.logout_mile()
})
})

test.describe("My account",async()=>{
  test.beforeEach(async({page, baseURL, loginpg})=>{
    await page.goto(`${baseURL}`)
    await loginpg.emailID(data.mail)
    await loginpg.password(data.password)
    await loginpg.sign_in()
  }) 
  test("verify able to change the details and switch the port ", async({adminpg, page})=>{
    await adminpg.ff_name()
    await adminpg.my_account()
    await adminpg.edit_details()
    await adminpg.edit_fullname(data.numeric_data)
    await adminpg.edit_fullname(data.splcharacter_data)
    await adminpg.edit_fullname(data.space_data)
    await adminpg.edit_fullname(data.full_name)
    await adminpg.edit_mobile(data.phone)
    await adminpg.edit_mobile(data.phone)
    await adminpg.edit_submit()
    await page.reload
    await adminpg.assert_fullname()

  })
  test("urgent", async({adminpg, page})=>{
    await page.locator("(//div[@class='detaildiv'])[1]").click()
    await page.locator("//button[text()='Continue to Book']").click()
    const p = await page.locator("//select[@name='cargoDetails.0.packageType']")
    await p.selectOption("Pallets")
    for (let q=1; q<505; q++){
      //await adminpg.hsn_0(data.hsn_restrict[])
    }
    


  })
})