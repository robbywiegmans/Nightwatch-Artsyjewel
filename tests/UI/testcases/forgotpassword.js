var utils = require('../../../pages/utils');

module.exports = {
    '@tags': ['forgotpassword'],

    before: function(browser){
        utils(browser).openBrowser();
    },
    'Go to the login page': function (browser){
        utils(browser).loginButton();
    },
    'forgot password': function (browser){
        utils(browser).forgotPassword();
    },
    after: function(browser){
        utils(browser).closeBrowser();
    }
};
