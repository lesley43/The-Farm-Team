/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Create your schema */
var cropSchema = new Schema({
  _id: {type: String, required: true},
  name: {type: String, required: true},
  cropType: {
    _id: String,
    name: String
  },
  plantSeason: String,
  harvestSeason: String,
  lifeCycle: String,
  liked: Boolean
});


/* Use your schema to instantiate a Mongoose model */
var Crops = mongoose.model('Crops', cropSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Crops;
