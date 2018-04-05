const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/public"));

// Add routes, both API and view
app.use('/api', require('./routes')());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Roost")
  .then(() => {
    console.log('connected')
  },
  err => {
    console.log(err)
  });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
