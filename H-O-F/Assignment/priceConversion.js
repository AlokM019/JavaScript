/* 3 Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the map higher-order function to create a new object with the converted prices in Rupees.*/

//making an object and the price of their items are in Dollar
let iteminUSD = {
  pant : 20,
  shirt : 13,
  trousor : 12,
  vest : 3
}

//exchange rate for the price conversion into INR
const exchangeRate = 80;
//conversion of USD into INR
const convertToINR = (priceInUSD) => priceInUSD * exchangeRate;

//Using the map function to create a new object with prices in INR 
let itemsInINR = Object.fromEntries(
  Object.entries(iteminUSD).map(([item,priceInUSD]) =>
  [item,convertToINR(priceInUSD)])
);

console.log(`Items in USD : `,iteminUSD); //printing the previous object 
console.log(`Items in INR : `,itemsInINR); // pringting the new object 