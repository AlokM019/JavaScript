/**
Write a program that takes an integer input i and prints an inverted right-angled triangle pattern of asterisks with i rows.

Invertdd right-angled pattern: If i=6

*/

function invertedRightAngleTriangle(i){
   for(let row=i; row>=1; row--){
      let pattern = ' '
      for(let j=1; j<=row; j++){
         pattern += '*'
      }
      console.log(pattern)
   }
   
}

invertedRightAngleTriangle(6)
