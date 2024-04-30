const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async open() {
    await this.driver.get("https://www.litres.ru/");
    await this.driver.findElement(By.css("[data-testid='tab-login']")).click();
  }

  async setEmail(email) {
    let emailInput = await this.driver.findElement(By.name("email"));
    await emailInput.clear();
    await emailInput.sendKeys(email);
  }

  async setPassword(password) {
    let passInput = await this.driver.findElement(By.name("pwd"));
    await passInput.clear();
    await passInput.sendKeys(password);
  }

  async clickLoginButton() {
    await this.driver.findElement(By.className("Button_button__vpqEH Button_button_medium__m3Snt Button_button_primary__k65Je Button_button_fullWidth__IsSv_")).click();
  }
}

async function MyTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  let loginPage = new LoginPage(driver);

  try {
    await driver.manage().window().maximize();
    await loginPage.open();
    await loginPage.setEmail("kompinov2313@yandex.by");
    await loginPage.clickLoginButton();
    await loginPage.setPassword("wr6n3kap");
    await loginPage.clickLoginButton();
    await driver.sleep(15000);
  } finally {
    await driver.quit();
  }
}

describe("LitresTest", function () {
  this.timeout(85000); 

  it("Log in", async () => {
    await MyTest();
  });
});
