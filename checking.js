function Checking(amount) {
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
   }
   

const deposit = (amount) => this.balance += amount

const withdraw = amount => (amount <= this.balance) ? (this.balance -= amount) (amount > this.balance) :   console.log("Insufficient funds")

const toString = () =>"Balance: " + this.balance
const print = console.log()
var account = new Checking(500);
account.deposit(1000);
print(account.toString()); // Balance: 1500
account.withdraw(750);
print(account.toString()); // Balance: 750
account.withdraw(800); // displays "Insufficient funds"
print(account.toString());