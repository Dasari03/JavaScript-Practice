"use strict";

class Account {
  constructor(owner, pin) {
    this.owner = owner;
    this.pin = pin;
    this.transactions = [];
    this.locale = navigator.language;
  }

  deposit(amount) {
    this.transactions.push(amount);
  }

  withdraw(amount) {
    this.deposit(-amount);
  }

  approveLoan(amount) {
    if (amount < 9000) return true;
  }

  requestLoan(amount) {
    if (this.approveLoan(amount)) {
      this.deposit(amount);
      console.log(`$${amount} has been approved...Congrats...`);
    } else {
      console.log(`Your request could not be approved...My apology...`);
    }
  }
}

const kevin = new Account("Kevin Kim", 1111);
kevin.deposit(1600);
kevin.withdraw(180);
kevin.requestLoan(1000);
kevin.requestLoan(9999);
