/*
9. Check the presence using closures.

Create a numberChecker function that takes an array of numbers as an argument and returns a function. The returned function should take another number as an argument and return true if the number is in the array, and false otherwise.

*/
const arr = [2,3,4,5,6]

function numberChecker([...arr]){
    return function(num){
        if(arr.includes(num)){
            return true
        }else{
            return false
        }
    }
}

const checkNum = numberChecker(arr)
console.log(checkNum(9)); // the result will be false as 9 is not  present in the array
console.log(checkNum(4)); // true

