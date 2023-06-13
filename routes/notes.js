const notes = require('express').Router();

// Import helpers
const id = require('../helpers/id');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET route for getting all notes
notes.get('/', (req, res) => {
        console.info(`${req.method} request received for notes`);    // Log POST request
        readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = notes;