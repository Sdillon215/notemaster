const router = require('express').Router();
const fs = require('fs');

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

module.exports = router;