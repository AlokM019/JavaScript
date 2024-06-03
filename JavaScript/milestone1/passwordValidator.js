// Write a JavaScript program that checks if the entered password matches the confirmed password. If the passwords match, the program should log "Password Matched. Password validation Successful." to the console. Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console

let password = "password1234";

function passwordValidator(password, myPassword){
   if(password === myPassword){
      console.log("Password matched.Password Validation Successful.")
   }else{
      console.log("Password didn't match. Password validation unscuccessful.")
   }
}

passwordValidator(password, "password1234"); //Valid Password 
passwordValidator(password, "mypassword123"); //Invalid Password