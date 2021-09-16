function newAccount(name, initialBalance){
  let balance = initialBalance;
  function showBalance(){
    console.log(`Hey ${name} your balance is: ${balance}`);
  }
  function deposit(amount){
    balance += amount;
    showBalance();
  }
  function withdraw(amount){
    if(amount > balance){
      console.log(`Hey, ${name}, sorry not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  return{showBalance:showBalance, deposit:deposit, withdraw:withdraw}
}

const john = newAccount('John', 600);
john.deposit(400);
john.withdraw(1100)

const steve = newAccount('Steve', 700);
steve.deposit(200);
steve.withdraw(1000)


