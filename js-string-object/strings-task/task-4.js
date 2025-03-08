// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let test = "This x and that X are replacing";

if (test.includes('x') ){
    test = test.replace('x','y');
}

if (test.includes('X')){
    test = test.replace('X','Y');
}

console.log(test);