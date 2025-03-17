const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];

function getLowest (numbers){
    let cheap = prices[0];
    for (const number of numbers) {
        if(number < cheap ){
            cheap = number;
        }
    }

    return cheap;

}


const cheap = getLowest(prices);
console.log(cheap);