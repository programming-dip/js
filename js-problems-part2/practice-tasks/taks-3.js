// Your task is to calculate the total budget required to buy electronics:
const products = [{name: 'laptop', cost: 35000, quantity: 8}, {name: 'tablet', cost: 15000, quantity: 4},{name: 'mobile', cost: 20000, quantity: 5}];

function calculateElectronicsBudget(productsList) {
    let totalPrice = 0; 
    for(const product of productsList) {
        totalPrice+= (product.cost * quantity);
    }

    return totalPrice;
}

console.log("These products will cost you:",calculateElectronicsBudget(products),"BDT");