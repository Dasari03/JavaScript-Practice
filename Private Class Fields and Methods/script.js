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
  }

  withdraw(amount) {
    this.deposit(-amount);
  }

  requestLoan(amount) {
    if (this.#approveLoan(amount)) {
      this.deposit(amount);
      console.log(`$${amount} has been approved...Congrats...`);
    } else {
      console.log(`Your request could not be approved...My apology...`);
    }
  }

  //private method
  #approveLoan(amount) {
    if (amount < 9000) return true;
  }
}

const acc1 = new Account("min", 1111);

acc1.requestLoan(1000);
acc1.getTransactions();
//console.log(acc1.#approveLoan());
//console.log(acc1.#transactions);
