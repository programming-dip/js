/* 
crate function that will return only the even numbers
*/

function evenNumbers(Nums){
    let evenNums =[];
    for(const num of numbers){
        if(num % 2 ===0){
            evenNums.push(num);
        }
    }

    return evenNums;
}

const numbers = [1,2,3,4,5,6,7,8,9];
console.log(evenNumbers(numbers));