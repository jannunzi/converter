var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

require("./app/app.js")(app);

app.listen(3000);