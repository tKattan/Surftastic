const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const EnvironnementSchema = new Schema({
    //Number like beachPollution are the note /10
  beachPollution: {
    type: Number,
  },
  waterPollution: {
    type: Number
  },
  airPollution:{
    type: Number 
  },
  beachDescription: {
    type: String 
  },
  waterDescription: {
    type: String 
  },
  airDescription: {
    type: String
  },
  surfType: {
    type: String
  }
})

//create model for todo
const Environnement = mongoose.model('environnement', EnvironnementSchema);

module.exports = Environnement;