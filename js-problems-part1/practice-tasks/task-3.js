//  Write a function to count the number of vowels in a string.

const string = "This is a test";

function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    for (const letter of string) {
        if (vowels.includes(letter)) {
            vowelCount++;
        }
    }

    return vowelCount;
}


console.log(vowelCount (string));