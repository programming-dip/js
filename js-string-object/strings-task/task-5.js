// Capitalize Every first Letter of each word in a String
const str = 'Capitalize Every first Letter of each word in a String';

const words = str.split(' ');

for(let i=0; i<words.length; i++){
    words[i] = words[i][0].toUpperCase()+words[i].slice(1);
}

console.log(words.join(' '));