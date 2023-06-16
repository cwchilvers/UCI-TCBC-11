// Import modules
const express = require('express');
const path = require('path');

// Routers
const api = require('./src/routes/index');

const app = express();  
const PORT = 3000;      // Port # where server will be hosted at

app
    // .use
    .use(express.json())                            // Parse incoming requests with JSON payloads
    .use(express.urlencoded({ extended: true }))    // Parse incoming requests URL-encoded payloads
    .use(express.static('public'))                  // Serve static files from directory
    .use('/api', api)                               // Send /api requests to index.js to handle

    // GET request for pages
    .get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '/public/pages/index.html'))  // Load main page (index.html) when user goes to localhost:3002
    )

    .get('/notes', (req, res) =>
        res.sendFile(path.join(__dirname, '/public/pages/notes.html'))  // Load notes page (index.html) when user goes to localhost:3002/notes
    )

    .get('*', (req, res) =>
        res.sendFile(path.join(__dirname, '/public/pages/404.html'))    // Load 404 page (404.html) when user goes to any non-existent address
    )

    // Launch server (locally) on port 3000
    .listen(PORT, () =>
        console.log(`View app at http://localhost:${PORT}`)
    );
