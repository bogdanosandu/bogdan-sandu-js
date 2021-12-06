const fs = require('fs');

const data = fs.readFileSync('./file.txt', 'utf8');

const secondData = `${data} This is our node script!`;

console.log(secondData);
