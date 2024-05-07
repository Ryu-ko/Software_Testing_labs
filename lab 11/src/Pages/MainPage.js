const { By , until } = require("selenium-webdriver");

class MainPage {
  constructor(driver) {
    this.driver = driver;
  }

  async openMain() {
    await this.driver.get("https://www.litres.ru/");
  }

  async openUser() {
    await this.driver.wait(until.elementLocated(By.className("User_wrapper__zTF8O")), 10000).click();
  }

  async openDeferred() {
    await this.driver.wait(until.elementLocated(By.xpath("//div[@role='tab-favorite']")), 10000).click();
  }

  async openCart() {
    await this.driver.wait(until.elementLocated(By.xpath("//div[@role='tab-basket']")), 10000).click();
  }

  async openMyBooks() {
    await this.driver.wait(until.elementLocated(By.xpath("//div[@role='tab-myBooks']")), 10000).click();
  }
  async openBooksLists() {
    await this.driver.wait(until.elementLocated(By.xpath("//span[@data-testid='navigation__tabItem__label' and text()='Списки']")), 10000).click();

  }
  async openReadetBooks() {
    await this.driver.wait(until.elementLocated(By.xpath("//span[@data-testid='navigation__tabItem__label' and text()='Прочитано']")), 10000).click();
  }

  async unreadetBook() {
    //await this.driver.wait(until.elementLocated(By.xpath("//div[@data-testid='popover__baseElement']")), 10000).click();//poisk

    await this.driver.wait(until.elementLocated(By.className("Icon_wrapper__Ma9_z ContextMenu_contextMenu__button__icon__LoK4_")), 10000).click();
    console.log("2");
    await this.driver.wait(until.elementLocated(By.xpath("//div[contains(text(), 'Отметить не прочитанной')]")), 10000).click();
    console.log("3");
  }



  async clickRandomBook(){
    await this.driver.wait(until.elementLocated(By.className("ArtV2Tile_wrapper__8wFC3 ArtSlider_slider__art__Zg_JH")), 10000).click();
      

  }

}


module.exports = MainPage;