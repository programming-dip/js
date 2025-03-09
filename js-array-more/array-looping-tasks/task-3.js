// Use a for...of loop to concatenate all the elements of an array into a single string.
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

let singleString='';

for (const num of numbers){
    // singleString+=num;
    singleString=singleString.concat(num);
}

console.log(singleString);