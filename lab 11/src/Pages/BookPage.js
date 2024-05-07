const { By , until } = require("selenium-webdriver");

class BookPage {
  constructor(driver) {
    this.driver = driver;
  }

  async addToDeferred() {
    await this.driver.wait(until.elementLocated(By.className("FunctionalButton_funcButton__moEBh FunctionalButton_funcButton_medium__hUt2p FunctionalBlock_button__7Pa5c FunctionalBlock_button_adaptive__u_Asi")), 10000).click();
    }

    async addToCart() {
        await this.driver.wait(until.elementLocated(By.xpath("//*[@data-testid='book__addToCartButton']")), 10000).click();
    }
    
    async addToReadetList() {
        await this.driver.wait(until.elementLocated(By.xpath("//*[@data-analytics-id='finish-button']")), 10000).click();
    }
    
}


module.exports = BookPage;