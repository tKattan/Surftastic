const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const SurfSchema = new Schema({
  place: {
    type: String,
    required: [true, 'The place text field is required']
  },
  date: {
      type: Date,
      required: [true, 'The date field is required']
  },
  no_other_people: {
      type: Number
  },
  rising_tide: {
      type: Boolean
  }
})

//create model for todo
const Surf = mongoose.model('surf', SurfSchema);

module.exports = Surf;