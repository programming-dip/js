const person = {
    name: 'sodor uddi',
    age: 25,
    profession: 'developer',
    salary: 70000,
    married: true,
    'fav places': ['wollongong', 'bondi', 'brighton'],
}

person.salary = 80000;
person['age'] = 26;
console.log(person);
const keyName = 'profession';
console.log(person[keyName]);

const propName = 'profession';
person[propName] = 'devops';
console.log(person);
