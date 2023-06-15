const notes = require('express').Router();

// Import helpers
const { readFromFile, readAndAppend, writeToFile, deleteContent } = require('../helpers/fsUtils');

// GET route for getting all notes
notes.get('/', (req, res) => {
        console.info(`${req.method} request received for notes`);   // Log GET request

        readFromFile('./src/db/notes.json').then((data) => res.json(JSON.parse(data)));     // Reads notes.json and send its data as JSON
    });

// POST route for submitting notes
notes.post('/', (req, res) => {
        console.info(`${req.method} request received for notes`);   // Log POST request

        const { title, text, id} = req.body;   // Get the title, text, and id from request and create variables for each

        if (req.body) {         // If request body exists
            const newNote = {   // Create new note object containing the title, text, and id from the request
                title,
                text,
                id
            };

            readAndAppend(newNote, './src/db/notes.json');      // Append new note object in notes.json file
            res.json(`Note added successfully`)                 // Log success
        } else {                                                // Error handling
            res.error('Error adding note');                     // Log error
        }
    });

// DELETE route for deleting notes
notes.delete('/:id', (req, res) => {                         // Delete note with given id
        console.info(`${req.method} request received for notes`);  // Log POST request

        const id = req.params;   // Get the id from request and create a variable for it
        
        if (id) {                                               // If id exists
            deleteContent(id, './src/db/notes.json');           // Delete note with id from notes.json file    
            res.json(`Note deleted successfully`)               // Log success        
        } else {                                                // Error handling
            res.error('Error deleting note');                   // Log error
        }
    });







module.exports = notes;