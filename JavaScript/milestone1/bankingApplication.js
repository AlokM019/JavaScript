//17. build a banking application that manages the customers account transaction after withdrawal or deposits

let person = {
   name : "Mr. NDM",
   balance : 100000,

   deposit : function deposit(amount){
      if(amount > 0){
         this.balance += amount;
         console.log(`Deposited : ${amount}. New Balance : ${this.balance}`)
      }else{
         console.log(`Amount must be positive`)
      }
   },

   withdraw : function withdraw(amount){
      if (amount > 0 && amount <= this.balance){
         this.balance -= amount;
         console.log(`Withdrawn : ${amount}. New Balance : ${this.balance}`)
      }else if(amount > this.balance){
         console.log(`Insufficient balance for withdrawal.`)
      }else{
         console.log(`Amount must be positive`)
      }
   }
}


person.deposit(4000) //should log balance after deposit
person.withdraw(20000) // should log amount after withdraw
person.deposit(-500) // should log amount must be positive
person.withdraw(500) //should log balance after deduction
person.withdraw(-550) // should log amount must be positive