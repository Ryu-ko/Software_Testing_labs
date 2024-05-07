const { describe, it } = require('mocha'); 
const { createDriver } = require('../Driver/DriverSettings'); 
const { performLogin } = require('../Utils/loginUtils');

const LoginPage = require('../Pages/LoginPage');
const MainPage = require('../Pages/MainPage');
const BookPage = require('../Pages/BookPage');
const loggerToFile = require('../Utils/LoggerToFile'); // Импорт логгера для записи в файл


describe("Check добавление в корзину ", function () {
    this.timeout(85000); 
    before(function () {
      loggerToFile.info("Starting Check добавление в корзину");
    });
  
    after(function () {
      loggerToFile.info("Finishing Check добавление в корзину");
    });
    
    it("Корзина", async () => {
      let driver = await createDriver(); 
      let loginPage = new LoginPage(driver); 
      let mainPage = new MainPage(driver); 
      let bookPage = new BookPage(driver); 

      try {
        await driver.manage().window().maximize();
        await mainPage.openMain();
        await mainPage.openUser();

        await performLogin(loginPage);

        await mainPage.clickRandomBook();
        await bookPage.addToCart();
        await mainPage.openCart();

        loggerToFile.info("Login successful");
      } catch (error) {
        loggerToFile.error("Test failed: " + error.message);
        throw error;
      } finally {
        await driver.quit();
      }
    });
  });