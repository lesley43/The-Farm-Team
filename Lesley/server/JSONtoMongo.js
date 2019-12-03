'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Crop = require('./models/crop.schema.js'),
    config = require('./config/config.js');

/* Connect to your database using mongoose - remember to keep your key secret*/
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/
var uri = config.db.uri;
mongoose.connect(uri, {useNewUrlParser: true});


/*
  Instantiate a mongoose model for each Crop object in the JSON file,
  and then save it to your Mongo database
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
 */

fs.readFile('../data/data.json', 'utf8', function(err, data) {

  //check for errors
  if (err) throw err;

  //parse data
  var CropData = JSON.parse(data);
  console.log(CropData);


  //store data in database
  CropData.crops.forEach(function(element) {

    //create new Crop
    let newCrop = new Crop(
      element
    );

    //save new Crop
    newCrop.save(function(err) {
      if (err) throw err;
      console.log("I'm saving!");
    });

  });

});

/*
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
