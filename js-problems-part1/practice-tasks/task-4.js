// Write a function to find the longest word in a given string.

function getLgWord(str){
    const words = str.split(" ");
    let letterCnt = 0;
    let lgWrd = '';
    for (let i=0; i<words.length; i++){
        if (words[i].length > letterCnt){
            letterCnt = words[i].length;
            lgWrd = words[i];
        }
    }

    return lgWrd;


}

const string = 'I love Anwesha';
console.log(getLgWord(string));
