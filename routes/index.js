const express = require('express');

// Import routers
const notesRouter = require('./notes');

const app = express();

// Send /notes requests (which is under /api) to notes router
app.use('/notes', notesRouter);

module.exports = app;