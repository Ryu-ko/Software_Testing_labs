const { describe, it } = require('mocha'); 
const { createDriver } = require('../Driver/DriverSettings'); 
const { performLogin } = require('../Utils/loginUtils');

const LoginPage = require('../Pages/LoginPage');
const MainPage = require('../Pages/MainPage');
const BookPage = require('../Pages/BookPage');
const BookListPage = require('../Pages/BookListPage');


describe("Check создание нового списка книг ", function () {
    this.timeout(85000); 
  
    it("Список книг", async () => {
      let driver = await createDriver(); 
      let loginPage = new LoginPage(driver); 
      let mainPage = new MainPage(driver); 
      let bookListPage = new BookListPage(driver);

      try {
        await driver.manage().window().maximize();
        await mainPage.openMain();
        await mainPage.openUser();

        await performLogin(loginPage);

        await mainPage.openMyBooks();
        await mainPage.openBooksLists();
        await bookListPage.addNewList("testList");

        await driver.sleep(10000);


      } finally {
        await driver.quit();
      }
    });
  });