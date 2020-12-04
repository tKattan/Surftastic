const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

//create schema for todo
const SubmissionSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    required: [true, 'The date field is required']
  },
  idGeo: {
    type: ObjectId,
    required: [true, 'The geo id field is required']
  },
  idEnvironnement: {
    type: ObjectId,
    required: [true, 'The environnement id field is required']
  },
  idActivities: {
    type: ObjectId,
    required: [true, 'The activities id field is required']
  }
})

//create model for todo
const Submission = mongoose.model('submission', SubmissionSchema);

module.exports = Submission;