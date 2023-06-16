const chalk = require('chalk');             // Using chalk to color console text 
const notes = require('express').Router();  // Notes router

// Import helpers
const { readFromFile} = require('../helpers/fsUtils');
const { submitNote, deleteNote } = require('../helpers/dbUtils');

notes
    // GET route for getting all notes
    .get('/', (req, res) => {
        console.info(chalk.blue(`${req.method} request received for notes`));   // Log GET request
        readFromFile('./src/db/notes.json').then((data) => res.json(JSON.parse(data)));     // Reads notes.json and send its data as JSON
    })

    // POST route for submitting notes
    .post('/', (req, res) => {
        console.info(chalk.yellow(`${req.method} request received for notes`));   // Log POST request
        submitNote(req, res);
    })

    // DELETE route for deleting notes
    .delete('/:id', (req, res) => {                                             // Delete note with given id
        console.info(chalk.red(`${req.method} request received for notes`));    // Log POST request
        deleteNote (req, res);
    });

module.exports = notes;