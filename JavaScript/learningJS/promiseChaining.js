//Promise chainging
const promiseOne = new Promise(function (resolve, reject){
   setTimeout(() => {
      resolve("This is the first promise")
   }, 1000);
})

promiseOne.then(function (result){
   console.log(result);
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve("This is the second Promise")
      }, 2000);
   }); 
}).then((result) => {
   console.log(result)
})

