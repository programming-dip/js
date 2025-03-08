const school = {
    name: 'vnc',
    class: ['10', '11', '12'],
    events: ['science fair', 'Australia Day'],
    unique: {
        color: 'blue',
        result: {
            gpa:5,
            merit: 'top',
        }
    },
}

console.log(school);
console.log(school.unique);
console.log(school.unique.color);
console.log(school.unique.result.gpa);