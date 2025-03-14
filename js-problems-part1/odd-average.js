/* *
* function takes an array as parameter
* give me the average of the odd numbers in the array
* */

function oddAverage(numbers){
     
     let sumOfOdd = 0;
     let oddCount = 0;
     for (number of numbers) {
        if (number % 2 === 1){
            oddCount++;
            sumOfOdd+=number;
            
        }
     }

     return sumOfOdd / oddCount;
}

const numbers = [42, 13, 58, 65, 81, 96];

console.log(oddAverage(numbers));