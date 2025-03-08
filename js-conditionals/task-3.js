// https://github.com/ProgrammingHero1/JS-conditionals-tasks/blob/main/3%20Grade_Calculator.js
// Grade Calculator

let score=95;
if(score>=0 && score<=59)
{
    console.log('F');
}
else if (score>59 && score<=69)
{
    console.log('D');
}
else if (score>69 && score<=79)
    {
        console.log('C');
    }
else if (score>79 && score<=89)
{
    console.log('B');
}
else if (score>89 && score<=100)
    {
        console.log('A');
    }
else{
    console.log('Wrong Input');
}    