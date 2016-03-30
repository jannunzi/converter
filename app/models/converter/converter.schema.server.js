var mongoose = require("mongoose");

module.exports = function() {

    var ConverterSchema = mongoose.Schema({
        name: String,
        description: String
    }, {collection: "converter"});

    return ConverterSchema;
};