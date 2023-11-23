import { Page, expect } from "@playwright/test";

export default class{
     constructor(public page:Page){}
       async sin_activeclck(){
        await this.page.locator("(//a[text()='Active'])[3]").click()
       }  
       async activeclck(){
         await this.page.locator("(//a[text()='Active'])[1]").click()
        }   
        async thailand_1(){
         await expect(this.page.locator("(//td[text()='TH (Thailand Port)'])[1]")).toHaveText("TH (Thailand Port)")
      }   
      async france_1(){
         await expect(this.page.locator("(//td[text()='FRA (France Port)'])[1]")).toHaveText("FRA (France Port)")
      }
      async hongkong_1(){
         await expect(this.page.locator("(//td[text()='HKHKG (Chek Lap Kok)'])[1]")).toHaveText("HKHKG (Chek Lap Kok)")
      }   
       async singapore_1(){
          await expect(this.page.locator("(//td[text()='SIN(Singapore Port)'])[1]")).toHaveText("SIN(Singapore Port)")
       }
       async dubai_1(){
         await expect(this.page.locator("(//td[text()='DXB (Dubai Port)'])[1]")).toHaveText("DXB (Dubai Port)")
      }
       async germany_1(){
         await expect(this.page.locator("(//td[text()='DEU (Germany Port)'])[1]")).toHaveText("DEU (Germany Port)")
      }
       async chennai_1(){
         await expect(this.page.locator("(//td[text()='INMAA(Chennai)'])[1]")).toHaveText("INMAA(Chennai)")
       }   
       async cmp_1(){
          await expect(this.page.locator("(//td[text()='Advance Machinery Co Ltd'])[1]")).toHaveText("Advance Machinery Co Ltd")
       }  
       async cmp(){
         await expect(this.page.locator("(//td[text()='All shipper company'])[1]")).toHaveText("All shipper company")
      }          
       async bookeddate_1(){
         await expect(this.page.locator("(//td[text()='06-02-2023'])[1]")).toHaveText("06-02-2023")
      }      
       async Booking_Id(){
          await expect(this.page.locator("//th[text()='Booking Id']")).toBeVisible()
       }
       async POL(){
          await expect(this.page.locator("//th[text()='POL']")).toBeVisible()
       }
       async POD(){
          await expect(this.page.locator("//th[text()='POD']")).toBeVisible()
       }
       async Incoterm(){
          await expect(this.page.locator("//th[text()='Incoterm']")).toBeVisible()
       }
       async SHIPPER(){
          await expect(this.page.locator("//th[text()='SHIPPER']")).toBeVisible()
       }
       async ETD(){
          await expect(this.page.locator("//th[text()='ETD']")).toBeVisible()
       }
       async ETA(){
          await expect(this.page.locator("//th[text()='ETA']")).toBeVisible()
       }
       async Booked_Date(){
          await expect(this.page.locator("//th[text()='Booked Date']")).toBeVisible()
       }
       async Action(){
          await expect(this.page.locator("//th[text()='Action']")).toBeVisible()
       }
       async mybook_airtitle(){
          await expect(this.page.locator("//h2[text()='Air Bookings']")).toBeVisible()
       }
       async mybook_number_of_bookings5(){
          await expect(this.page.locator("//label[text()='5']")).toBeVisible()
       }
       async mybook_number_of_bookings6(){
          await expect(this.page.locator("//label[text()='6']")).toBeVisible()
       } 
       async mybook_number_of_bookings1(){
          await expect(this.page.locator("//label[text()='1']")).toBeVisible()
       } 
       async mybook_number_of_bookings0(){
          await expect(this.page.locator("//label[text()='0']")).toBeVisible()
       }
       async port_select(Port:string){
        const port =  await this.page.locator("//select[@id='rOrigin']")
        await port.selectOption(Port)
       }
       async bookingsID(){
          await expect(this.page.locator("//input[@id='firstName']")).toBeVisible()
       }
       async mybook_pol(){
         await this.page.locator("//div[text()='SIN(Singapore Port)']")
       }
       async mile_1(){
         await this.page.locator("//span[text()='Pre-Booking Received']").click()
       }
       async mile_2(){
         await this.page.locator("//span[text()='Pre-Booking Sent to Shipper']").click()
       }
       async mile_3(){
         await this.page.locator("//span[text()='Shipper Accepted the Booking']").click()
       }
       async mile_4(){
         await this.page.locator("//span[text()='Booking Confirmed']").click()
       }
       async mile_5(){
         await this.page.locator("//span[text()='Origin Partner Generated and Uploaded AWB']").click()
       }
       async mile_6(){
         await this.page.locator("//span[text()='Pick Confirmed']").click()
       }
       async mile_nopick(){
         await expect(this.page.locator("//span[text()='Pick Confirmed']")).not.toBeVisible()
       }
       async mile_7(){
         await this.page.locator("//span[text()='Cargo reached at Origin Airport']").click()
       }
       async mile_8(){
         await this.page.locator("//span[text()='AWB Tracking is Live']").click()
       }
       async mile_9(){
         await this.page.locator("//span[text()='Departed from Airport']").click()
       }
       async mile_10(){
         await this.page.locator("//span[text()='Arrival at Destination Airport']").click()
       }
       async mile_11(){
         await this.page.locator("//span[text()='DO Released']").click()
       }
       async mile_12(){
         await this.page.locator("(//span[@class='MuiStepLabel-label MuiStepLabel-alternativeLabel css-2fdkz6'])[9]").click()
       }
       async mile_nodrop(){
         await expect(this.page.locator("(//span[@class='MuiStepLabel-label MuiStepLabel-alternativeLabel css-2fdkz6'])[9]")).not.toBeVisible()
       }
       async Quote_tab(){
         await this.page.locator("//button[text()='Quote']").click()
       }
       async Documents_tab(){
         await this.page.locator("//button[text()='Documents']").click()
       }
       
       
       
       
       
       
       
       
       
       
       
       
       
       
}








