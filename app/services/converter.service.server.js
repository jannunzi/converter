module.exports = function(app) {
    app.post("/api/converter", createConverter);

    function createConverter(req, res) {
        var converter = req.body;
        console.log(converter);
        res.send(200);
    }
};