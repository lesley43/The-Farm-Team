const Joi = require('joi');
const mongoose = require('mongoose');
const {typeSchema} = require('./type');

const Crop = mongoose.model('Crops', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
    minlength: 3,
    maxlength: 255
  },
  type: { 
    type: typeSchema,  
    required: true
  },
  plantSeason: { 
    type: String, 
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 255
  },
  harvestSeason: { 
    type: String, 
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 255
  },
  lifeCycle: {
    type: String, 
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 255 
  }
}));

function validateCrop(crop) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    typeId: Joi.objectId().required(),
    plantSeason: Joi.string().min(3).max(50).required(),
    harvestSeason: Joi.string().min(3).max(50).required(),
    lifeCycle: Joi.string().min(3).max(50).required()
  };

  return Joi.validate(crop, schema);
}

exports.Crop = Crop; 
exports.validate = validateCrop;
