
const calculate = require('./calculate');
console.log(calculate.add(2,3));
console.log(calculate.subtract(2,3));
console.log(calculate.multiply(2,3));
console.log(calculate.divide(2,3));

const fs = require('fs');
fs.readFile('document.text','utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});
