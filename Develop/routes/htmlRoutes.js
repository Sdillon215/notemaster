const path = require('path');
const router = require('express').Router();

// route to get index.html to display webpage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

//   route to get notes.html page
router.get('/notes', (req, res) => {
    console.log(path.join(__dirname, '../public/notes.html'));
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

  module.exports = router;