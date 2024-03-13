
const input = require("readline-sync");`
`

let N = input.questionInt("number ; ");

let numbers = [];
let count = 0;

while (count < N) {
    numbers.push(input.questionInt(`Enter number ${count + 1}: `));
    count++;
}

let max = numbers[0];
let min = numbers[0];

let i = 1;

while (i < numbers.length) {
    max = Math.max(max, numbers[i]);
    min = Math.min(min, numbers[i]);
    i++;
}

console.log(`Maximum value: ${max}`);
console.log(`Minimum value: ${min}`);

