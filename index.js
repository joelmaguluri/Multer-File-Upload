var express = require('express');
var app = express();
app.use(express.static('views'));
var fileuploadRouter = require('./routes/fileupload');
app.use('/fileupload',fileuploadRouter)
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
var port=process.env.PORT||4000;
app.listen(port, function(err){
    if(err) throw err;
    console.log("Server is running 4000");
});
