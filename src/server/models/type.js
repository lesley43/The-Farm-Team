const Joi = require('joi');
const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  }
});

const Type = mongoose.model('Type', typeSchema);

function validateType(type) {
  const schema = {
    name: Joi.string().min(3).max(50).required()
  };

  return Joi.validate(type, schema);
}

exports.typeSchema = typeSchema;
exports.Type = Type; 
exports.validate = validateType;
