const notes = require('express').Router();

// Import helpers
const { readFromFile, readAndAppend, deleteContent } = require('../helpers/fsUtils');

notes
    // GET route for getting all notes
    .get('/', (req, res) => {
        console.info(`${req.method} request received for notes`);   // Log GET request

        readFromFile('./src/db/notes.json').then((data) => res.json(JSON.parse(data)));     // Reads notes.json and send its data as JSON
    })

    // POST route for submitting notes
    .post('/', (req, res) => {
        console.info(`${req.method} request received for notes`);   // Log POST request

        const { title, text, id} = req.body;    // Get the title, text, and id from request and create variables for each
        const newNote = {                       // Create new note object containing the title, text, and id from the request
            title,
            text,
            id
        };

        readAndAppend(newNote, './src/db/notes.json');      // Append new note object in notes.json file
        res.json("Note created successfully");              // Send response
    })

    // DELETE route for deleting notes
    .delete('/:id', (req, res) => {                         // Delete note with given id
        console.info(`${req.method} request received for notes`);  // Log POST request

        const id = req.params;   // Get the id from request and create a variable for it
        
        deleteContent(id, './src/db/notes.json');           // Delete note with id from notes.json file    
        res.json("Note deleted successfully");              // Send response                  
    });

module.exports = notes;