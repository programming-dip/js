const numbers = [1, 2, 3, 4, 5, 6, 7];

// const reversed = numbers.reverse();
// console.log(reversed);

const revNumbers = [];
for(const num of numbers){
    revNumbers.unshift(num);
}

console.log(revNumbers);

const reversedNums =[];
for(let i=0; i<numbers.length; i++)
{
    reversedNums.unshift(numbers[i]);
}

console.log(reversedNums);

// reversed side 

const ultaNums=[];
for (let i=numbers.length-1; i>=0; i--){
    ultaNums.push(numbers[i]);
}

console.log(ultaNums);