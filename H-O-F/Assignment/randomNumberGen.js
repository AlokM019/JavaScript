/* 2 The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number.*/

let delayInSeconds = 3;
let timeRemaining = delayInSeconds;
let countdownInterval;

countdownInterval = setInterval(() =>{
  console.log(`Time Remaining : ${timeRemaining} seconds`);
  timeRemaining--;

  if(timeRemaining < 0 ){
    clearInterval(countdownInterval);
    generateRandomNumber();
  }
},1000);

function generateRandomNumber(){
  let randomNumber = Math.floor(Math.random()*100);
  console.log(`Random Number Generated : ${randomNumber}`);
};