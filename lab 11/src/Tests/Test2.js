const { describe, it } = require('mocha'); 
const { createDriver } = require('../Driver/DriverSettings'); 
const { performLogin } = require('../Utils/loginUtils');

const LoginPage = require('../Pages/LoginPage');
const MainPage = require('../Pages/MainPage');
const BookPage = require('../Pages/BookPage');
const loggerToFile = require('../Utils/LoggerToFile'); // Импорт логгера для записи в файл


describe("Check добавление книги в отложенные ", function () {
    this.timeout(85000); 
    before(function () {
      loggerToFile.info("Starting Check добавление книги в отложенные");
    });
  
    after(function () {
      loggerToFile.info("Finishing Check добавление книги в отложенные");
    });
    it("Отложенные", async () => {
      let driver = await createDriver(); 
      let loginPage = new LoginPage(driver); 
      let mainPage = new MainPage(driver); 
      let bookPage = new BookPage(driver); 

  
  
      try {
        await driver.manage().window().maximize();
        await mainPage.openMain();
        await mainPage.clickRandomBook();

        await bookPage.addToDeferred();
        await mainPage.openUser();
        await performLogin(loginPage);

        await mainPage.openDeferred();
        await driver.sleep(15000);
        loggerToFile.info("Login successful");
      } catch (error) {
        loggerToFile.error("Test failed: " + error.message);
        throw error;
      } finally {
        await driver.quit();
      }
    });
  });