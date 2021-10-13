const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const withdraw = movements.filter((mov) => mov < 0);

console.log(withdraw);

const deposits = movements.filter((mov) => mov > 0);

console.log(deposits);
