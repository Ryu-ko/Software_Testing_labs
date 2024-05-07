// src/Utils/loginUtils.js
async function performLogin(loginPage) {
    await loginPage.setEmail("-----------------");
    await loginPage.clickLoginButton();
    await loginPage.setPassword("---------");
    await loginPage.clickLoginButton();
    await loginPage.clickLaterButton();
}

module.exports = {
    performLogin
};
