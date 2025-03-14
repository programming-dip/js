/* 
* year will be a leap year if the year is divisible by 4
*/

function isLeapYear (year){
    if(year % 100!==0 && year % 4 ===0){
        return true;
    }
    else if (year % 100 ===0 && year % 400 === 0){
        return true;
    }
    return false;
}

const isLeap = isLeapYear(2052);
console.log(isLeap);