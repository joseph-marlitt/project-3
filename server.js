const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const config = require('./config');
const app = express();
const PORT = process.env.PORT || 3001;
// uncomment this line to seed DB, must be commented out to post
  // const seeder = require('./seeds/seeder.js');

  // connect to the database and load models
require('./models').connect(config.dbUri);

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// pass the passport middleware
app.use(passport.initialize());

// Serve up static assets
app.use(express.static("client/public"));

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

// Add routes, both API and view
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/api', require('./routes')());

// Start the API server
app.listen(PORT, function() {

  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
