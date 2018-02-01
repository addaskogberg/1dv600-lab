(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO')

    //var bok1 = book.createBook(1, 'namn', 'book namn', 'javascript', '50 kr', '2018-02-01',' det här är en skitbok som så många andra inte beskriver ett barr av värde')
    //console.log(bok1)


    module.exports = function (callback) {
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


