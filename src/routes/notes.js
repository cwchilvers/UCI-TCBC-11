const notes = require('express').Router();

// Import helpers
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

// GET route for getting all notes
notes.get('/', (req, res) => {
        console.info(`${req.method} request received for notes`);   // Log GET request
        readFromFile('./src/db/notes.json').then((data) => res.json(JSON.parse(data)));
    });

// POST route for submitting notes
notes.post('/', (req, res) => {
        console.info(`${req.method} request received to submit note`);  // Log POST request
        writeToFile('./src/db/notes.json').then((data) => res.json(JSON.parse(data)));
    });

// DELETE route for deleting notes
notes.delete('/', (req, res) => {
        console.info(`${req.method} request received to delete note`);  // Log POST request
    });

module.exports = notes;