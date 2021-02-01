const router = require('express').Router();
const fs = require('fs');

// route to read notes that are stored in db.json file
router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', (error, data) => {
        if (error) {
            throw error;
        } else {
            const notes = JSON.parse(data);
            return res.json(notes);
        }
    })
});

// need post route to save notes in db.json file
// need route to 

module.exports = router;