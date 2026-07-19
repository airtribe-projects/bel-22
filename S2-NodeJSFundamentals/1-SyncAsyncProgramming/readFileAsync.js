const fs = require('fs');
const filePath = '../input/leviathan.txt';


console.time('AsyncFileRead');
const done = (data) => {
    console.log('File reading complete');
    console.timeEnd('AsyncFileRead');
}

console.time('ReadFile');
const data = fs.readFile(filePath, 'utf-8', done);
console.timeEnd('ReadFile');

for(let i=0; i<5; i++) {
    console.log(i)
}