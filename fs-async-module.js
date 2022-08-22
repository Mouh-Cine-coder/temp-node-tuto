const {readFile, writeFile} = require('fs')

// create a result-async
console.log('start this task');
readFile('./folder/first.txt','utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./folder/second.txt','utf8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './folder/result-sync-1.txt',
            `Here is ${first} and ${second}`,
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log('done with task');
            })
    })
} )
console.log('starting next one');