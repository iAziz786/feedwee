const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const logger = require('morgan');
const passport = require('passport');
const dotenv = require('dotenv');
const ms = require('ms');
dotenv.config({ path: path.join(__dirname, '..', '.env') });
const router = require('../router');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

app.use(logger('dev'));
app.use(cookieParser());
require('../services/passport');

app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_SECRET],
    maxAge: ms('30 days')
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', router);

module.exports = app;
