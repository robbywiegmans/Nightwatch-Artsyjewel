module.exports = function (browser){
    

    this.openBrowser = function(){
        var data = require('../data/testdata');
        browser
            .windowMaximize()
            .url(data.urls.login)
            .waitForElementVisible('body', 1000);
        return browser
    }
    
    this.loginButton = function(){
    browser    
        .click('#shopify-section-header > div > header > div > div.grid__item.small--one-half.medium-up--one-third.text-right.site-header__icons.site-header__icons--plus > div > a.site-header__account > svg')
    };
    
    this.searchItem = function(){
        var data = require('../data/testdata');
        browser
            .assert.elementPresent('#shopify-section-header > div > header > div > div.grid__item.small--hide.medium-up--one-third > div')
            .click('#shopify-section-header > div > header > div > div.grid__item.small--hide.medium-up--one-third > div')
            .setValue('#shopify-section-header > div > header > div > div.grid__item.small--hide.medium-up--one-third > div', data.items.rings)
            .click('#shopify-section-header > div > header > div > div.grid__item.small--hide.medium-up--one-third > div > form')
    };


    this.adminLogin = function(){
        var data = require('../data/testdata');
        browser
            .assert.elementPresent('#CustomerEmail')
            .setValue('#CustomerEmail', data.users.username)
            .setValue('#CustomerPassword', data.users.password)
            .click('#customer_login > div > input')
            .waitForElementVisible('body', 1000)
            .assert.containsText('#customer_logout_link', "Log out")
    };

    this.forgotPassword = function(){
        var data = require('../data/testdata')
        browser
            .click('#RecoverPassword')
            .setValue('#RecoverEmail', data.users.username)
            .click('#RecoverPasswordForm > div.form-vertical > form > div > p > input')
            .assert.containsText('#ResetSuccess', "We've sent you an email with a link to update your password.")
    };
    
    this.closeBrowser = function(){
        browser
            .pause(3000)
            .saveScreenshot('./screenshots/voorbeeld.jpg')
            .end();
    };
    return this;
}