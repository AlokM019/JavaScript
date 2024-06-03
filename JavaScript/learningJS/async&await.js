// Async/Await funtion for handling asynchronous data with Promises
const promiseFive = new Promise(function(reslove, reject){
   setTimeout(() => {
      let error = true;
      if(!error){
         reslove({username: "ABCD", Email: "XYZ@Eexample.com"})
      }else{
         reject("ERROR: Something went wrong")
      }
   }, 2000);
})

async function consumePromise(){
   try{
      console.log("repository to be shown")
      const response = await promiseFive;
      console.log(response)
      
   }catch(error){
      console.log(error)
      console.log('anything')
   }
}

console.log("Start")
consumePromise();
console.log("End")