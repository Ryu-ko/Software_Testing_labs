const { By , until  } = require("selenium-webdriver");


class ChangeProfilePage {
    constructor(driver) {
        this.driver = driver;
    }

    async open() {
        await this.driver.wait(until.elementLocated(By.className("ProfileButton_profileButton__Agdcv")), 10000).click();
        await this.driver.wait(until.elementLocated(By.xpath("//span[contains(text(),'Обо мне')]/ancestor::a")), 10000).click();
        await this.driver.wait(until.elementLocated(By.className("personal-about-link")), 10000).click();
    }
}

module.exports = ChangeProfilePage;
