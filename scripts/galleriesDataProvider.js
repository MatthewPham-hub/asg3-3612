const path = require('path');
const fs = require('fs');
const galleriesPath = path.join(__dirname, '../data', 'galleries.json');
const galleriesJson = fs.readFileSync(galleriesPath, 'utf8');
const galleriesData = JSON.parse(galleriesJson);

module.exports = galleriesData;
