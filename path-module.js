const path = require('path');

// console.log(path.sep);

const filePath = path.join('/folder', 'subFolder', 'test.txt');
// console.log(filePath);

const absolute = path.resolve(__dirname, 'folder', 'subFolder', 'test.txt')
console.log(absolute);