/*Create a javascript program that takes in two num#ers and a string operator. Make use of a switch statement to perform the operation on the two numbers
The calculator function should"
1. Take in two num#ers, num1 and num2, and a string representing a mathematical operator, operator.
2. Use a switch statement to determine which operation to perform #ased on the value of the operator.
3. If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical operation and store the result in a varia#le called result.
4. If the operator is not one of the valid operators, log "Invalid operator" to the console.
 */

function calculator(num1, num2, operator){
   let result;
   switch (operator) {
      case '+':
         result = num1 + num2;
         break;
      case '-':
         result = num1 - num2;
         break;
      case '*':
         result = num1 * num2;
         break;
      case '/':
         result = num1 / num2;
         break;
   
      default:
         console.log("Invalid Operator")
         break;
   }
   console.log("Result:", result)
}

calculator(4,5,'*');

calculator(90, 40, '-')

calculator(21,4,'+')

calculator(60, 12, '/');

calculator(10,9,'%');
