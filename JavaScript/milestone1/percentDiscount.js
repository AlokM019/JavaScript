// 15. Calculate the percentage of the discount

let original_price = 2100;
let discounted_price = 1100;

const discount_percentage = (original_price, discounted_price) => {
   //discount amount
   let discount = original_price - discounted_price;
   console.log("discount given", discount)
   
   //getting the discounted percentage 
   const discount_percentage = discount/original_price * 100;

   //rounding off the percentage upto 2 decimal numbers with math.round()
   let result = Math.round(discount_percentage*100)/100
   return result
}

let percentage = discount_percentage(original_price,discounted_price)

console.log("discount %", percentage)
