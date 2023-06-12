// Import modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// Helpers



const PORT = 3001;      // Port # where server will be hosted at
const app = express();  

app.use(express.json());                            // Parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true }));    // Parse incoming requests URL-encoded payloads
app.use(express.static('public'));                  // Serve static files from directory






// GET request for main page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))  // Load main page (index.html)
);

// GET request for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))  // Load notes page (index.html)
);









// Launch server (locally) on port 3001
app.listen(PORT, () =>
  console.log(`View app at http://localhost:${PORT}`)
);
