/* 
* array has some duplicate elements
*/

const biryaniLover = ['abul', 'babul', 'kabul', 'cabul', 'abul', 'babul', 'dabul'];
const numbers = [1, 4, 3, 61, 3, 2, 9, 2];

function noDuplicate (arr) {
    const uni =[];
    for (const item of arr) {
        if (uni.includes(item) === false) {
            uni.push(item);
        }
    }

    return uni;
}

console.log(noDuplicate(biryaniLover));