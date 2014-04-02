
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var messages = require ('./lib/messages');
var register = require('./routes/register')
var login = require('./routes/login')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon('public/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
//Session, Cookies and Custom Messages to Sessions
app.use(express.cookieParser('Shotta'));
app.use(express.session());
app.use(messages); //does not accept options is why no brackets
//Boiler Plate
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
//app.get('/register', register.form);
app.post('/register', register.submit);
app.post('/login', login.submit);
//app.get('/logout', login.logut);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
