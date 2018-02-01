(function () {
    "use strict";

    //var LibraryDAO = require('../dao/LibraryDAO')
    var book = require('../dao/book')
    //var books = []

/*    
    books.push(book.createBook('namn', 1, 'book namn', 'javascript', '50 kr', '2018-02-01',' det här är en skitbok som så många andra inte beskriver ett barr av värde'))
    books.push(book.createBook(2, 'namn2', 'book namn2', 'javascript', '52 kr', '2018-02-02',' det här är en ännu bättre skitbok som så många andra inte beskriver ett barr av värde'))
    books.push(book.createBook(3, 'namn3', 'book namn2', 'javascript', '52 kr', '2018-02-02',' det här är en ännu bättre skitbok som så många andra inte beskriver ett barr av värde'))

    console.log(books)
*/  

   var bok1 = book.createBook(1, 'namn', 'book namn', 'javascript', '50 kr', '2018-02-01',' det här är en skitbok som så många andra inte beskriver ett barr av värde')
   /* 
   var bok2 = book.createBook({"ID": 2, 
    "author":"Nisse ", 
    "title":"Skräp kod ", 
    "genre":"Data ", 
    "price":"50 kr ",
    "publisDate": "2018-01-01 ",
    "description": "en bok om något"})
    */
   // var bok3 = book.createBook(3, 'namn3', 'book namn2', 'javascript', '52 kr', '2018-02-02',' det här är en ännu bättre skitbok som så många andra inte beskriver ett barr av värde')

    //console.log(bok1)
    console.log(bok1)
   // console.log(bok3)
    

    module.exports = function (author, callback) {
        var myBook = book.newBook(4, 'författare namn', 'book namn', 'javascript', '50 kr', '2018-02-01',' det här är en skitbok som så många andra inte beskriver ett barr av värde')
        console.log(myBook)
        myBook.save(callback)
    };

}());


 // var item = new ItemModel({Id: id}); hittade på stack vet inte vad den gör
        // item.save(callback);