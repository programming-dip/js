// Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange']

let rev_color=[];

for(const color of colors){
    rev_color.unshift(color);
}

console.log(rev_color);