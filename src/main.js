function addNumbers(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    return sum;
}

function main() {
    addNumbers([1,2,3]);
}

main();