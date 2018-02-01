(function () {
    "use strict";

    var express = require('express');
    var router = express.Router();

    //var AddBookResource = require('../../resources/AddBookResource');
    //var EditBookResource = require('../../resources/EditBookResource');
    var GetBookResource = require('../../resources/GetBookResource');
    var GetBooksResource = require('../../resources/GetBooksResource');
    //var RemoveBookResource = require('../../resources/RemoveBookResource');
    //console.log('nu skriver vi ut i books.js')
    var book = require('../../dao/book')


    router.get('/', function (req, res) {
        console.log('nu skriver vi ut i books.js')
        var myBook = book.createBook(4, 'författare namn', 'book namn', 'javascript', '50 kr', '2018-02-01',' det här är en skitbok som så många andra inte beskriver ett barr av värde')
        console.log(myBook)
        res.type('json');

        GetBooksResource(function (data) {
            res.send(data);
        });
    });


    router.put('/', function (req, res) {
        res.type('json');

        AddBookResource(req.body, function () {
            res.send("{}");
        });
    });


    router.route('/:bookId')
        .get(function (req, res) {
            res.type('json');
            GetBookResource(req.params.bookId, function (data) {
                res.send(data);
            });
        })

        .post(function (req, res) {
            res.type('json');
            EditBookResource(req.params.bookId, req.body, function () {
                res.send("{}");
            });
        })

        .delete(function (req, res) {
            res.type('json');
            RemoveBookResource(req.params.bookId, function () {
                res.send("{}");
            });
        });

    module.exports = router;
}());
