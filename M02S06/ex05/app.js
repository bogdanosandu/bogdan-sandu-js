// 16+
// import {readFileSync} from 'fs';

// fs = {readFileSync: () => {}, writeFileSync: () => {}}
const fs = require('fs');

fs.writeFileSync('./output1.txt', 'Invaţ node.js');

const data = fs.readFileSync('./output1.txt', 'utf-8');

let today = new Date();
today = today.toLocaleDateString('ro');

console.log(data + ', azi ' + today + '.');
