const express = require('express');

const router = express.Router();

const sportsEvent = require('../models/sportsEvent.js');

//send query parameter ?basicinfo=true
router.get('/events',(req,res) => {
    const data = {};
    sportsEvent.find({  })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',data);
        });
});

router.get('/events/:id',(req, res) => {
    const data = {};
    sportsEvent.findOne({eventId : req.params.id})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',data);
        });
});

router.get('/events/error',(req,res) => {
    throw new Error('This is an error')
});

router.get('/blah',(req,res) => {
    res.send("hello")
});

//inventory.find( { status: "A" }, { item: 1, status: 1, _id: 0 } )
//Boolean, return the fields that are 1, else dont
router.get('/basicevent',(req,res) => {
    const data = {};
    sportsEvent.find({}, {name:1, _id:0, eventId:1})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',data);
        });
});
//Do by sport!
module.exports = router;
