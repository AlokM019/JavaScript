/*2.You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.*/

let myArray = [1,2,3,5,6,3,5,6,1,1,1,1,8];

function uniqueElements(elements){
  let uniSet = new Set(elements);
  return uniSet;
}

const result = uniqueElements(myArray);
console.log(result);