
const products = [
    {name: 'shampoo', price:300},
    {name: 'chiruni', price:50},
    {name: 'shirt', price:1500},
    {name: 'pant', price:1200}
    
]


function getShoppingTotal (products) {
    let totalCost = 0;
    for (const product of products){
        totalCost+=product.price;
    }

    return totalCost;
}

const total = getShoppingTotal (products);

console.log ('I will spend:',total,'today');
