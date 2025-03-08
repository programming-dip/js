// Count how many times a string has the letter a or A
const country = 'Australia';
let count = 0;

for(const letter of country) {
    if(letter.toLowerCase() === 'a'){
        count++;
    }
}

console.log(count);