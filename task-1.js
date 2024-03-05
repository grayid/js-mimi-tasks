const money = 50000;
const profit = "Инвестиции";
const expenses = "Питание, проезд, образование";
const purpose = 100000;
const period = 8;

console.log(typeof money);
console.log(typeof profit);
console.log(expenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${purpose} рублей`);


const budgetDay = money / 30;
console.log(Math.round(budgetDay * 100) / 100);

const expensesArr = expenses.toLocaleLowerCase().split(',');
console.log(expensesArr);