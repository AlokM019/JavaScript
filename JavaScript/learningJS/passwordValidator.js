/*
1.Write a JavaScript program that checks if the entered password matches the confirmed password. If the
passwords match, the program should log "Password Matched. Password validation Successful." to the console.
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console 
*/

function passwordValidator(password, confirmedPassword){
   if(password === confirmedPassword){
      console.log("Password Matched. Password validation successful.")
   }else{
      console.log("Password did't matched. Password validation unsuccessful.")
   }
}

passwordValidator("myPassword123", "myPassword123"); //Valid password
passwordValidator("myPassword123", "passcode123"); //Invalid password 