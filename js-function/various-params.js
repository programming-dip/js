/* 
For a given string tell me whether it has even number of characters or not
*/

function isEvenSizedString(str){
   if (str.length % 2 === 0){
    console.log("Even size");
    return true;
   } else {
    console.log("Odd size");
    return false;
   }
   
}

isEvenSizedString("Dhaka");