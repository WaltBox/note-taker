// Dependencies
const { append } = require("express/lib/response");
const fs = require("fs");

// Needs to be changed
const uuid = require('uuid');
const db = require('../db/db.json')
// Routing

const path = require("path");
const { resolveObjectURL } = require("buffer");
const router = require('express').Router();


// Api get request
// I need a GET request to gather data for NOTES.
router.get('/notes', (req,res)=> {
    // res.json(notes[req.params.id]);
    console.log(db)
    res.send(db)
});

// API post request

// I need a post request to post the data into the saved notes sections

router.post('/notes', (req, res) => {
   // console.log(req)
   // console.log(req.body);

    const newNote = {
        title: req.body.title,
        text: req.body.text
    }
    //push new Note to db.json
    db.push(newNote)
    //fs to write to db.json
    fs.writeFile('./db/db.json', JSON.stringify(db), err => {
        if (err) throw err;
        res.send(db)
    })
})


//Api delete request

// I need a delete request? To delete the notes from the saved notes section. 
module.exports = router;