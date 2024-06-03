function createPromise(){
   return new Promise(function exec(resolve, reject){
      // asynchronous code
      setTimeout(() => {
         console.log("timer done with the execution")
         // resolve(10);
         reject(10)
      }, 3000);
   });
}

console.log("Start");
let x = createPromise();
console.log("got a new Promise");
x.then(function f(value){
   console.log("promise done",value)
}).catch(function g(value){
   console.log("handled", value)
}).finally(function fn(){
   console.log("finally 1");
});
console.log("End");

