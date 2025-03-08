// Count how many times a string has the letter a
const country = 'Australia';

let count = 0;
for(const letter of country){
    if(letter==='a'){
        count++;
    }
}

console.log(count);