/*

7. Password Checker.

Create a class called User with properties username and password. Implement a getter method for password that returns the password with all characters replaced by asterisks. Implement a setter method for password that checks if the new password is at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, set the new password. If not, log an error message.
*/

class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    getpassword(){
        return this.password.replace(/./g, "*");
    }
    setpassword(newPassword){
        let containsNumbers = false;
        let containsUppercase = false;

        for (let i =0; i < newPassword.length ; i++){
            const char = newPassword.charAt(i);
            if(!isNaN(char)){
                containsNumbers = true;
    
            }else if( char === char.toUpperCase()){
                containsUppercase = true;
            }
            
        }
        if( newPassword.length >= 8 && containsNumbers && containsUppercase){
            this.password = newPassword;
        }else{
            console.log("Error : Password must be 8 characters long and msut contains at leat one upper case and one lower case");
        }
        
    }
   
}

const user1 = new User("John Smith", "myPassword123")
// console.log(user1);
console.log(user1.getpassword());
user1.setpassword("myPassword"); //password is not correct because it don't contains numbers
user1.setpassword("myPasswor123"); // password is correct and set to new password
console.log(user1.getpassword()); // setted password returned with astric
