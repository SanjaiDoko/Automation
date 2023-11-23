import {test as baseTest} from '@playwright/test'
import Register from '../Dokonaly_Air_Pom/Register'
import Login from '../Dokonaly_Air_Pom/login'
import Booking from '../Dokonaly_Air_Pom/NewBooking'
import MyBooking from '../Dokonaly_Air_Pom/MyBooking'

type pages= { 
 registerPage :Register
 loginpage :Login
 bookingpage :Booking
 mybookingpage :MyBooking
}

const testpages= baseTest.extend<pages>({
    registerPage: async({page},use)=>{
        await use(new Register(page))
    },
    loginpage: async({page},use)=>{
        await use(new Login(page))
    },
    bookingpage: async({page},use) => {
        await use(new Booking(page))
    },
    mybookingpage: async({page},use)=>{
        await use(new MyBooking(page))
    }

})

export const test=testpages
export const expect = testpages.expect