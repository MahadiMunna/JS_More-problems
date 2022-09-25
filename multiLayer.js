function totalPrice(totalTicket){
    const first100ticket = 100;
    const second100ticket = 90;
    const restTicket = 70;
    
    if(totalTicket<=100){
        var total = totalTicket*first100ticket;
        return total;
    }
    else if(totalTicket<=200){
        var total = 100 * first100ticket;
        total+=(totalTicket-100)*second100ticket;
        return total;
    }

    else {
        var total = 100 * first100ticket;
        total+=100*second100ticket;
        total+=(totalTicket-200)*restTicket;
        return total;
    }
}

const total = totalPrice(101);
console.log(total);