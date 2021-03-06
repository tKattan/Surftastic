const express = require ('express');
const mongoose = require('mongoose');
const router = express.Router();
const Submission = require('../models/submission');
const Geolocation = require('../models/geolocation');
const Environnement = require('../models/environnement');
const Activity = require('../models/activity');
const ModelsManager = require('../models/modelsManager');
const ObjectId = mongoose.Types.ObjectId;

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

//MODELS MANAGER

router.post('/modelsManagers', (req, res, next) => {
  var env 
  var act 
  var geo 
  
  if(req.body.environnement){
    Environnement.create(req.body.environnement)
        .then(data => env = data._id)
        .catch(next)
    }
  if(req.body.activity){
      Activity.create(req.body.Activity)
          .then(data => act = data._id)
          .catch(next)
    }  
  if(req.body.geolocation){
      Geolocation.create(req.body.Geolocation)
          .then(data => geo = data._id)
          .catch(next)
    }  

  if(env!=null || act!=null || geo!=null){
    Submission.create({idEnvironnement: ObjectId(env) ,
                                      idActivities: ObjectId(act),             
                                      idGeo: ObjectId(geo)})
          .then(data => res.json(data))
          .catch(next)
  }
});

module.exports = router;