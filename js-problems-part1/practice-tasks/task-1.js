// Write a function to convert temperature from Celsius to Fahrenheit.

function celToFah(cel){
    return (cel* 1.8 + 32).toFixed(1);
}

console.log(celToFah(99));