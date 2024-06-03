//
function createPromise(){
   return new Promise(function (resolve, reject){
      setTimeout(() => {
         resolve("something")
      }, 400);
   })
}

async function consume(){
  try {
      console.log("nothing");
      const response = await createPromise();
      const response2 = await createPromise(); //muiltiple promises
      console.log("nothing 2", response, response2)
  } catch (error) {
   console.log(error)
  }
}

console.log("START")
consume();
console.log("END")
console.log("is ")

// similar code with different way
const promiseFive = new Promise (function (resolve, reject){
   setTimeout(() => {
      let error = true;
      if(!error){
         resolve("promise done")
      }else{
         reject("Error: 404 not found")
      }
   }, 300);
})

async function  consumeFive(){
  try {
   const response = await promiseFive;
   console.log(response);
  } catch (error) {
   console.log(error)
  }
}
consumeFive();
