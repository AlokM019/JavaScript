//12. find the rental cost of a car


let cartype = {
   Economy : 4000,
   Midsize : 10000,
   Luxry : 20000
}
function rentalCostOfACar(rentedCarType, days){
   let total_cost = rentedCarType*days;
   return total_cost;
}

let rented_cost = rentalCostOfACar(cartype.Midsize , 3) //30000
console.log(rented_cost)