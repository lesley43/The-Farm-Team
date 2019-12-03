/* Add all the required libraries*/
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Crop = require('./models/crop.schema.js'),
    config = require('./config/config.js');

/* Connect to your database using mongoose - remember to keep your key secret*/
var uri = config.db.uri;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.set('useFindAndModify', false);

var retrieveAll = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Crop.find({}, function(err, crops) {
     if (err) throw err;
     console.log("I am running");
     console.log(crops);
   });
};

retrieveAll();
