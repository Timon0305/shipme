require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

const app = express();

//DB config
const db = require('./config/keys').MongoURI;


//Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('Mongodb Connected'))
    .catch(err => console.log(err));

//BodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// cors
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));

// Express Session
app.use(session({
    secret: 'yaward',
    resave: true,
    saveUninitialized: true,
}));

// Connect flash
app.use(flash());

//Global Vars

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Password middleware
app.use(passport.initialize());
app.use(passport.session());

// Admin Routes
app.use('/v1/api/admin', require('./routes/admin/adminController'));

app.use('/', (req, res) => {
    return res.json({
        msg: 'working'
    })
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started at port ${PORT}`));
