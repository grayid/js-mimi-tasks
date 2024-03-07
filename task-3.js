let money = Number(prompt("Ваш месячный доход?")); 
let expenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let amount = Number(prompt("Во сколько обойдутся обязательные статьи расходов?"));
let deposit = confirm("Есть ли у вас вклад в банке?");
const purpose = 100000;
const profit = "Инвестиции"

let extraMoney = Number(prompt(`Перечислите возможный доход за ваши дополнительные работы: ${profit}?`));

function getAccumulatedIncome(income, extraIncome, expenses) {
  return (income + extraIncome - expenses);
}

let accumulatedIncome = getAccumulatedIncome(money, extraMoney, amount);

function getTargetMonth(totalIncome, purpose) {
  return Math.ceil(purpose / totalIncome);
}

let targetMonth = getTargetMonth(accumulatedIncome, purpose);

const budgetDay = Math.ceil(accumulatedIncome / 30); 

console.log(`Ваш бюджет на месяц с учетом ваших расходов составляет: ${accumulatedIncome}`);
console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через ${targetMonth} месяца`);
console.log(`Дневной бюджет: ${budgetDay}`);