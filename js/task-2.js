// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll'
// за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть
// його на 'classic', використовуючи JavaScript-код
// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// '<номер елемента> - <значення елемента>'.
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// console.log(styles);
// const bluesIndex = styles.indexOf("blues");
// console.log(bluesIndex);
// styles[bluesIndex] = "classic";
// console.log(styles);

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1}-${array[i]}`);
//   }
// }
// logItems(styles);

// ============================================================================================

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   let name = prompt("Введіть ім'я");
//   if (array.includes(name)) {
//     alert(`Welcome, ${name}!`);
//     return;
//   } else {
//     alert("User not found");
//     return;
//   }
// }
// console.log(checkLogin(logins));

//=============================================================================

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
//   let sum = 0;
//   let totalCount = 0;
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       sum += arg;
//       totalCount += 1;
//     }
//   }
//   return sum / totalCount;
// }

// console.log(caclculateAverage(5, 2, 3, 45, 56, "test"));

//===========================================================================

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keys = Object.keys(user);
// const values = Object.values(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// console.log(user.name);
// console.log(user["name"]);

// console.log(keys);
// console.log(values);

//================================================================

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// if (Object.keys(salaries).length === 0) {
//   console.log(sum);
// } else {
//   for (const sal of Object.values(salaries)) {
//     sum += sal;
//   }
//   console.log(sum);
// }
//=========================================================================

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Банан", price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let sum = 0;

//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       sum += fruit.price * fruit.quantity;
//     }
//   }
//   return `${fruitName}: ${sum}`;
// }

// console.log(calcTotalPrice(fruits, "Яблуко"));

//=====================================================================
