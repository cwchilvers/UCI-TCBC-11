const notes = require('express').Router();

// Import helpers
const id = require('../helpers/id');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET route for getting all notes
notes.get('/', (req, res) => {
        console.info(`${req.method} request received for notes`);   // Log GET request
        readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
    });

// POST route for submitting notes
notes.post('/', (req, res) => {
    console.info(`${req.method} request received to submit note`);  // Log POST request
});

// DELETE route for deleting notes
notes.delete('/', (req, res) => {
    console.info(`${req.method} request received to delete note`);  // Log POST request
});

module.exports = notes;