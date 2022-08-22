const {readFileSync, writeFileSync} = require('fs')

console.log('start');
const first = readFileSync('./folder/first.txt', 'utf-8');
const second = readFileSync('./folder/second.txt', 'utf-8');

 
writeFileSync(
    './folder/result-sync.txt',
    `Here is the result : ${first}, ${second}`
)

console.log('done with this task');
console.log('starting the next one');