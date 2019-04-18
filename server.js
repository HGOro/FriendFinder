//set up
var express = require('express');
//var bodyParser = require("body-parser");
//var fileUpload

//initialize application with express
var app = express()


//set port
var PORT = process.env.PORT || 8001;

//convert incoming data to json
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("./app/public"));

//routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function(){
    console.log("listening on port:", PORT);
})