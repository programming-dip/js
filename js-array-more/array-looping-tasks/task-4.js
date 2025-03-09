// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person';
const words = statement.split(' ');
let revStatement =' ';

for (const word of words)
{
    revStatement = word+' '+revStatement;
}

console.log(revStatement);