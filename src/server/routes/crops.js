const {Crop, validate} = require('../models/crop'); 
const {Type} = require('../models/type');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const crops = await Crop.find().sort('name');
  res.send(crops);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const type = await Type.findById(req.body.typeId);
  if (!type) return res.status(400).send('Invalid crop type.');

  const crop = new Crop({ 
    name: req.body.name,
    type: {
      _id: type._id,
      name: type.name
    },
    plantSeason: req.body.plantSeason,
    harvestSeason: req.body.harvestSeason,
    lifeCycle: req.body.lifeCycle
  });
  await crop.save();
  
  res.send(crop);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const type = await Type.findById(req.body.typeId);
  if (!type) return res.status(400).send('Invalid crop type.');

  const crop = await Crop.findByIdAndUpdate(req.params.id,
    { 
      name: req.body.name,
      type: {
        _id: type._id,
        name: type.name
      },
      plantSeason: req.body.plantSeason,
      harvestSeason: req.body.harvestSeason,
      lifeCycle: req.body.lifeCycle
    }, { new: true });

  if (!crop) return res.status(404).send('The crop with the given ID was not found.');
  
  res.send(crop);
});

router.delete('/:id', async (req, res) => {
  const crop = await Crop.findByIdAndRemove(req.params.id);

  if (!crop) return res.status(404).send('The crop with the given ID was not found.');

  res.send(crop);
});

router.get('/:id', async (req, res) => {
  const crop = await Crop.findById(req.params.id);

  if (!crop) return res.status(404).send('The crop with the given ID was not found.');

  res.send(crop);
});

module.exports = router; 
