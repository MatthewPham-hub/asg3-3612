const path = require('path');
const fs = require('fs');

//Set path for painting json and parse. 
const paintingPath = path.join(__dirname, '../data', 'paintings-nested.json');
const paintingJson = fs.readFileSync(paintingPath, 'utf8');
const paintingData = JSON.parse(paintingJson);


module.exports = paintingData;