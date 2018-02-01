'use strict'

var newBook2 = { 
  "ID": null, 
  "author":"", 
  "title":"", 
  "genre":"", 
  "price":"",
  "publishDate": "",
  "description": ""
}

var newBook = {
  createBook: function (id, author, title, genre, price, publishDate, description){
    var myBook = newBook2
    myBook.ID = id
    myBook.author = author
    myBook.title = title
    myBook.genre = genre
    myBook.price = price
    myBook.publishDate = publishDate
    myBook.description = description
    return myBook
  }
}

module.exports = newBook
//module.exports = newBook2