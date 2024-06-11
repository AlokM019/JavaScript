//13. Find the total cost and split the bill amoung the no of peole

let dish_cost = {
   dishA : 200,
   dishB : 500,
   dishC : 250
}

function splitBill(total_cost, No_of_People){

   return {
      total_cost: total_cost,
      cost_per_person : total_cost/No_of_People
   }
}

let result = splitBill(dish_cost.dishB * 2 + dish_cost.dishC , 3);
console.log(result) //{total_cost: 1250, cost_per_person: 416.67}


//another way

function calculateBill(dishCosts, numberOfPeople) {
   // Calculate the total cost of all dishes
   let totalCost = dishCosts.reduce((acc, cost) => acc + cost, 0);
   
   // Calculate the cost per person
   let costPerPerson = totalCost / numberOfPeople;

   return {
      total_bill: totalCost,
      bill_per_person: costPerPerson
   };
}

let dishCosts = [200, 500, 250]; // Array of dish costs
let numberOfPeople = 3;

let result2 = calculateBill(dishCosts, numberOfPeople);
console.log(result2); // { total_bill: 950, bill_per_person: 316.6666666666667 }
