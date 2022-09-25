const shoppingCart = [
    {name: 'shoe',price: 1200,quantity:2},
    {name: 'shirt',price: 2200,quantity:6},
    {name: 'pant',price: 3200,quantity:3},
    {name: 'belt',price: 600,quantity:3},
]

function cost(shoppingCart){
    let total = 0;
    for(let i=0;i<shoppingCart.length;i++){
        const product = shoppingCart[i];
        total = total+(product.price*product.quantity);
    }
    return total;
}
const total  = cost(shoppingCart);
console.log(total);