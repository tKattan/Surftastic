const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const ActivitySchema = new Schema({
  nbOtherPeople:{
    type: Number 
  },
  nbSurfer: {
    type: Number
  },
  nbBoat: {
    type: Number
  }
} 
)

//create model for todo
const Activity = mongoose.model('activity', ActivitySchema);

module.exports = Activity;