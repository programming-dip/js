/**
 * first100 --> 100
 * second100 --> 90
 * above --> 70
*/

function layeredDiscountTotal (quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity<=100){
        const totalPrice = quantity * first100Price;
        return totalPrice;
    }else if (quantity <= 200){
        const first100PriceTotal = 100 * first100Price;
        const  second100PriceTotal = (quantity - 100) * second100Price;
        const totalPrice = first100Price + second100PriceTotal;
        return totalPrice;
    }else {
        const first100PriceTotal = 100 * first100Price;
        const  second100PriceTotal = 100 * second100Price;
        const restPriceTotal =  (quantity - 200) * above200Price;
        const totalPrice = first100Price + second100Price + restPriceTotal;
        return totalPrice;
    }
}


const total = layeredDiscountTotal(201);
console.log(total);