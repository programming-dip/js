// Check whether a string contains all the vowels a, e, i, o, u
const test = 'A quick brown fox jumps over the lazy dog';
const vowelSet = ['a','e','i','o','u'];

let isAllVowels = true;

for(const vowel of vowelSet){
    if(!test.toLowerCase().includes(vowel)){
        isAllVowels = false;
    }
}

console.log(isAllVowels);