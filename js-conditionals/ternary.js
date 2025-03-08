/**
 * Ternary --> Three parts
 * */ 

const age = 18;
// if (age>=18){
//     console.log('You can vote.')
// }
// else {
//     console.log('Go sleep you chicken')
// }


// Simple ternary
age >=18 ? console.log('You can vote') : console.log('Go sleep you chicken');


let price = 500;
const isLeader = false;

// if(isLeader == true){
//     price= 0;
// }
// else {
//     price+=100;
// }

// console.log(price);

// Semi advance ternary
price = isLeader === true ? 0 : price+100;
console.log(price);