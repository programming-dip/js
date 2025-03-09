const persons =['fahim', 'tushar', 'mamun', 'tanvir', 'ayon'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

const numbers = [4, 1, 7, 2, 8, 3, 6,43,12];
// const num_asc = numbers.sort();   //not working properly

const num_asc = numbers.sort(function(a, b) {return a-b})
console.log(num_asc);