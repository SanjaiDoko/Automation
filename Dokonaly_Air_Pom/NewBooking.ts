import { expect, Page } from "@playwright/test";

export default class{
    constructor(public page : Page){}
    async newbook(){
        await this.page.waitForLoadState()
        await this.page.locator("//a[contains(text(),'New Booking')]").click()
    }
    async mybook(){
        await this.page.waitForTimeout(1000)
        await this.page.locator("//a[contains(text(),'My Booking')]").click()
    }
    async air(){
        await this.page.waitForLoadState()
        await this.page.locator("//a[text()='Air']").click()
    }
    async lcl(){
        await this.page.waitForLoadState()
        await this.page.locator("//a[text()='Lcl']").click()
    }
    async stackable(){
        await this.page.locator("//label[text()='Stackable']").click()
    }
    async origin(ori:string){
        const origin=  await this.page.locator("//select[@name='rOrigin']")
        await origin.selectOption(ori)
      }
      async destination(dest:string){
        const destination=  await this.page.locator("//select[@name='rDestination']")
        await destination.selectOption(dest)
      }
      async date(dates:string){
        await this.page.fill("//input[@name='rDate']", dates)
      }
      async incoterm_exw(){
        await this.page.locator("//input[@id='gridRadios1']").click()
      }
      async incoterm_fca(){
        await this.page.locator("//input[@id='gridRadios2']").click()
      }
      async incoterm_fob(){
        await this.page.locator("//input[@id='gridRadios']").click()
      }
      async zipcode(zip:string){
        const zipc=  await this.page.locator("//select[@name='rOriginZipcode']")
        await zipc.selectOption(zip)
      }
      async place(place:string){
        const placec=  await this.page.locator("//select[@name='rOriginPlace']")
        await placec.selectOption(place)
      }
      async nxt(){
        await this.page.locator("//button[@class='nextbtn']").click()
      }
      async spl_l_num_not_allowed(){
        await expect(this.page.locator("(//p[text()='Alphabets or Special characters is not allowed'])[1]")).toBeVisible()
      }
      async spl_w_num_not_allowed(){
        await expect(this.page.locator("(//p[text()='Alphabets or Special characters is not allowed'])[2]")).toBeVisible()
      }
      async spl_h_num_not_allowed(){
        await expect(this.page.locator("(//p[text()='Alphabets or Special characters is not allowed'])[3]")).toBeVisible()
      }
      async spl_n_num_not_allowed(){
        await expect(this.page.locator("(//p[text()='Alphabets or Special characters is not allowed'])[4]")).toBeVisible()
      }
      async spl_wei_num_not_allowed(){
        await expect(this.page.locator("(//p[text()='Alphabets or Special characters is not allowed'])[5]")).toBeVisible()
      }
      async num_l_not_allowed(){
        await expect(this.page.locator("//p[text()='Length should not be zero']")).toBeVisible()
      }
      async num_r_not_allowed(){
        await expect(this.page.locator("//p[text()='Radius should not be zero']")).toBeVisible()
      }
      async num_w_not_allowed(){
        await expect(this.page.locator("//p[text()='Width should not be zero']")).toBeVisible()
      }
      async num_h_not_allowed(){
        await expect(this.page.locator("//p[text()='Height should not be zero']")).toBeVisible()
      }
      async num_no_not_allowed(){
        await expect(this.page.locator("//p[text()='Number of packages should not be zero']")).toBeVisible()
      }
      async num_wei_not_allowed(){
        await expect(this.page.locator("//p[text()='Weight per packages should not be zero']")).toBeVisible()
      }
      async num_com_not_allowed(){
        await expect(this.page.locator("//p[text()='Number should not be entered']")).toBeVisible()
      }
      async type(type:string){
        const typec=  await this.page.locator("//select[@name='dimensionData.0.type']")
        await typec.selectOption(type)
      }
      async metric(metric:string){
        const metricc=  await this.page.locator("//select[@name='dimensionData.0.metric']")
        await metricc.selectOption(metric)
      }
      async len(len:string){
        await this.page.locator("//input[@name='dimensionData.0.length']").fill(len)
    }
    async wid(wid:string){
        await this.page.locator("//input[@name='dimensionData.0.width']").fill(wid)
    }
    async radius(rad:string){
        await this.page.locator("//input[@name='dimensionData.0.radius']").fill(rad)
    }
    async height(height:string){
        await this.page.locator("//input[@name='dimensionData.0.height']").fill(height)
    }
    async no_of_pack(no_of_pack:string){
        await this.page.locator("//input[@name='dimensionData.0.noOfPackages']").fill(no_of_pack)
    }
    async weight_per(weight_per:string){
        await this.page.locator("//input[@name='dimensionData.0.weight']").fill(weight_per)
    }
    async commodity(commodity:string){
        await this.page.locator("//input[@name='dimensionData.0.commodity']").fill(commodity)
    }
    async commodity_rem(){
        await this.page.locator("//input[@name='dimensionData.0.commodity']").clear()
    }
    async hsn_code(hsn_code:string){
      await this.page.locator("div#hsncode0>div>div>div:nth-of-type(2)>INPUT").type(hsn_code)
    }

    async type_1(type:string){
        const typec=  await this.page.locator("//select[@name='dimensionData.1.type']")
        await typec.selectOption(type)
      }
      async metric_1(metric:string){
        const metricc=  await this.page.locator("//select[@name='dimensionData.1.metric']")
        await metricc.selectOption(metric)
      }
      async len_1(len:string){
        await this.page.locator("//input[@name='dimensionData.1.length']").fill(len)
    }
    async wid_1(wid:string){
        await this.page.locator("//input[@name='dimensionData.1.width']").fill(wid)
    }
    async radius_1(rad:string){
        await this.page.locator("//input[@name='dimensionData.1.radius']").fill(rad)
    }
    async height_1(height:string){
        await this.page.locator("//input[@name='dimensionData.1.height']").fill(height)
    }
    async no_of_pack_1(no_of_pack:string){
        await this.page.locator("//input[@name='dimensionData.1.noOfPackages']").fill(no_of_pack)
    }
    async weight_per_1(weight_per:string){
        await this.page.locator("//input[@name='dimensionData.1.weight']").fill(weight_per)
    }
    async commodity_1(commodity:string){
        await this.page.locator("//input[@name='dimensionData.1.commodity']").fill(commodity)
    }
    async hsn_code_1(hsn_code:string){
      await this.page.locator("div#hsncode1>div>div>div:nth-of-type(2)>INPUT").type(hsn_code)
    }
    async hsn_code_rem(){
        await this.page.locator("div#hsncode0>div>div>div:nth-of-type(2)>INPUT").clear()
      }
      async show_quotes(){
        await this.page.locator("//button[text()='Show Quotes']").click()
      }
      async diabled_show_quotes(){
        await expect(this.page.locator("//button[text()='Show Quotes']")).not.toBeVisible()
      }
      async orival(){
        await expect(this.page.locator("//p[text()='Please Select the Origin']")).toBeVisible()
    }
    async desval(){
        await expect(this.page.locator("//p[text()='Please Select the Destination']")).toBeVisible()
    }
    async dateval(){
       
        await expect(this.page.locator("//p[text()='Please Enter the Date']")).toBeVisible()
    }
    async incoval(){
        
        await expect(this.page.locator("//p[text()='IncoTerm must be selected']")).toBeVisible()
    }
    async zipval(){
        
        await expect(this.page.locator("//p[text()='Please Select the Zipcode']")).toBeVisible()
    } 
    async placeval(){
        
        await expect(this.page.locator("//p[text()='Please Select the Place']")).toBeVisible()
    }
    async nozipval(){
        
        await expect(this.page.locator("//p[text()='Please Select the Zipcode']")).not.toBeVisible()
    } 
    async noplaceval(){
        
        await expect(this.page.locator("//p[text()='Please Select the Place']")).not.toBeVisible()
    }
    async typeval(){
        
        await expect(this.page.locator("//p[text()='Type is required']")).toBeVisible()
    }
    async metval(){
        
        await expect(this.page.locator("//p[text()='Metric is required']")).toBeVisible()
    }
    async lenval(){
        
        await expect(this.page.locator("//p[text()='Length is required']")).toBeVisible()
    }
    async widval(){
        
        await expect(this.page.locator("//p[text()='width is required']")).toBeVisible()
    }
    async heival(){
        
        await expect(this.page.locator("//p[text()='Height is required']")).toBeVisible()
    }
    async No_of_val(){
        
        await expect(this.page.locator("//p[text()='Number of packages is required']")).toBeVisible()
    }
    async Weight_per_val(){
        
        await expect(this.page.locator("//p[text()='Weight per packages is required']")).toBeVisible()
    }
    async comval(){
        
        await expect(this.page.locator("//p[text()='Commodity is required']")).toBeVisible()
    }
    async hsnval(){
        await expect(this.page.locator("//p[text()='HSN Code is required']")).toBeVisible()
    }
    async hsn_desc_val(){
        await expect(this.page.locator("//p[text()='HSN Description is required']")).toBeVisible()
    }
    
    async radval(){
        
        await expect(this.page.locator("//p[text()='Radius is required']")).toBeVisible()
    }
    async note_msg(){
        
        await expect(this.page.locator("//p[text()='The chargeable weight should not be more than 3000 KG']")).toBeVisible()
    }
    async nolenval(){
        
        await expect(this.page.locator("//p[text()='Length is required']")).not.toBeVisible()
    }
    async nowidval(){
        
        await expect(this.page.locator("//p[text()='width is required']")).not.toBeVisible()
    }
    async addbutton(){
        await this.page.locator("//button[text()='Add']").click()
    }
    async removebutton_f(){
        const rem =await this.page.locator("(//button[@class='removebtn'])[1]")
        await rem.scrollIntoViewIfNeeded()
        await rem.click()
    }
    async removebutton_s(){
        const rem=await this.page.locator("(//button[@class='removebtn'])[2]")
        await rem.scrollIntoViewIfNeeded()
        await rem.click()
    }
    async removebutton_t(){
        const rem=await this.page.locator("(//button[@class='removebtn'])[3]")
        await rem.scrollIntoViewIfNeeded()
        await rem.click()
    }
    async fortyfive_gross(){
        await expect(this.page.locator("(//b[text()='45'])[1]")).toBeVisible()
    }
    async fortyfive_charge(){
        await expect(this.page.locator("(//b[text()='45'])[2]")).toBeVisible()
    }
    async sixtyseven_charge(){
        await expect(this.page.locator("//b[text()='67']")).toBeVisible()
    }
    async sixtyseven_gross(){
        await expect(this.page.locator("//b[text()='67']")).toBeVisible()
    }
    async fortyhundred_gross(){
        await expect(this.page.locator("(//b[text()='400'])[1]")).toBeVisible()
    }
    async fortyhundred_charge(){
        await expect(this.page.locator("(//b[text()='400'])[2]")).toBeVisible()
    }
    async three001_charge(){
        await expect(this.page.locator("(//b[text()='3001'])[2]")).toBeVisible()
    }
    async twonine(){
        await expect(this.page.locator("//b[text()='29403']")).toBeVisible()
    }
    async oneeight(){
        await expect(this.page.locator("//b[text()='188166']")).toBeVisible()
    }
    async onefour(){
        await expect(this.page.locator("//b[text()='144']")).toBeVisible()
    }
    async twentyfour(){
        await expect(this.page.locator("//b[text()='2463']")).toBeVisible()
    }
    async thirtysix_gross(){
        await expect(this.page.locator("(//b[text()='3600'])[1]")).toBeVisible()
    }
    async thirtysix_charge(){
        await expect(this.page.locator("(//b[text()='3600'])[2]")).toBeVisible()
    }
    async heival_sin(){
        await expect(this.page.locator("//p[text()='Height should be on or less than 95 CM or 37.4 Inches']")).toBeVisible()
    }
    async hei_no_val_sin(){
        await expect(this.page.locator("//p[text()='Height should be on or less than 95 CM or 37.4 Inches']")).not.toBeVisible()
    }
    async onefour_ori_gross(){
        await expect(this.page.locator("(//b[text()='144'])[1]")).toBeVisible()
    }
    async onefour_ori_charge(){
        await expect(this.page.locator("(//b[text()='144'])[2]")).toBeVisible()
    }
    async onefour_gross(){
        await expect(this.page.locator("(//b[text()='3001'])[1]")).toBeVisible()
    }
    async onefour_charge(){
        await expect(this.page.locator("(//b[text()='3001'])[2]")).toBeVisible()
    }
     async three001_gross(){
         await expect(this.page.locator("(//b[text()='3001'])[1]")).toBeVisible()
     }
    async six696_charge(){
        await expect(this.page.locator("//b[text()='6696']")).toBeVisible()
    }
    async norm_gross(){
        await expect(this.page.locator("//b[text()='4']")).toBeVisible()
    }
    async eleven_four_five(){
        await expect(this.page.locator("//b[text()='1145']")).toBeVisible()
    }
    async fifteenthousand_four(){
        await expect(this.page.locator("//b[text()='15463']")).toBeVisible()
    }
    async twoeighty_eight(){
        await expect(this.page.locator("//b[text()='288']")).toBeVisible()
    }
    async fourthousand_twentyfive(){
        await expect(this.page.locator("//b[text()='4925']")).toBeVisible()
    }
    async three_sixtyfive(){
        await expect(this.page.locator("//b[text()='365']")).toBeVisible()
    }
    async twoeighty_eight_1(){
        await expect(this.page.locator("(//b[text()='288'])[1]")).toBeVisible()
    }
    async twoeighty_eight_2(){
        await expect(this.page.locator("(//b[text()='288'])[2]")).toBeVisible()
    }
    async currency_selector(cur:string){
    const select=await this.page.locator("//button[text()='Add Services']/following-sibling::select")    
    await select.selectOption(cur)
    }
    async addservices_button(){
        await this.page.locator("//button[text()='Add Services']").click()
    }
    async add_serv_type(type:string){
    const select=await this.page.locator("//select[@name='typeSez']")    
    await select.selectOption(type)
    }
    async addservices_customs(){
        await this.page.locator("//span[text()='Destination Customs']").click()
    }
    async addservices_drop(){
        await this.page.locator("//span[text()='Destination Drop']").click()
    }
    async drop_sezpincode(type:string){
        const select=await this.page.locator("//select[@name='addTPincode']")    
        await select.selectOption(type)
        }
        async drop_sezplace(type:string){
            const select=await this.page.locator("//select[@name='addTplace']")    
            await select.selectOption(type)
            }
    async drop_nonpincode(type:string){
        const select=await this.page.locator("//select[@name='addPincode']")    
        await select.selectOption(type)
        }
        async drop_nonplace(type:string){
            const select=await this.page.locator("//select[@name='addplace']")    
            await select.selectOption(type)
            }
    async insurance(){
        await this.page.locator("//label[text()='Cargo Insurance']").click()
     }
    async insurance_cur(addcur:string){
    const select=await this.page.locator("//select[@style='width: 70px; padding: 7px 0px 5px;']")    
    await select.selectOption(addcur)
    }
    async insurance_value(val:string){
        await this.page.locator("//input[@name='insuranceValue']").fill(val)
     }
    async carbonOffset(){
        await this.page.locator("//label[@for='flexCheckDefaultoffset']").click()
    }
    async savechanges(){
        await this.page.locator("//button[text()='Save Changes']").click()
    }
    async cancel(){
        await this.page.locator("//button[text()='Cancel']").click()
    }
    
    async Frequency(){
        await expect(this.page.locator("(//span[text()='Frequency'])[1]")).toBeVisible()
    }
    async Routing(){
        await expect(this.page.locator("(//span[text()='Routing'])[1]")).toBeVisible()
    }
    async Booking_Cutoff(){
        await expect(this.page.locator("(//span[text()='Booking Cutoff'])[1]")).toBeVisible()
    }
    async Cargo_Handover_Cutoff(){
        await expect(this.page.locator("(//span[text()='Cargo Handover Cutoff'])[1]")).toBeVisible()
    }
    async ETD(){
        await expect(this.page.locator("(//span[text()='ETD'])[1]")).toBeVisible()
    }
    async ETA(){
        await expect(this.page.locator("(//span[text()='ETA'])[1]")).toBeVisible()
    }
    async Origin(){
        await expect(this.page.locator("(//h5[text()='Origin'])[1]")).toBeVisible()
    }
    async Pick(){
        let pick=await this.page.locator("(//span[text()='Pick'])[1]")
        await pick.scrollIntoViewIfNeeded()
        await expect(pick).toBeVisible()
    }
    async handling(){
        await expect(this.page.locator("(//span[text()='handling'])[1]")).toBeVisible()
    }
    async origincustoms(){
        await expect(this.page.locator("(//span[text()='origincustoms'])[1]")).toBeVisible()
    }
    async terminal(){
        await expect(this.page.locator("(//span[text()='terminal'])[1]")).toBeVisible()
    }
    async x_ray(){
        let ray=await this.page.locator("(//span[text()='x-ray'])[1]")
        await ray.scrollIntoViewIfNeeded()
        await expect(ray).toBeVisible()
    }
    async Freight(){
        await expect(this.page.locator("(//h5[text()='Freight'])[1]")).toBeVisible()
    }
    async fsc(){
        await expect(this.page.locator("(//span[text()='fsc'])[1]")).toBeVisible()
    }
    async freight(){
        await expect(this.page.locator("(//span[text()='freight'])[1]")).toBeVisible()
    }
    async ssc(){
        await expect(this.page.locator("(//span[text()='ssc'])[1]")).toBeVisible()
    }
    async Destination(){
        await expect(this.page.locator("(//h5[text()='Destination'])[1]")).toBeVisible()
    }
    async do(){
        await expect(this.page.locator("(//span[text()='do'])[1]")).toBeVisible()
    }
    async non_sez_customs(){
        await expect(this.page.locator("(//span[text()='Non-Sez Destination Customs'])[1]")).toBeVisible()
    }
    async non_sez_drop(){
        await expect(this.page.locator("(//span[text()='Drop Non-Sez'])[1]")).toBeVisible()
    }
    async sez_customs(){
        await expect(this.page.locator("(//span[text()='Sez Destination Customs'])[1]")).toBeVisible()
    }
    async sez_drop(){
        await expect(this.page.locator("(//span[text()='Drop Sez'])[1]")).toBeVisible()
    }
    async Co(){
        let co=await this.page.locator("(//h5[text()='Co'])[1]")
        await co.scrollIntoViewIfNeeded()
        await expect(co).toBeVisible()

    }
    async Insurance(){
        let insu=await this.page.locator("(//h5[text()='Insurance'])[1]")
        await insu.scrollIntoViewIfNeeded()
        await expect(insu).toBeVisible()
    }
    async quote_down(){
        let down =await this.page.locator("#down-arrow0")
        await down.scrollIntoViewIfNeeded()
        await down.click()
    }
    async quote_up(){
        let up=await this.page.locator("(//div[@class='downarrow'])[1]")
        await up.scrollIntoViewIfNeeded()
        await up.click()

    }
    async origin_total_sin(){
        await expect(this.page.locator("(//span[@id='originid'])[1]")).toBeVisible()
        await expect(this.page.locator("(//span[@id='originid'])[1]")).toContainText('SGD')
    }
    async freight_total_sin(){
        await expect(this.page.locator("(//span[@id='freightid'])[1]")).toBeVisible()
        await expect(this.page.locator("(//span[@id='freightid'])[1]")).toContainText('SGD')
    }
    async destination_total_sin(){
        await expect(this.page.locator("(//span[@id='destinationid'])[1]")).toBeVisible()
        await expect(this.page.locator("(//span[@id='destinationid'])[1]")).toContainText('INR')
    }
    async total_sin(){
        await expect(this.page.locator("(//span[@id='totalid'])[1]")).toBeVisible()
        await expect(this.page.locator("(//span[@id='totalid'])[1]")).toContainText('INR')
    }
    async quote_submit(){
        await this.page.locator("(//button[text()='Submit'])[1]").click()
    }
    async add_fn(fn:string){
        await this.page.locator("//input[@id='firstName']").type(fn)
    }
    async add_ln(ln:string){
        await this.page.locator("//input[@id='lastName']").type(ln)
    }
    async add_mail(mail:string){
        await this.page.locator("//input[@id='email']").type(mail)
    }
    async add_ph_code(ph:string){
        await this.page.locator("(//label[text()='Mobile Number']/following::input)[1]").type(ph)
    }
    async add_number(fn:string){
        await this.page.locator("//input[@id='mobileNumber']").type(fn)
    }
    async shi_companyName(fn:string){
        await this.page.locator("//input[@id='companyName']").type(fn)
    }
    async shi_buildingName(fn:string){
        await this.page.locator("//input[@id='buildingName']").type(fn)
    }
    async shi_doorNo(fn:string){
        await this.page.locator("//input[@id='doorNo']").type(fn)
    }
    async shi_streetName(fn:string){
        await this.page.locator("//input[@id='streetName']").type(fn)
    }
    async shi_area(fn:string){
        await this.page.locator("//input[@id='area']").type(fn)
    }
    async shi_country(fn:string){
        await this.page.locator("//input[@id='country']").type(fn)
    }
    async shi_state(fn:string){
        const state=await this.page.locator("//select[@id='state']")
        await state.selectOption(fn)
    }
    async shi_district(fn:string){
        const district=await this.page.locator("//select[@id='district']")
        await district.selectOption(fn)
    }
    async shi_zipcode(fn:string){
        const zipcode=await this.page.locator("//select[@id='zipcode']")
        await zipcode.selectOption(fn)
    }
    async shi_city(fn:string){
       const city= await this.page.locator("//select[@id='city']")
       await city.selectOption(fn)
    }
    async shi_country_exw(){
        await expect(this.page.locator("//input[@id='country']")).toBeDisabled()
    }
    async shi_state_exw(){
        await expect(this.page.locator("//input[@id='state']")).toBeDisabled()
    }
    async shi_district_exw(){
        await expect(this.page.locator("//input[@id='district']")).toBeDisabled()
    }
    async shi_addresszipcode_exw(){
        await expect(this.page.locator("//input[@id='zipcode']")).toBeDisabled()
    }
    async shi_city_exw(){
        await expect(this.page.locator("//input[@id='city']")).toBeDisabled()
    }
    async shi_add(){
        await expect(this.page.locator("//span[text()='Shipper Address']")).toBeVisible()
    }
    async con_add(){
        await expect(this.page.locator("//span[text()='Consignee Address']")).toBeVisible()
    }
    async Book_sum(){
        await expect(this.page.locator("//span[text()='Booking Summary']")).toBeVisible()
    }
    async shi_nxt(){
        await this.page.locator("//button[text()='Next']").click()
    }
    async lcl_po(po:string){
        await this.page.locator("//input[@id='poRefNo']").fill(po)
    }
    async saved_shi_comp(){
        await expect(this.page.locator("//td[text()='dummy com']")).toHaveText("dummy com")
    }
    async del_gst(fn:string){
        await this.page.locator("//input[@id='GstNoConsignee']").type(fn)
    }
    async del_gst_file(fn:string){
        await this.page.locator("//input[@name='CGstFile']").setInputFiles(fn)
    }
    async del_company(){
        await expect(this.page.locator("//input[@id='companyNameConsignee']")).toBeDisabled()
    }
    async del_branch(fn:string){
        await this.page.locator("//input[@id='buildingBranchConsignee']").type(fn)
    }
    async del_doorno(fn:string){
        await this.page.locator("//input[@id='doorNoConsignee']").type(fn)
    }
    async del_streetname(fn:string){
        await this.page.locator("//input[@id='streetNameConsignee']").type(fn)
    }
    async del_areaname(fn:string){
        await this.page.locator("//input[@id='areaConsignee']").type(fn)
    }
    async del_country_all(){
        await expect(this.page.locator("//input[@id='countryConsignee']")).toBeDisabled()
    }
    async del_state_exw(){
        await expect(this.page.locator("//input[@id='stateConsignee']")).toBeDisabled()
    }
    async del_district_exw(){
        await expect(this.page.locator("//input[@id='districtConsignee']")).toBeDisabled()
    }
    async del_pincode_exw(){
        await expect(this.page.locator("//input[@id='pincodeConsignee']")).toBeDisabled()
    }
    async del_city_exw(){
        await expect(this.page.locator("//textarea[@id='cityConsignee']")).toBeDisabled()
    }
    async del_state(fn:string){
        await this.page.locator("//input[@id='stateConsignee']").type(fn)
    }
    async del_district(fn:string){
        await this.page.locator("//input[@id='districtConsignee']").type(fn)
    }
    async del_pincode(fn:string){
        await this.page.locator("//input[@id='pincodeConsignee']").type(fn)
    }
    async del_city(fn:string){
        await this.page.locator("//textarea[@id='cityConsignee']").type(fn)
    } 
    async del_buildingname(fn:string){
        await this.page.locator("//input[@id='buildingNameConsignee']").type(fn)
    }


    async bill_gst(fn:string){
        await this.page.locator("//input[@id='GstNoBilling']").type(fn)
    }
    async bill_gst_file(fn:string){
        await this.page.locator("//input[@name='BGstFile']").setInputFiles(fn)
    }
    async bill_company(){
        await expect(this.page.locator("//input[@id='companyNameBilling']")).toBeDisabled()
    }
    async bill_branch(fn:string){
        await this.page.locator("//input[@id='buildingBranchBilling']").type(fn)
    }
    async bill_doorno(fn:string){
        await this.page.locator("//input[@id='doorNoBilling']").type(fn)
    }
    async bill_streetname(fn:string){
        await this.page.locator("//input[@id='streetNameBilling']").type(fn)
    }
    async bill_areaname(fn:string){
        await this.page.locator("//input[@id='areaBilling']").type(fn)
    }
    async bill_country_all(){
        await expect(this.page.locator("//input[@id='countryBilling']")).toBeDisabled()
    }
    async bill_state(fn:string){
        await this.page.locator("(//label[text()='State / Province']/following::input)[1]").type(fn)
    }
    async bill_district(fn:string){
        await this.page.waitForTimeout(4900)
        await this.page.locator("(//label[text()='District']/following::input)[1]").type(fn)
    }
    async bill_pincode(fn:string){
        await this.page.waitForTimeout(1000)
        await this.page.locator("(//label[text()='Pincode']/following::input)[1]").type(fn)
    }
    async bill_city(fn:string){
        await this.page.waitForTimeout(1000)
        await this.page.locator("(//label[text()='City / Place']/following::input)[1]").type(fn)
    } 
    async bill_buildingname(fn:string){
        await this.page.locator("//input[@id='buildingNameBilling']").type(fn)
    }

    async confirm_booking(){
        await this.page.locator("//button[text()='Confirm Booking']").click()
    }
    async proceed(){
        await this.page.locator("//button[text()='Proceed']").click()
    }
    async no_mybookings(){
        await expect(this.page.locator("(//a[@class='nextbtn'])[1]")).not.toBeVisible()
    }
    async bill_to_checkbox(){
        await this.page.locator("//input[@id='billAddress']").click()
    }
    async saved_address(){
        await this.page.locator("//button[text()='Saved Addresses']").click()
    }
    async del_saved_address(){
        await this.page.locator("(//button[text()='Saved Addresses'])[1]").click()
    }
    async bill_saved_address(){
        await this.page.locator("(//button[text()='Saved Addresses'])[2]").click()
    }
    async saved_close_icon(){
        await this.page.locator("//span[@class='closeIcon']").click()
    }   
    async saved_no_use_button(){
        await expect(this.page.locator("(//button[text()='Use'])[1]")).not.toBeVisible()
    }
    async saved_use_button(){
        await this.page.locator("(//button[text()='Use'])[1]").click()
    }
    async saved_use_button_1(){
        await expect(this.page.locator("(//button[text()='Use'])[1]")).toBeVisible()
    }
    async saved_use_button_2(){
        await expect(this.page.locator("(//button[text()='Use'])[2]")).toBeVisible()
    }
    async saved_second_no_use_button(){
        await expect(this.page.locator("(//button[text()='Use'])[2]")).not.toBeVisible()
    }
    async addservicetoast(){    
        await this.page.waitForLoadState()
        await expect(this.page.locator("//div[text()='Additional Services added']")).toBeVisible()
        await expect(this.page.locator("//div[text()='Additional Services added']")).toHaveText("Additional Services added")
    }
    async gstuploadtoast(){    
        await this.page.waitForLoadState()
        await expect(this.page.locator("//div[text()='GST File uploaded Successfully']")).toBeVisible()
        await expect(this.page.locator("//div[text()='GST File uploaded Successfully']")).toHaveText("GST File uploaded Successfully")
    }
    async delgstremoveuploadtoast(){    
        await this.page.waitForLoadState()
        await expect(this.page.locator("//div[text()='Consignee GST File Removed']")).toBeVisible()
        await expect(this.page.locator("//div[text()='Consignee GST File Removed']")).toHaveText("Consignee GST File Removed")
    }
    async billgstremoveuploadtoast(){    
        await this.page.waitForLoadState()
        await expect(this.page.locator("//div[text()='Billing GST File Removed']")).toBeVisible()
        await expect(this.page.locator("//div[text()='Billing GST File Removed']")).toHaveText("Billing GST File Removed")
    }
    async bookconfirmtoast(){    
        await this.page.waitForNavigation({waitUntil:'networkidle'})
        await expect(this.page.locator("//div[text()='Booking confirmed successfully']")).toBeVisible()
        await expect(this.page.locator("//div[text()='Booking confirmed successfully']")).toHaveText("Booking confirmed successfully")
    }
    
    
    
    


}
