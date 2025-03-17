// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

function getLowest(numbers){

    if (Array.isArray(numbers) === false) {
        return "please enter an array";
    }
    let lowest = numbers[0];

    for (const number of numbers) {
        if (number < lowest) {
            lowest = number;
        }
    }
    return lowest;
}

console.log("The lowest height in this array is",getLowest(heights2));