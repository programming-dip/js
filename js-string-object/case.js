const school = 'San Souchi Public School';
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject ='Chemistry';
const book = 'chemistry';

if (subject.toLowerCase() === book.toLowerCase()){
    console.log('I am reading the book');
}else {
    console.log('I am just turning the pages');
}

const drink = 'water';
const liquid = ' water ';
if(drink.trim() === liquid.trim()){
    console.log('Water is called life');
}
else {
    console.log('Sea water is not drinkable');
}