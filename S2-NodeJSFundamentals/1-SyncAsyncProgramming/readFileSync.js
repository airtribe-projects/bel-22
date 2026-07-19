const fs = require('fs');

const filePath = '../input/leviathan.txt';

console.time('ReadFile');
const data = fs.readFileSync(filePath, 'utf-8');
console.timeEnd('ReadFile');

for(let i=0; i<5; i++) {
    console.log(i)
}