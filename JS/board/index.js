let express = require('express');
let mongoose = require('mongoose');
let bodyparser = require('body-parser');
let methodOverride = require('method-override');
let app = express();

//DB세팅
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
db.once('open', function() {
    console.log('DB connected');
});
db.on('error', function(err) {
    console.log('DB ERROR : ', err);
});

//ejs 세팅

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//Routes 세팅
app.use('/', require('./routes/home'));

//Port 세팅

let port = 3000;
app.listen(port, function() {
    console.log("server ON port http://localhost:" + port);
});