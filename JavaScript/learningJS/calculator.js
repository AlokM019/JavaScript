//2.
function clacy(num1, numn2, operator){
   let result ;
   switch(operator){
      case '+':
         result = num1 + numn2;
         break;
      
      case '-':
         result = num1 - numn2;
         break;
      
      case '*':
         result = num1 * numn2;
         break;
      
      case '/':
         result = num1 / numn2;
         break;
      default:
         console.log("Invalid Operator");
         return;
      
   }
   console.log("Result:", result);
}

clacy(2,3,'+');
clacy(9,5,'-');
clacy(2,13,'*');
clacy(24,6,'/');