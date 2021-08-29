const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// reads notes in db
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
    });
});

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
    });
});

module.exports = router;