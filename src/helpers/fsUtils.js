const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */

const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

const deleteContent = (note, file) => { 
  // Delete object with given id from notes.json file
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      let parsedData = JSON.parse(data);    // Parse data from notes.json file

      // look for object with given id inside parsedData
      for (let i = 0; i < parsedData.length; i++) {
          // If object with given id is found
          if (parsedData[i].id === note.id) {
              parsedData.splice(i, 1);        // Delete object with given id from parsedData array
              writeToFile(file, parsedData);  // Write parsedData to notes.json file
              break;
          }
      }
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend, deleteContent };
