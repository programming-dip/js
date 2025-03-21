// const numbers = [45, 65, 23, 98, 19];
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }


const products = [
    {id: 1, name: 'xiaomi redmi phone', price: 19000,},
    {id: 2, name: 'iphone', price: 19000, },
    {id: 3, name: 'mac book air', price: 19000, },
    {id: 4, name: 'lenovo yoga', price: 19000, },
    {id: 5, name: 'Dell inspiron', price: 19000, },
    {id: 6, name: 'Samsung phone note 7', price: 19000, },
    {id: 7, name: 'Nokia Old Age Phone', price: 19000, }

];




function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        
        if (product.name.toLowerCase().includes(search.toLowerCase())){

            matched.push(product);
        }
    }

    return matched;
}

const result = matchedProducts(products, 'pHone');
console.log(result);