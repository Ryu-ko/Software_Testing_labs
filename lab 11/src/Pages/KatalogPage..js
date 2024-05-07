const { By , until } = require("selenium-webdriver");

class KatalogPage {
  constructor(driver) {
    this.driver = driver;
  }

  async KatalogBook() {
    this.driver.sleep(50000);
    await this.driver.wait(until.elementLocated(By.className("CatalogButton_wrapper__nZ5n8")), 10000).click();
    await this.driver.wait(until.elementLocated(By.className("Item_item__LNZxG")), 10000).click();
}

async openBookFromKatalog() {
  await this.driver.wait(until.elementLocated(By.className("ArtV2Default_cover__wrapper__Cs895")), 10000).click();
}
}


module.exports = KatalogPage;