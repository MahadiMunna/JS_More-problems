const phones=[
    {name:'Samsung',camera:'12mp',storage:'32gb',color:'black',price: 56000},
    {name:'Walton',camera:'12mp',storage:'32gb',color:'black',price: 26000},
    {name:'Iphone',camera:'12mp',storage:'32gb',color:'black',price: 96000},
    {name:'Xiaomi',camera:'12mp',storage:'32gb',color:'black',price: 26000},
    {name:'Realme',camera:'12mp',storage:'32gb',color:'black',price: 16000},
    {name:'HTC',camera:'12mp',storage:'32gb',color:'black',price: 56000}
]

function cheapestPhone(phones){
    let cheapest = phones[0];
        
    for(let i = 0; i < phones.length; i++){
        
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }

    }
    return cheapest;
}

const cheapPhone = cheapestPhone(phones);
console.log(cheapPhone);