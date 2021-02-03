'use strict'

//Функция, проверяет является ли введенное значение числом
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    income = "фриланс",
    addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 1000000,
    budgetMonth, budgetDay; /* переменные бюджета по перидам */
const period = 12;
    
// Дополнительные статьи расходов
/*let exp1 = prompt("Введите обязательную статью расходов?");
let cost1 = +prompt("Во сколько это обойдется?");
let exp2 = prompt("Введите обязательную статью расходов?");
let cost2 = +prompt("Во сколько это обойдется?");*/


//                  Блок описания функций
//Функция возвращает сумму всех обязательных расходов за месяц
let start = function(){
    do {
        money = prompt("Ваш месячный доход?");
    } while (!isNumber(money));
        
}

start(); 

// Функция расчета обязательных платежей
function getExpensesMonth(){
    let a, i = 0,
        sum = 0;
    do {
        a = prompt("Во сколько это обойдется?");
        //console.log("В цикл зашла");
        if (isNumber(a)) {
            //console.log("В условие вошла");
            i += 1;
            sum += parseFloat(a);
        }
    } while (i < 2);
    console.log(sum);
    return sum;
}

//Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth(mon, getExp){
    return mon - getExp;
}

//Функция, подсчитывает за какой период будет достигнута цель
function getTargetMonth(mis, accMon){
    console.log("Данные переданы", mis, accMon);
    return Math.ceil(mis / accMon);
}

//Функция вывода типа данных
let showTypeOf = function(data){
    console.log(data, typeof (data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// Расчет бюджета по периодам, дополнительно нахождение количества месяцев для достижения заданной цели
let expensesAmount = getExpensesMonth();
console.log("Cумма обязательных расходов: ", expensesAmount); 
console.log("Допрасходы: ", addExpenses.toLowerCase().split(', ')); 

let accumulatedMonth = getAccumulatedMonth(money, expensesAmount); // доход за месяц
console.log("Доход за месяц:", accumulatedMonth );

let targetMonth = getTargetMonth(mission, accumulatedMonth);
if (targetMonth < 0) {
    console.log("Цель не будет достигнута");
} else {
    console.log(`Цель будет достигнута за ${targetMonth} месяцев(-а)`);
}

budgetDay = Math.floor( accumulatedMonth / 30);
console.log("Бюджет на день: ", budgetDay);

//Вывод информации для пользователя
let getStatusIncome = function(){
    if (budgetDay >= 1200) {
        return("У вас высокий уровень дохода");
    } else if ((budgetDay >= 600)&&(budgetDay < 1200)) {
        return("У вас средний уровень дохода");
    } else if ((budgetDay > 0) && (budgetDay < 600)) {
        return("К сожалению, у вас уровень дохода ниже среднего");
    } else {
        return("Что-то пошло не так"); 
    }  
}

console.log(getStatusIncome());            