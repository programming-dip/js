/**
 * Looping Technique
 * 1. for loop
 * 2. while loop
 * 3. do while
 * 4. for of --> array loop
 * 5. for in --> object loop
 * */ 

const friends = ['Elon', 'Bill', 'Mark', 'Waren'];
for(const friend of friends){
    console.log(friend);
}

for(let i = 0; i<friends.length; i++){
    console.log(i);
    console.log(friends[i]);
}

const numbers = [55,78,578,548,32,12,356,987,248,54598,7];
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

let j=0;
while (j<friends.length){
    console.log(friends[j]);
    j++;
}