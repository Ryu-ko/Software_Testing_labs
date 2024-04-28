const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

async function MyTest() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.manage().window().maximize();

    await driver.get("https://www.litres.ru/");

    await driver.findElement(By.css("[data-testid='tab-login']")).click();

    await driver.manage().setTimeouts({ implicit: 5000 });

    // Находим элемент input по имени "email"
    let emailInput = await driver.findElement(By.name("email"));

    // Очищаем поле ввода, если оно уже содержит какой-либо текст
    await emailInput.clear();

    // Вводим текст в поле ввода
    await emailInput.sendKeys("kompinov2313@yandex.by"); 

    // Находим и кликаем на кнопку "Войти"
    await driver.findElement(
      By.className("Button_button__vpqEH Button_button_medium__m3Snt Button_button_primary__k65Je Button_button_fullWidth__IsSv_")
    ).click();

   let passInput = await driver.findElement(By.name("pwd"));

   await passInput.clear();

   await passInput.sendKeys("wr6n3kap"); 

   await driver.findElement(
     By.className("Button_button__vpqEH Button_button_medium__m3Snt Button_button_primary__k65Je Button_button_fullWidth__IsSv_")
   ).click();

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
