const {readFileSync, writeFileSync} = require('fs');

console.log('start in fs sync module');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag:'a'});

console.log('Done with the task in sync module');
console.log('Starting the next one');