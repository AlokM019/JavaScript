/**
In an online shopping application, customers can add multiple items to their cart. However, sometimes customers accidentally add the same item more than once, resulting in duplicate items in their cart. The duplicate items not only make it difficult for the customer to track the items they want to purchase but also affect the accuracy of the purchase order.
To solve this problem, the application needs to remove duplicate items from the customdr's cart. The program should take the customer's cart with duplicates as input, and return a new cart without duplicates.

Write a program to solve the problem of duplicate items in the cart by removing duplicates.
*/

let items = [1,2,3,4,3,2,5,3,7,3,6];

function removeDublictes(dublicateItems){
   const uniqueCart = Array.from(new Set(dublicateItems));
   return uniqueCart;
}

const newCart = removeDublictes(items);
console.log(newCart)
