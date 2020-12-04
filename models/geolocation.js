const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const GeolocationSchema = new Schema({
  placeName: {
      //latitude : N XX° XX' XX" so 8 digits for the accuracy -> in fact that is written XX.XXXXXX decimal degrees
      //longitude : E 
    type: String,
    default : "Cloud City",
    required: [true, 'The place field is required']
  },
  temperature: {
    type: Number
  },
  cityOrTown:{
    type: String 
  },
  wind: {
    type: Number //speed of wind in km/h
  },
  uv: {
    type: Number //1 until 11
  },
  risingTide: {
    type: Boolean
  }
})

//create model for todo
const Geolocation = mongoose.model('geolocation', GeolocationSchema);

module.exports = Geolocation;