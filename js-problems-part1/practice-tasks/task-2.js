// You are given an array of numbers. Count how many times the a number is repeated in the array.

const numbers = [5,6,11,12,98, 5];

const find = 5;

let count = 0;

for (const number of numbers) {
    if (number === find) {
        count ++;
    }
}

console.log(count);