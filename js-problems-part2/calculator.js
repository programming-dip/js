function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
} 

function multiply(num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1 /num2;
}

function calculator(a, b, operator){
    if(operator === 'add'){
        const result = add(a, b);
        return result;
    }
    else if (operator === 'subtract'){
        const result = subtract(a,b);
        return result;
    }
    else if (operator === 'multiply'){
        const result = multiply(a,b);
        return result;
    }
    else if (operator === 'divide'){
        return divide(a,b);
    }
    else {
        console.log("Operation not allowed");
    }
}

const result = calculator(5, 7, 'add');
console.log(result);