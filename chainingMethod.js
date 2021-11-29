"use strict";

class Account {
  //public fields
  locale = navigator.language;
  //private fields
  #transactions = [];
  #pin;
  constructor(owner, pin) {
    this.owner = owner;
    this.#pin = pin;
    // this.transactions = [];
    // this.locale = navigator.language;
  }

  //public methods
  getTransactions() {
    return this.#transactions;
  }

  deposit(amount) {
    this.#transactions.push(amount);
    return this;
  }

  withdraw(amount) {
    this.deposit(-amount);
    return this;
  }

  requestLoan(amount) {
    if (this.#approveLoan(amount)) {
      this.deposit(amount);
      console.log(`$${amount} has been approved...Congrats...`);
    } else {
      console.log(`Your request could not be approved...My apology...`);
    }
    return this;
  }

  //private method
  #approveLoan(amount) {
    if (amount < 9000) return true;
  }
}

const acc1 = new Account("min", 1111);

// acc1.requestLoan(1000);
acc1.getTransactions();
//console.log(acc1.#approveLoan());
//console.log(acc1.#transactions);

acc1.deposit(10).deposit(10).withdraw(10).requestLoan(1000).withdraw(10);
