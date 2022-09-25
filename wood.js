function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood =3;
    const perTableWood =10;
    const perBedWood =50;

    const result = (chairQuantity*perChairWood)+(tableQuantity*perTableWood)+(bedQuantity*perBedWood);

    return result;
}

const totalWood = woodCalculator(5,2,1);
console.log(totalWood, 'cft wood needed');