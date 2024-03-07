let money = prompt("Ваш месячный доход?"); 
let expenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let amount = prompt("Во сколько обойдутся обязательные статьи расходов?");
let deposit = confirm("Есть ли у вас вклад в банке?");

const budgetMonth = money - amount;
console.log(budgetMonth);

const purpose = 100000;
console.log(Math.ceil(purpose / budgetMonth));

const budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay);

if (budgetDay > 60000) {
  console.log("У вас высокий уровень дохода");
} else if (budgetDay >= 30000 && budgetDay <= 60000) {
  console.log("У вас средний уровень дохода");
} else if (budgetDay >= 0 && budgetDay < 30000) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else {
  console.log("Что то пошло не так");
}