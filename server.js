const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// const dbName = 'Roost';

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Init MongoDb
// const mongoHelper = require('./helpers/mongoHelpers');

// Serve up static assets
app.use(express.static("client/public"));

// Add routes, both API and view
// app.use(routes);
app.use('/api', require('./routes')());

// Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/Roost"
// );

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Roost").then(
  () => { console.log('connected')
/** ready to use. The `mongoose.connect()` promise resolves to undefined. */
},
  err => { console.log(err) }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// Set up promises with mongoose
// mongoose.Promise = global.Promise;
// Connect to the Mongo DB


// Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });

// const server = new Promise((resolve, reject) => {
//   return mongoHelper.initDB()
//     .then(() => {
//       app.listen(PORT, function(){
//         console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
//
//         resolve(app);
//       });
//     })
//     .catch((e) => {
//       console.error('error', e);
//       reject(e);
//     });
// });
//
// module.exports = {
//   server
// };
