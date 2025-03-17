// Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


function getSmallestWord(arr) {
    let smallestWord =arr[0];
    for (const word of arr){
        if(typeof word !== 'string'){
            return "some or one element(s) is not  string";
        }
        if (word.length < smallestWord.length){
            smallestWord = word;
        }
    }

    return smallestWord;
}

console.log('The smallest name is ',getSmallestWord(heights2));