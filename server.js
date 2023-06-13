// Import modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// Import helpers
const id = require('./helpers/id');

const PORT = 3001;      // Port # where server will be hosted at
const app = express();  

// .use
app
    .use(express.json())                             // Parse incoming requests with JSON payloads
    .use(express.urlencoded({ extended: true }))     // Parse incoming requests URL-encoded payloads
    .use(express.static('public'));                  // Serve static files from directory

// GET Requests
app
    // GET request for main page
    .get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))            // Load main page (index.html) when user goes to localhost:3002
    )

    // GET request for notes page
    .get('/notes', (req, res) =>
        res.sendFile(path.join(__dirname, '/public/notes.html'))        // Load notes page (index.html) when user goes to localhost:3002/notes
    )

    // GET request for saves notes
    .get('/api/notes', (req, res) => {
        res.json(`${req.method} request received to get notes`);        // Send message to client
        console.info(`${req.method} request received to get notes`);    // Log POST request
    })

    // GET request for non-existent addresses
    .get('*', (req, res) =>
        res.sendFile(path.join(__dirname, '/public/404.html'))          // Load 404 page (404.html) when user goes to any non-existent address
    );






  
// POST request to add a review
app.post('/api/reviews', (req, res) => {


  });






// Launch server (locally) on port 3001
app.listen(PORT, () =>
  console.log(`View app at http://localhost:${PORT}`)
);
