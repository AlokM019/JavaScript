//16. Generate random number using self-invoking function

(() => {
   let random_number = Math.floor(Math.random()*100)+1
   return console.log(random_number);
})();