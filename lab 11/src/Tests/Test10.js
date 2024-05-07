const { describe, it } = require('mocha'); 
const { createDriver } = require('../Driver/DriverSettings'); 
const { performLogin } = require('../Utils/loginUtils');

const LoginPage = require('../Pages/LoginPage');
const MainPage = require('../Pages/MainPage');
const BookPage = require('../Pages/BookPage');
const KatalogPage = require('../Pages/KatalogPage.');
const FilterPage = require('../Pages/FilterPage');


describe("Check фильтрация только аудио", function () {
    this.timeout(85000); 
  
    it("Аудио книги", async () => {
      let driver = await createDriver(); 
      let mainPage = new MainPage(driver); 
      let katalogPage= new KatalogPage(driver);
      let filterPage= new FilterPage(driver);

      try {
        await driver.manage().window().maximize();
        await mainPage.openMain();

        await katalogPage.KatalogBook();
        
        await driver.sleep(5000);
        await filterPage.OnlyAudio();
        await driver.sleep(10000);


      } finally {
        await driver.quit();
      }
    });
  });