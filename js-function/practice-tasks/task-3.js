/* 
Write a function called make_avg() which will take an array of integers and the size of that array and 
return the average of those values. 
*/

function make_avg(arr, siz){
    let sum = 0;
    for (num of arr) {
        sum+=num;
    }

    const av = sum/siz;
    return av;
}

const numbers = [1,2,3,4,5,6];

console.log("Average of numbers:",make_avg(numbers, numbers.length));

