import homePage from '../pageobjects/home.page';
import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('verify login/home page', () =>{
it('verify the login and home page', async () =>{
    await LoginPage.open();
    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    await homePage.verifyHomePage();
    
 
})


});


