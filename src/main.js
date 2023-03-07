function readFile() {
    const fs = require('fs');
    const file = fs.readFileSync(process.argv[2], 'utf-8');
    return file.split('\n');
}

function main() {
    readFile();
}

main();