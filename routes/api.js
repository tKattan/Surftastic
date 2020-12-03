const express = require ('express');
const router = express.Router();
const Surf = require('../models/surf');

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
})

module.exports = router;