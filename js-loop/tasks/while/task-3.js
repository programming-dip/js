// subtask-1 Display sum of all the odd numbers from 81 to 131.
let i = 81;
let sum = 0;
while(i<=131){
    sum+=i;
    i+=2;
}

console.log(sum);

// subtask-2 Display sum of all the even numbers from 206 to 311.
let sum2 = 0;
let j = 206;
while(j <= 311){
    if(j % 2 === 0){
        sum2+=j;
    }
    j+=2;
} 

console.log(sum2);
