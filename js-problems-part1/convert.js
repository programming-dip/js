// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;

}

// 75 
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchNumber = inch % 12;
    const result = feetNumber + ' ft ' + inchNumber + ' in';
    return result;

    
}

const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);

const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2);


function milesToKms (mile) {
    const km = mile * 1.60934;
    return km;
}

