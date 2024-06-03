function history(x,fun){
   // h-> h is a higher order function
   // fun -> fun is callback funtion 
   console.log("any number", x);
   fun(x*x);
}

// history(4,function(){
//    console.log("done with the callback")
// })

history(4, exec);

function exec(n){
   console.log("Square value of N is", n)  // Synchronous callback
}

console.log("Start");
setTimeout(() => {
   console.log("Done with the timer")    //Asynchronous callback
}, 3000);

console.log("END")
for (let i = 0; i < 10000000; i++) {
   
}