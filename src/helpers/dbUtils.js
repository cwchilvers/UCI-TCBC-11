const chalk = require('chalk');                                        // Using chalk to color console text 
const { readAndAppend, deleteContent} = require('../helpers/fsUtils'); // Import helpers

const submitNote = (req, res) => {
    let status; //(for testing purposes)

    if (req.body) {                             // If request body exists
        const { title, text, id} = req.body;    // Get the title, text, and id from request and create variables for each
        const newNote = {                       // Create new note object containing the title, text, and id from the request
            title,
            text,
            id
        };

        readAndAppend(newNote, './src/db/notes.json');                  // Append new note object in notes.json file
        res.json("Note created successfully");                          // Send response
        console.info(chalk.bgGreen.bold("Note created successfully"));  // Log success

        return status = "success";  // (for testing purposes)
    } else {                                    // If request body does not exist
        console.info(chalk.bgRed.bold("Failed to create note"));        // Log failure

        return status = "failure";  // (for testing purposes)
    }
};

const deleteNote = (req, res) => {
    if (req.body) {                             // If request body exists
        const id = req.params;                  // Get the id from request and create a variable for it
    
        deleteContent(id, './src/db/notes.json');                       // Delete note with id from notes.json file    
        res.json("Note deleted successfully");                          // Send response 
        console.info(chalk.bgGreen.bold("Note deleted successfully"));  // Log success        
    } else {                                    // If request body does not exist
        console.info(chalk.bgRed.bold("Failed to delete note"));        // Log failure    
    }
};

module.exports = { submitNote, deleteNote };