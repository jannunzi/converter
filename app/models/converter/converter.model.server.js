var mongoose = require("mongoose");

module.exports = function() {

    var ConverterSchema = require("./converter.schema.server.js")();
    var ConverterModel = mongoose.model("ConverterModel", ConverterSchema);

    var api = {
        createConverter: createConverter
    };
    return api;

    function createConverter(converter) {
        return ConverterModel.create(converter);
    }
};