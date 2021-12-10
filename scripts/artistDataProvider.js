const path = require('path');
const fs = require('fs');

const artistPath = path.join(__dirname, '../data', 'artists.json');
const artistJson = fs.readFileSync(artistPath, 'utf8');
const artistData = JSON.parse(artistJson);


module.exports = artistData;