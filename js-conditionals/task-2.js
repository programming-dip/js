// https://github.com/ProgrammingHero1/JS-conditionals-tasks/blob/main/2%20BMI_Calculator.js
// BMI Calculator
let weight = 75;
let height = 1.65;
let bmi = weight / ((height)^2);

if (bmi<18.5){
    console.log('you are underweight')
} 
else if (bmi>=18.5 && bmi<=24.9){
    console.log('you are normal')
}
else if (bmi>=25 && bmi<= 29.9){
    console.log('you are overweight')
}
else {
    console.log('you are obese');
}