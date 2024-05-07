// src/Utils/loginUtils.js
async function performLogin(loginPage) {
    await loginPage.setEmail("kompinov2313@yandex.by");
    await loginPage.clickLoginButton();
    await loginPage.setPassword("wr6n3kap");
    await loginPage.clickLoginButton();
    await loginPage.clickLaterButton();
}

module.exports = {
    performLogin
};
