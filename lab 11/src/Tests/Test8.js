// src/Tests/ChangeProfileTest.js
const { describe, it } = require('mocha');
const { createDriver } = require('../Driver/DriverSettings');
const { performLogin } = require('../Utils/loginUtils');

const LoginPage = require('../Pages/LoginPage');
const ChangeProfilePage = require('../Pages/ChangeProfilePage');
const MainPage = require('../Pages/MainPage');

describe("ChangeProfileTest смена фотки профиля", function () {
    this.timeout(85000);

    it("Change photo", async () => {
        let driver = await createDriver();
        let loginPage = new LoginPage(driver);
        let changeProfilePage = new ChangeProfilePage(driver);
        let mainPage = new MainPage(driver); 
        try {
            await driver.manage().window().maximize();
            await mainPage.openMain();
            await mainPage.openUser();
            await performLogin(loginPage);
            await changeProfilePage.open();
            await driver.sleep(25000);
            await driver.navigate().refresh();
            await driver.sleep(2000);

        } finally {
            await driver.quit();
        }
    });
});
