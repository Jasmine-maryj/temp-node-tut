const {readFile, writeFile} = require('fs');

console.log('Start in async module');

readFile('./content/first.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            // console.log(result);
            console.log('Done with the task');
        });

    })
})
console.log('Starting the next task');