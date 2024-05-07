const { By , until } = require("selenium-webdriver");


class BookListPage {
    constructor(driver) {
      this.driver = driver;
    }
  
    async addNewList(ListName) {
        await this.driver.wait(until.elementLocated(By.className("Button_button__vpqEH Button_button_medium__m3Snt Button_button_primary__k65Je Folders_folders__createButton__BoiDJ")), 10000).click();
       
        let listInput = await this.driver.wait(until.elementLocated(By.className("Input_input__kv6BM CreateFolderModal_createFolderModal__content__form__input__IzMQ7")), 10000);
        await listInput.clear();
        await listInput.sendKeys(ListName);
        await this.driver.wait(until.elementLocated(By.className("CreateFolderModal_createFolderModal__content__form__button__dYoPH")), 10000).click();
       
    }
    
    async addBookToList() {
      await this.driver.wait(until.elementLocated(By.className("ContextMenu_contextMenu__button__GO1kj")), 10000).click();
      console.log("2");
      await this.driver.wait(until.elementLocated(By.xpath("//div[contains(text(), 'Добавить в список')]")), 10000).click();
      console.log("3");

      await this.driver.wait(until.elementLocated(By.className("FoldersActionAdd_foldersActionModal__folders__item__info__oBvzJ")), 10000).click();
      console.log("4");
      await this.driver.wait(until.elementLocated(By.className("Button_textContainer__kfiHZ")), 10000).click();

     
     
  }

}
  
module.exports = BookListPage;