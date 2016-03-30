module.exports = function(app) {

    app.post("/api/converter", createConverter);
    app.get ("/api/converter", findAllConverters);
    app.get ("/api/converter/:converterId", findConverterById);
    app.put ("/api/converter/:converterId", updateConverter);

    var converterModel = require("../models/converter/converter.model.server.js")();

    function updateConverter(req, res) {
        converterModel
            .updateConverter(req.params.converterId, req.body)
            .then(
                function(){
                    res.send(200);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function findConverterById(req, res) {
        converterModel
            .findConverterById(req.params.converterId)
            .then(
                function(data) {
                    res.json(data);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function findAllConverters(req, res) {
        converterModel
            .findAllConverters()
            .then(
                function(data) {
                    res.json(data);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function createConverter(req, res) {
        converterModel
            .createConverter(req.body)
            .then(
                function(){
                    res.send(200);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }
};