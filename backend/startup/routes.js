const express = require('express');
const types = require('../routes/types');
const crops = require('../routes/crops');
const users = require('../routes/users');
const auth = require('../routes/auth');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/types', types);
  app.use('/api/crops', crops);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use(error);
}