const sentence = 'I am learning web dev.';
// reverse

let reverse ='';
for (const letter of sentence){
    //console.log(letter);
    reverse = letter+reverse;
}
console.log(reverse);


// another way
let rev = '';
for(let i=0; i<sentence.length; i++){
    const letter = (sentence[i]);
    rev = letter+rev;
}

console.log(rev);


// shortcut 
const reversed = sentence.split('').reverse().join('');
console.log(reversed);
