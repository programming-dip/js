const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers) {
    let max = heights[0];

    for (number of numbers) {
        if (number > max) {
            max = number;
        }
    }

    return max;
}

console.log("max value is",getMax(heights));
