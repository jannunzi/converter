var mongoose = require("mongoose");

module.exports = function() {

    var ConverterSchema = require("./converter.schema.server.js")();
    var ConverterModel = mongoose.model("ConverterModel", ConverterSchema);

    var api = {
        createConverter: createConverter,
        findAllConverters: findAllConverters,
        findConverterById: findConverterById,
        updateConverter: updateConverter
    };
    return api;

    function updateConverter(converterId, converter) {
        return ConverterModel.update({_id: converterId}, {$set: converter});
    }

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