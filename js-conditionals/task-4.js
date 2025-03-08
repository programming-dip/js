// https://github.com/ProgrammingHero1/JS-conditionals-tasks/blob/main/4%20nested-friend.js
// nested-friend
let myScore=81;
let frndScore=60;
if(myScore>80){
    if(frndScore>80){
        console.log('Go for a lunch');
    }
    else if (frndScore<80 && frndScore>=60){
        console.log('Good luck next time');
    }
    else if (frndScore<60 && frndScore>=40){
        console.log('message unseen');
    }
    else if (frndScore<40){
        console.log('block him');
    }
}
else {
    console.log('Go to home and sleep and act sad');
}