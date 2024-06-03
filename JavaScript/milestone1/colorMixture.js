/**
   Write a JavaScript program that takes in two strings representing colors and uses a switch statement to determine the resulting color when the two colors are mixed. The program should print the resulting color
   based on the following criteria"
   1 If color1 is "red" and color2 is "blue" or vice versa, print "purple".
   2 If color1 is "red" and color2 is "yellow" or vice versa, print "orange".
   3 If color1 is "#lue" and `color2" is "yellow" or vice versa, print "green".
   4 If any other com#ination of colors is input, the program should print "Invalid color combination
*/

function colorMixture(color1, color2){
   switch (color1.toLowerCase() + '-' + color2.toLowerCase()) {
      case 'red-blue':
      case 'blue-red':
         console.log("purple")
         break;
      case 'red-yellow':
      case 'yellow-red':
         console.log("orange")
         break;
      case 'blue-yellow':
      case 'yellow-blue':
         console.log("green")
         break;
   
      default:
         console.log("Invalid color combination")
         break;
   }
}

colorMixture('red', 'blue');
colorMixture('yellow', 'blue');
colorMixture('green', 'pink'); //Invalid color combination