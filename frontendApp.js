var express = require('express');
var exphbs  = require('express-handlebars');

var query = require('./lib/query.js').query;

var app = express();
var hbs = exphbs.create({ /* config */ });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use('/static', express.static('static'));

/*
 * Debug endpoint
 */
app.get('/up', function (req, res) {
    res.send('I am up!');
});

app.get('/', function (req, res) {
    res.render('master', {
        title: 'Eat Safe NYC - Restaurant health ratings and violations',
        partials: {
            head: ''
        }
    });
});


module.exports = {
    'app': app
};