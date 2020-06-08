var express = require('express');
var app =express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var api = require('./routes/survey');
var cors = require('cors');

var db = mongoose.connection;
db.on('error',console.error);
db.once('open',function(){
    console.log('DB connect!')
});

mongoose.set('useNewUrlParser',true);
mongoose.set('useFindAndModify',false);
mongoose.set('useCreateIndex',true);
mongoose.set('useUnifiedTopology',true);
mongoose.connect('mongodb+srv://test:9710@cluster0-u2nng.mongodb.net/test?retryWrites=true&w=majority');



const port = 4000;

app.use(express.static(__dirname+'/src'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}));

;
app.use('/api',api);
app.use(cors());

app.listen(port,()=>{
    console.log('listen 4000 port',port)
})