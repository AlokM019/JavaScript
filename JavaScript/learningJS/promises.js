//Promise (chai or code js)
const createPromise = new Promise(function (resolve, reject){
   setTimeout( () => {
      console.log("Async task is complete");
      resolve();
   },1000);

})

createPromise.then(function (){
   console.log("Promise done")
});

// Promise Two
new Promise (function (resolve, reject){
   setTimeout(() => {
      console.log("Async task 2");
      resolve();
   }, 1000);
}).then(function (){
   console.log("promise done 2")
})

//Promise Three 
const createPromise3 = new Promise(function (resolve, reject){
   setTimeout(() => {
      resolve({username: "Alok Maurya" , Email: "alok@example.in"})
   }, 2000);
})

createPromise3.then(function (user){
   console.log(user);
})

// Promise part four 
const promisefour = new Promise(function (resolve, reject){
   setTimeout(() => {
      // let error = false;
      let error = true;

      if(!error){
         resolve({username: "Abhinav Yadav", Email: "abhi@example.in"});
      }else{
         reject('ERROR: Somethiong went wrong');
      }
   }, 2000);
})

promisefour.then(function(user){
   console.log(user);
   return user.username
})
.then(function (username){
   console.log(username); 
   /*the returned value of the previous then will will pased to the next then so that the value of the returned will be printed or executed por shown. if we don't show it in this line of code then then returned value of the previos value then function won't get executed */

})
.catch(function (error){
   console.log(error);
})
.finally( ()=>{
   console.log("Promise is either resolve or rejected")
})



// promise five 
// ASYNC/AWAIT

const promiseFive = new Promise(function (resolve, reject ){
  setTimeout(() => {
   let error = true;

   if (!error){
      resolve("everything is right");
   }else{
      reject("some error");
   }
  }, 2000);
})

// async function 
async function consumePromise(){
   try{
      let response = await promiseFive;
      console.log(response)
   }catch(error){
      console.log(error)
   }
}

consumePromise();