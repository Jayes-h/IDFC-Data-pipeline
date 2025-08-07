const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const DATA_DIR = './data';

function loadCSV(fileName) {
    console.log("load csv");
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(path.join(DATA_DIR, fileName))
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (err) => reject(err));
    });
}

module.exports={ loadCSV};