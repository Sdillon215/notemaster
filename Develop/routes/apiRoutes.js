const router = require('express').Router();
// const { getAndRenderNotes, saveNote, getNotes, renderNoteList } = require('../public/assets/js/index');
const fs = require('fs');
const path = require('path');

// route to read notes that are stored in db.json file
router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', (error, data) => {
        if (error) {
            throw error;
        } else {
            let notes = [];
            if (data) {
            notes = JSON.parse(data);

            }
            return res.json(notes);
        }
    })
});

// // need post route to save notes in db.json file
router.post('/notes', (req, res) => {

    fs.readFile('./db/db.json', (error, data) => {
        if (error) {
            throw error;
        } else {
            let notes = [];
            if (data) {
            notes = JSON.parse(data);
            };
            let note = req.body;
            note.id = notes.length;
            notes.push(note);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify(notes, null, 2),
                (error, data) => {
                    if (error) {
                        throw error;
                    }
                }
            );
            res.json(notes)
        }
    })
});

// need route to delete IT WILL BE MOSTLY THE SAME EXCEPT LINE 38 NO PUSH... SOMETING ELSE PLUS FOR LOOP TO FIND ITEM TO DELETE
router.delete('/notes/:id', (req, res) => {
    fs. readFile('./db/db.json', (error, data) => {
        if (error) {
            throw error;
        } else {
            let notes = [];
            if (data) {
            notes = JSON.parse(data);
            };
            let note = req.body;
            note.id = req.params.id;
            notes.splice(note.id, 1);
            console.log("db.json", notes);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify(notes, null, 2),
                (error, data) => {
                    if (error) {
                        throw error;
                    }
                    return res.json(notes);
                }
            );
        }
    })
    console.log(req.params.id);
    res.json(req.params.id);
});

module.exports = router;