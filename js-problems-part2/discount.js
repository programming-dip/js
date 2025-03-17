/**
 * upto 100: -->100
 *  101-200: --> 90
 * more than 200: --> 70
*/

function disCountPrice (quantity) {
    if (quantity <= 100){
        const totalPrice = quantity * 100; 
        return totalPrice;
    }
    else if (quantity <= 200)
    {
        const totalPrice = quantity * 90;
        return totalPrice;
    }
    else {
        const totalPrice = quantity * 70;
        return totalPrice;
    }
}

const total = disCountPrice(201);
console.log(total);