module.exports = function(app) {

    app.post("/api/converter", createConverter);

    var converterModel = require("../models/converter/converter.model.server.js")();

    function createConverter(req, res) {
        var converter = req.body;
        console.log(converter);
        converterModel
            .createConverter(converter)
            .then(
                function(){
                    res.send(200);
                },
                function(err){
                    res.status(400).send(err);
                }
            )
    }
};