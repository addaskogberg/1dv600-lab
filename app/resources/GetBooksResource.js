(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');


    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        callback({ 
            "ID": "4", 
            "author":"test", 
            "title":"test", 
            "genre":"test", 
            "price":"test",
            "publishDate": "test",
            "description": "test"
          });
    };

}());
