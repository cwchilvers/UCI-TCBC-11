// Import modules
const express = require('express');
const path = require('path');

// Routers
const api = require('./routes/index');

const PORT = 3001;      // Port # where server will be hosted at
const app = express();  

// .use
app
    .use(express.json())                            // Parse incoming requests with JSON payloads
    .use(express.urlencoded({ extended: true }))    // Parse incoming requests URL-encoded payloads
    .use(express.static('public'))                  // Serve static files from directory
    .use('/api', api);                              // Send /api requests to index.js to handle

// GET Requests for pages
app
    // GET request for main page
    .get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '/public/index.html'))        // Load main page (index.html) when user goes to localhost:3002
    )

    // GET request for notes page
    .get('/notes', (req, res) =>
        res.sendFile(path.join(__dirname, '/public/pages/notes.html'))  // Load notes page (index.html) when user goes to localhost:3002/notes
    )

    // GET request for non-existent addresses
    .get('*', (req, res) =>
        res.sendFile(path.join(__dirname, '/public/pages/404.html'))    // Load 404 page (404.html) when user goes to any non-existent address
    );

// Launch server (locally) on port 3001
app.listen(PORT, () =>
  console.log(`View app at http://localhost:${PORT}`)
);
