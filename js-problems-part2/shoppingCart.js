const products = [
    {name: 'shampoo', price:300, quantity: 3},
    {name: 'chiruni', price:50, quantity: 1},
    {name: 'shirt', price:1500, quantity: 4},
    {name: 'pant', price:1200, quantity: 5},
    
]


function getCartTotal (products){
    let cartTotal = 0;
    for (const product of products) {
        cartTotal+= (product.price * product.quantity);
    }

    return cartTotal;
}

const totalPrice  = getCartTotal(products);

console.log("Your total price is:",totalPrice);