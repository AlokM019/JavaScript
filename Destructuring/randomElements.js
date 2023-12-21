//4. You are building a program that takes an array of numbers as input and you need to extract the first, second, and last elements of the array. You decide to write a function that can accomplish this task using destructuring assignment with an array. The function should take the array as an argument, destructure it into three variables representing the first, second, and last elements, and then return an array with these three values. For example, if the input array is [1, 2, 3, 4, 5], the function should return an array [1, 2, 5].


/*
function randomEle(arr){
  const [first, second, , , last]= arr;
  return [first, second, last];
} // this particular function only works for the given array lenght which is 5 but won't work for the larger array > 5

let array1 = [1,2,3,4,5];
console.log(randomEle(array1));
 */


// alternate way for the array > 5
let array = [1,2,3,4,5,6,7,8,90];

function randomElements(array){
  const resultArr = array.slice(0,2).concat(array.slice(-1));
  return resultArr;
}

let result = randomElements(array);
console.log(result);