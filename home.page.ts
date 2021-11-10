import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get logout () { return $("//*[contains(@class,'radius')]") }
    get message () { return $('#flash') }
    get content () {return $("//*[@class='subheader']")}
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async verifyHomePage () {
        browser.pause(2000);
        console.log(await this.message.getText());
        await expect(this.message).toBeExisting();
        
    }

    /**
     * overwrite specific options to adapt it to page object
     */
  //  open () {
    //    return super.open('login');
    //}
}

export default new HomePage();
