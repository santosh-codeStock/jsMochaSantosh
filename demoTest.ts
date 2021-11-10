import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('verify login/home page', () =>{
it('verify the login and home page', async () =>{
    await browser.url("https://the-internet.herokuapp.com/login");
    const userid=$("//*[@id='username']")
    const password=$("//*[@id='password']")
    const submit=$("//*[@type='submit']")
    const logout=$("//*[contains(@class,'radius')]")
    const message=$("#flash")

    //use await before browser to verify the title
    expect(await browser.getTitle()).toEqual('The Internet')

    await userid.setValue('tomsmith')
    await password.setValue('SuperSecretPassword!')
    await submit.click()

    await expect(message).toHaveTextContaining('You logged into a secure area!')


})


});


