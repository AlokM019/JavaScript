//1  Reverse the string and use setTimeOut() that print the reversed string after a delay of 2sec

let originalString = "Hello Mark ! How are you ?"

console.log("Original String: ", originalString);

// setTimeout(() => {
//   let reversedString = originalString.split("").reverse().join("");
//   console.log("Reversed String: ", reversedString);

// },2000);

//OR
function reversestr(){
  const str = originalString.split("").reverse().join("");
  console.log("Reversed String: ",str)
}

setTimeout(reversestr,2000);