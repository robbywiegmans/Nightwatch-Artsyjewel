var utils = require('../../../pages/utils');

module.exports = {
    '@tags': ['searchItem'],

    before: function(browser){
        utils(browser).openBrowser();
    },
    'Go to the search page': function (browser){
        utils(browser).searchItem();
    },
  
    after: function(browser){
        utils(browser).closeBrowser();
    }
};
