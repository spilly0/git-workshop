function addNumbers(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    return sum;
}
    
function readFile() {
    const fs = require('fs');
    const file = fs.readFileSync(process.argv[2], 'utf-8');
    return file.split('\n');
}

function main() {
    readFile();
    addNumbers([1,2,3]);
}


main();