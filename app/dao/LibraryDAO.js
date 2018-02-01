(function () {
    "use strict";

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');


    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
            console.log('det här är get file')
            fs.readFile('books.xml', function(err, data){
                if(!err){
                    xml2js.parseString(data, function(err, result) {
                        if(!err){
                            console.log(result)
                        }
                        else{
                            console.log('Something went wrong parsing XML')
                        }
                    })
                }
                else{
                    console.log('Something went wrong reading XML file')
                }
            })
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {
            console.log('det här är write file')
        }
    };

    module.exports = LibraryDAO;
}());
