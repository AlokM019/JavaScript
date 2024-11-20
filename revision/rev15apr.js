const obj = {
   name : "Abhi",
   email: "abhi@google.com",
   age: 25

}

obj.id = '123'

Object.freeze(obj)

obj["company"] = "google"
console.log(obj);

if (!Object.freeze(obj)) {
   obj["company"] = "google"  
} else {
   console.log("Object is freeze you can't update the data")
}