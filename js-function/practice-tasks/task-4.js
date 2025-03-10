/* 

Write a function called count_zero() which will take a binary string
(Binary string is a string which is consist of only 0 and 1) as parameter 
and count how many 0’s are there in that string.


*/

function count_zero(str){
    const strToArry = str.split('');
    let count = 0;
    for (num of strToArry){
        if (num == 0){
            count++;
        }
    }

    return count;
}


const binaryString = '0011010101';
console.log("Total number of zero is:",count_zero(binaryString));