/*
Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2.
Use a for loop and continue statement.
*/

function divisiblityChecker(numbers){
   for(let i=0; i<=numbers.length; i++){
      if(numbers[i]%2 == 0){
         continue;
      }
      if(numbers[i]%3 == 0){
         console.log(numbers[i]);
      }
   }
}

const numbers = [ 20,45,30,9,63];
divisiblityChecker(numbers)