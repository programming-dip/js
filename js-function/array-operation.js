/* 
Write a function to return the sum of all numbers in an array
*/

function sumOfNumbers(numbers){
    let sum=0;
    for(const number of numbers){
        sum+=number;
    }
    return sum;
}

const nums = [54,62,12,6];
const sum = sumOfNumbers(nums);
console.log(sum);