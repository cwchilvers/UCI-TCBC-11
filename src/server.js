// Import modules
const express = require('express');
const path = require('path');

// Routers
const api = require('./routes/router.js');
const app = express();  
const PORT = 3000;

app
    .use(express.json())                            // Parse incoming requests with JSON payloads
    .use(express.urlencoded({ extended: true }))    // Parse incoming requests URL-encoded payloads
    .use(express.static('public'))                  // Serve static files from directory
    .use('/api', api)                               // Send /api requests to index.js to handle

    // Pages
    .get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/pages/index.html'))
    )

    .get('/notes', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/pages/notes.html')) 
    )

    .get('*', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/pages/404.html'))
    )

    // Launch server on port 3000
    .listen(PORT, () =>
        console.log(`View app at http://localhost:${PORT}`)
    );
