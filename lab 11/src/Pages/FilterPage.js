const { By , until } = require("selenium-webdriver");

class FilterPage {
  constructor(driver) {
    this.driver = driver;
  }

  async ChangeLang() {
   await this.driver.wait(until.elementLocated(By.xpath("//label[@for='languages-en']")), 10000).click();
  }

  async OnlyAudio() {
    await this.driver.wait(until.elementLocated(By.xpath("//label[@for='art_types-audiobook']")), 10000).click();
   }


}


module.exports = FilterPage;