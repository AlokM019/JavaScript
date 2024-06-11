//14. Final Order Price


//customer's cart and his purchase unit
let customer_cart = [
   {unit_price: 2000, quantity: 3},
   {unit_price: 1100, quantity: 4},
   {unit_price: 1800, quantity: 1}
];


//to find the total cost of the costumer
const calculatecost = (cart) => {
   let totalCost = cart.reduce((acc, item)=>  acc + (item.unit_price * item.quantity), 0)
   return totalCost;
}

let totalCost = calculatecost(customer_cart)

console.log(totalCost);