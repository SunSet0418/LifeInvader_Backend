var express = require('express')
var session = require('express-session')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()
var moment = require('moment')
var ejs = require('ejs')
var RandomString = require('randomstring')
var PORT = process.env.PORT || 3000
var logger = require('morgan')
var db = require('./database/mongo')

app.use(bodyParser.urlencoded({
    extended : true
}))

app.use(logger('dev'))

app.use(express.static('public'))


app.use(session({
    secret: 'YEAH!@#%!@%#!@#%!@#%!@#%!@#$SESSION@#$^!@$^!^@$SECRET',
    resave: false,
    saveUninitialized: true,
}))

app.set('view engine', 'html')
app.set('views', 'templates')
app.engine('html', require('ejs').renderFile);

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(PORT, ()=>{
    console.log('Server Running At '+PORT+' Port!')
})

require('./routes/auth')(app, db, session)
require('./routes/index')(app, db, session)
require('./routes/post')(app, db, session, RandomString, moment)
require('./routes/search')(app, db, session, moment, request)
require('./routes/keword')(app, db, request)
