const express = require('express');
require('dotenv').config();
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const {v4: uuidv4 } = require('uuid');

const router = require('./routes/auth');

const app = express();

app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
    cookie: {secure:false}
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use('/', router);

app.listen(process.env.PORT,()=>{
    console.log(`The server is running at http://${process.env.HOSTNAME}:${process.env.PORT}.`);
});