/*
We want to count the number of vowels in a person's name. Given a name as input, the program should iterate through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be counted
*/

function vowelCount(name){
   const vowels = 'aeiouAEIOU'
   let vowelCount =0;
   for(let char of name){
      if(vowels.includes(char)){
         vowelCount++;
      }
   }
   console.log("Vowels Count: ", vowelCount)
}

vowelCount("Swayamsiddha");