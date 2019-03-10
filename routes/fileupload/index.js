var app=require('express');
var router = app.Router();
var bodyParser=require('body-parser');
const nodemailer = require("nodemailer");
var multer = require('multer');
var path=require('path');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });
router.get('/upload',function(req,res,next){
 res.sendFile( path.join(__dirname, '/../../views/index.html') );
});


 router.post('/upload', upload.single('myFile'), function(req, res) {
  console.log(req.file);
 res.send("file saved on server");
 });
module.exports = router;
