const mongoose = require('mongoose');
const Activity = require('./activity');
const Environnement = require('./environnement');
const Geolocation = require('./geolocation');
const Schema = mongoose.Schema;

//create schema for todo
const ModelsManagerSchema = new Schema({
  environnement: {
    type: Environnement.schema
  },
  geolocation: {
    type: Geolocation.schema
  },
  activity: {
    type: Activity.schema
  }
})

//create model for todo
const ModelsManager = mongoose.model('modelsManager', ModelsManagerSchema);

module.exports = ModelsManager;