// src/Tests/Test.js
const { describe, it } = require('mocha'); 
const { createDriver } = require('../Driver/DriverSettings'); 
const { performLogin } = require('../Utils/loginUtils');
const LoginPage = require('../Pages/LoginPage');
const MainPage = require('../Pages/MainPage');
const loggerToFile = require('../Utils/LoggerToFile'); // Импорт логгера для записи в файл

describe("LitresTest на логин", function () {
  this.timeout(85000); 
  before(function () {
    loggerToFile.info("Starting LitresTest на логин");
  });

  after(function () {
    loggerToFile.info("Finishing LitresTest на логин");
  });

  it("Log in", async () => {
    let driver = await createDriver(); 
    let loginPage = new LoginPage(driver); 
    let mainPage = new MainPage(driver); 


    try {
      await driver.manage().window().maximize();
      await mainPage.openMain();
      await mainPage.openUser();
      await performLogin(loginPage);
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
