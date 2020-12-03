const express = require ('express');
const router = express.Router();
const Surf = require('../models/surf');
const Submission = require('../models/submission');
const Geolocation = require('../models/geolocation');

//SURF --> test schemas

router.get('/surfs', (req, res, next) => {
  Surf.find({})
  .then(data => res.json(data))
  .catch(next)
});

router.post('/surfs', (req, res, next) => {
    if(req.body.place && req.body.date){
        Surf.create(req.body)
          .then(data => res.json(data))
          .catch(next)
      }else {
        res.json({
          error: "The place or date fields are empty"
        })
      }
});

router.delete('/surfs/:id', (req, res, next) => {
    Surf.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
});

//SUBMISSIONS

router.get('/submissions', (req, res, next) => {
  Submission.find({})
  .then(data => res.json(data))
  .catch(next)
});

router.post('/submissions', (req, res, next) => {
    if(req.body.idGeo && req.body.date){
        Submission.create(req.body)
          .then(data => res.json(data))
          .catch(next)
      }else {
        res.json({
          error: "The geo or date fields are empty"
        })
      }
});

router.delete('/submissions/:id', (req, res, next) => {
    Submission.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
});

//GEOLOCATION

router.get('/geolocations', (req, res, next) => {
  Geolocation.find({})
  .then(data => res.json(data))
  .catch(next)
});

router.post('/geolocations', (req, res, next) => {
    if(req.body.place){
        Geolocation.create(req.body)
          .then(data => res.json(data))
          .catch(next)
      }else {
        res.json({
          error: "The place fields are empty"
        })
      }
});

router.delete('/geolocations/:id', (req, res, next) => {
    Geolocation.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
});



module.exports = router;