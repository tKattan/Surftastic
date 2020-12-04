const express = require ('express');
const router = express.Router();
const Submission = require('../models/submission');
const Geolocation = require('../models/geolocation');
const Environnement = require('../models/environnement');
const Activity = require('../models/activity');

//SUBMISSIONS

router.get('/submissions', (req, res, next) => {
  Submission.find({})
  .then(data => res.json(data))
  .catch(next)
});

router.post('/submissions', (req, res, next) => {
    if(req.body.idActivities && req.body.idEnvironnement && req.body.idGeo && req.body.date){
        Submission.create(req.body)
          .then(data => res.json(data))
          .catch(next)
      }else {
        res.json({
          error: "The geo or date or activities or environnement fields are empty"
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
    if(req.body.placeName){
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

//ENVIRONNEMENT

router.get('/environnements', (req, res, next) => {
  Environnement.find({})
  .then(data => res.json(data))
  .catch(next)
});

router.post('/environnements', (req, res, next) => {
    if(true){
      Environnement.create(req.body)
          .then(data => res.json(data))
          .catch(next)
      }else {
        res.json({
          error: "The *** fields are empty"
        })
      }
});

router.delete('/environnements/:id', (req, res, next) => {
  Environnement.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
});

//ACTIVITIES

router.get('/activities', (req, res, next) => {
  Activity.find({})
  .then(data => res.json(data))
  .catch(next)
});

router.post('/activities', (req, res, next) => {
    if(true){
      Activity.create(req.body)
          .then(data => res.json(data))
          .catch(next)
      }else {
        res.json({
          error: "The *** fields are empty"
        })
      }
});

router.delete('/activities/:id', (req, res, next) => {
  Activity.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
});


module.exports = router;