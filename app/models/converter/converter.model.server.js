var mongoose = require("mongoose");

module.exports = function() {

    var ConverterSchema = require("./converter.schema.server.js")();
    var ConverterModel = mongoose.model("ConverterModel", ConverterSchema);

    var api = {
        createConverter: createConverter,
        findAllConverters: findAllConverters,
        findConverterById: findConverterById
    };
    return api;

    function findConverterById(converterId) {
        return ConverterModel.findById(converterId);
    }

    function findAllConverters() {
        return ConverterModel.find();
    }

    function createConverter(converter) {
        return ConverterModel.create(converter);
    }
};