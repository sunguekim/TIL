let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let methodOverride = require('method-override')
let app = express();

//DB 세팅
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;



app.set('view engine', 'ejs'); // 1
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


let contactSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String },
    phone: { type: String }
});
var Contact = mongoose.model('contact', contactSchema);

app.get('/', function(req, res) {
    res.redirect('/contacts');
});

app.get('/contacts', function(req, res) {
    Contact.find({}, function(err, contacts) {
        if (err) return res.json(err);
        res.render('contacts/index', { contacts: contacts });
    });
});

app.get('/contacts/new', function(req, res) {
    res.render('contacts/new')
})
app.post('/contacts', function(req, res) {
    Contact.create(req.body, function(err, contact) {
        if (err) return res.json(err);
        res.redirect('/contacts')
    })
})


app.get('/contacts/:id', function(req, res) {
    Contact.findOne({ _id: req.params.id }, function(err, contact) {
        if (err) return res.json(err);
        res.render('contacts/show', { contact: contact });
    });
});

app.get('/contacts/:id/edit', function(req, res) {
    Contact.findOne({ _id: req.params.id }, function(err, contact) {
        if (err) return res.json(err);
        res.render('contacts/edit', { contact: contact });
    });
});

app.put('/contacts/:id', function(req, res) {
    Contact.findOneAndUpdate({ _id: req.params.id }, req.body, function(err, contact) {
        if (err) return res.json(err);
        res.redirect('/contacts/' + req.params.id);
    });
});



app.delete('/contact/:id', function(req, res) {
    Contact.deleteOne({ _id: req.params.id }, function(err) {
        if (err) return res.json(err);
        res.redirect('/contacts')
    })
});



let port = 3000;
app.listen(port, function() {
    console.log('server on! http://localhost:' + port);
});