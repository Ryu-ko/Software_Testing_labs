const { describe, it } = require('mocha'); 
const { createDriver } = require('../Driver/DriverSettings'); 
const { performLogin } = require('../Utils/loginUtils');

const LoginPage = require('../Pages/LoginPage');
const MainPage = require('../Pages/MainPage');
const BookPage = require('../Pages/BookPage');
const KatalogPage = require('../Pages/KatalogPage.');


describe("Check удаление из списка прочитанных ", function () {
    this.timeout(85000); 
  
    it("удаление из прочитанных", async () => {
      let driver = await createDriver(); 
      let loginPage = new LoginPage(driver); 
      let mainPage = new MainPage(driver); 
      let bookPage = new BookPage(driver); 
      let katalogPage= new KatalogPage(driver);

      try {
        await driver.manage().window().maximize();
        await mainPage.openMain();
        await mainPage.openUser();
        await performLogin(loginPage);

        await mainPage.openMyBooks();
        await mainPage.openReadetBooks();
        await mainPage.unreadetBook();



        await driver.sleep(10000);


      } finally {
        await driver.quit();
      }
    });
  });