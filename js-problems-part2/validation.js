function multiply (num1, num2){
    if (typeof num1 !== 'number' || num2 !== 'number'){
        return "please provide a number";
    }
    const mult = num1 * num2;
    return mult;
}

const res = multiply(5,'seven');
console.log(res);


function fullName (first, second){
    if(typeof first !== 'string' || typeof second !== 'string'){
        return 'Please enter a right name';
    }
    const full = first+' '+second;
    return full;
}

const full = fullName('Anwesha', 'Roy');
console.log(full);



function getPrice(product) {
    if (typeof product !== 'object'){
        return "please enter a valid product type";
    }
    const price = product.price;
    return price;
}


const product = {name:'dandi fandi', price:'35', color:'blue'};
const price = getPrice(product);
console.log(price);

function getSecondNum (arr){

    if (Array.isArray(arr) === false){
        return "Please provide an array";
    }
    const secondNum = arr[1];
    return secondNum;
}


const numbers = [1,3,5,7,9];
console.log(getSecondNum(numbers));