const { By , until  } = require("selenium-webdriver");

class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async setEmail(email) {
    let emailInput = await this.driver.wait(until.elementLocated(By.name("email")), 10000);
    await emailInput.clear();
    await emailInput.sendKeys(email);
  }

  async setPassword(password) {
    let passInput = await this.driver.wait(until.elementLocated(By.name("pwd")), 10000);
    await passInput.clear();
    await passInput.sendKeys(password);
  }

  async clickLoginButton() {
    await this.driver.wait(until.elementLocated(By.className("Button_button__vpqEH Button_button_medium__m3Snt Button_button_primary__k65Je Button_button_fullWidth__IsSv_")), 10000).click();
  }

  async clickLaterButton() {
    await this.driver.wait(until.elementLocated(By.className("Button_button__vpqEH Button_button_medium__m3Snt Button_button_secondary__Apqdn Button_button_fullWidth__IsSv_")), 10000).click();
 
    }
}

module.exports = LoginPage;
