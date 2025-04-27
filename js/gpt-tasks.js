// Завдання: Робота з масивами
// Створи масив із назвами 5 міст.

// Виведи в консоль перше та останнє місто.

// Додай нове місто на початок і кінець масиву.

// Видали друге місто в масиві.

// Виведи оновлений масив і його довжину.

// let cities = ["Kyiv", "London", "Berlin", "Madrid", "Paris"];

// // Виводимо перше місто
// console.log(cities[0]); // Kyiv

// // Додаємо "Rome" на початок і "Riga" в кінець
// cities.unshift("Rome");
// cities.push("Riga");

// // Видаляємо друге місто ("London"), яке має індекс 1
// cities.splice(1, 1);

// console.log(cities); // ["Rome", "Kyiv", "Berlin", "Madrid", "Paris", "Riga"]
// console.log(cities.length); // 6

//====================================================================

// Завдання: Використання splice()
// Створи масив із 5 улюблених страв.

// Видали другу та третю страву.

// Додай дві нові страви замість видалених.

// Виведи оновлений масив у консоль.

// array.splice(початковий_індекс, кількість_елементів, елементи_для_додавання);

// let favoriteDishes = ["pizza", "borsh", "burger", "hot-dog", "sushi"];
// favoriteDishes.splice(1, 2, "hamon", "varenyky");
// console.log(favoriteDishes);

//==========================================================
// Завдання: Перебір масиву
// Створи масив із 5 улюблених фільмів.

// Використовуючи for, виведи всі фільми в консоль.

// Використовуючи for...of, виведи їх ще раз.

// Використовуючи forEach(), додай перед кожною назвою "Фільм:", наприклад:

// Фільм: Interstellar;
// Фільм: Inception;

// let movies = [
//   "Snatch",
//   "Fight Club",
//   "Independence Day",
//   "Green Mile",
//   "Titanic",
// ];
// for (let i = 0; i < movies.length; i++) {
//   console.log(movies[i]);
// }

// for (let movie of movies) {
//   console.log(movie);
// }

// movies.forEach(function (movie) {
//   console.log(`Movie: ${movie}`);
// });

//========================================================================

// Завдання: Практика з методами
// Створи масив із 5 улюблених напоїв.

// Використай includes(), щоб перевірити, чи є "кава" у списку.

// Використай indexOf(), щоб знайти позицію "чай".

// Використай slice(), щоб взяти 2 середні напої.

// Використай concat(), щоб об'єднати масив із ["молоко", "сік"].

// Використай join(), щоб отримати рядок напоїв через кому.

// Використай split(), щоб розбити рядок "яблуко-груша-слива" у масив.

// Використай push(), щоб додати "лимонад".

// let drinks = ["Water", "Fresh", "Cambucha", "Cacao", "Tea"];
// console.log(drinks.includes("coffee"));
// console.log(drinks.indexOf("Tea"));
// console.log(drinks.slice(2, 4));
// console.log(drinks.concat("Milk", "Juice"));
// console.log(drinks.join(", "));

// const fruits = "яблуко-груша-слива";
// console.log(fruits.split("-"));
// drinks.push("Lemonade");
// console.log(drinks);

//======================================================================

// Завдання: Практика з ітерацією
// Створи масив із улюблених видів спорту (5 елементів).

// Використай includes(), щоб перевірити, чи є в ньому "футбол".

// Використай for...of, щоб вивести кожен вид спорту в консоль.

// Якщо це "boxing", виведи "I love boxing!", а решту виводь як є.

// let sports = ["football", "volleyball", "boxing", "swimming", "mma"];
// console.log(sports.includes("football"));
// for (let sport of sports) {
//   if (sport === "boxing") {
//     console.log("I love boxing!");
//   } else {
//     console.log(sport);
//   }
// }

//=======================================================================

// Завдання 8: Вибір улюбленого фрукта
// Створи масив fruits із назвами 5 фруктів.

// Використай includes(), щоб перевірити, чи є "банан" у масиві.

// Пройдися по масиву за допомогою for...of:

// Якщо фрукт – "яблуко", виведи "Я обожнюю яблука!".

// Якщо інший фрукт – просто виведи його назву.

// const fruits = ["banana", "orange", "apple", "avocado", "kiwi"];
// console.log(fruits.includes("banana"));
// for (let fruit of fruits) {
//   if (fruit === "apple") {
//     console.log("Я обожнюю яблука!");
//   } else {
//     console.log(fruit);
//   }
// }

//========================================================================

// Завдання: Ресторанне меню
// Уяви, що ти працюєш в ресторанній системі, і потрібно обробляти меню страв. У тебе є масив із назвами страв, і тобі треба:

// Створити масив menu з 6 назв страв.

// Перевірити за допомогою includes(), чи є у меню "піцца".

// Пройти по масиву з меню за допомогою for...of і виконати такі умови:

// Якщо страва – "суп", вивести "Замовляйте суп!".

// Якщо страва – "піцца", вивести "Піцца сьогодні зі знижкою!".

// Якщо це "салат", вивести "Салат – це корисно!".

// Для решти страв вивести лише їх назву.

// const menu = ["pizza", "soup", "salat", "cake", "pasta", "beaf"];
// console.log(menu.includes("pizza"));

// for (let dish of menu) {
//   if (dish === "soup") {
//     console.log("Замовляйте суп!");
//   } else if (dish === "pizza") {
//     console.log("Піцца сьогодні зі знижкою!");
//   } else if (dish === "salat") {
//     console.log("Салат – це корисно!");
//   } else {
//     console.log(dish);
//   }
// }

//=======================================================================

// Завдання: Ресторанне замовлення
// Ти працюєш в ресторані, і потрібно створити систему замовлень для клієнтів.
// Тобі дається масив із замовленими стравами, і тобі потрібно:

// Створити масив order, що містить кілька страв.

// Пройти через цей масив за допомогою for...of і:

// Якщо страва з масиву є в меню (menu), вивести "Страва [назва] є в меню!".

// Якщо страва з масиву не є в меню, вивести "Страва [назва] не знайдена в меню!".

// Якщо клієнт замовив більше 3 страв, вивести "Клієнт замовив багато страв, потрібно запитати, чи все в порядку!".

// Якщо у замовленні є "суп", вивести "Ми вам додали безкоштовний хліб до супу!".

// 📝 Додатково:
// Масив menu вже є: ["pizza", "soup", "salat", "cake", "pasta", "beef"].

// Масив order – це замовлення клієнта, наприклад: ["pizza", "salat", "sushi", "cake"].

// const menu = ["pizza", "soup", "salat", "cake", "pasta", "beef"];
// const order = ["pizza", "salat", "sushi", "cake"];

// // Перевірка страви в меню
// for (let dish of order) {
//   if (menu.includes(dish)) {
//     console.log(`Страва ${dish} є в меню`);
//   } else {
//     console.log(`Страва ${dish} не знайдена в меню!`);
//   }
// }

// // Перевірка кількості страв
// if (order.length > 3) {
//   console.log(
//     "Клієнт замовив багато страв, потрібно запитати, чи все в порядку!"
//   );
// }

// // Перевірка наявності супу
// if (order.includes("soup")) {
//   console.log("Ми вам додали безкоштовний хліб до супу!");
// }

//=========================================================================

// Напиши функцію, яка приймає будь - яку кількість чисел
// і повертає їх середнє значення за допомогою arguments.

// function averageValue() {
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result / arguments.length;
// }
// console.log(averageValue(5, 5, 5, 5));

// =====================================================================

// Напиши функцію, яка приймає будь - яку кількість чисел
// і повертає їх середнє значення, але якщо аргументів немає,
// функція повинна повернути 0.

// function averageValue() {
//   if (arguments.length === 0) {
//     return 0; // Якщо немає аргументів, повертаємо 0
//   }

//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result / arguments.length;
// }

// console.log(averageValue(1, 2, 3, 4)); // Виведе 2.5
// console.log(averageValue()); // Виведе 0

//=======================================================================

// Напиши функцію, яка приймає будь - яку кількість чисел,
// знаходить їх максимальне значення і повертає його.
// Якщо чисел не передано, функція повинна повернути null.

// function findMax() {
//   if (arguments.length === 0) {
//     return null; // Якщо аргументів немає, повертаємо null
//   }

//   let max = arguments[0]; // Припускаємо, що перший аргумент – найбільший
//   for (let i = 1; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i]; // Оновлюємо max, якщо знайшли більше значення
//     }
//   }
//   return max;
// }

// console.log(findMax(5, 8, 2, 10, 3)); // Виведе 10
// console.log(findMax()); // Виведе null
// console.log(findMax(-1, -5, -3)); // Виведе -1

//=========================================================================

// Напиши функцію, яка знаходить найменше число серед переданих аргументів.
// Якщо аргументів немає, функція повинна повертати null.

// function findMin() {
//   if (arguments.length === 0) {
//     return null;
//   }

//   let min = arguments[0];
//   for (let i = 1; i < arguments.length; i++) {
//     if (arguments[i] < min) {
//       min = arguments[i];
//     }
//   }
//   return min;
// }

// console.log(findMin(1, 2, 55));
// console.log(findMin());

//=======================================================================

// Напиши функцію sumPositiveNumbers(),
// яка приймає будь - яку кількість чисел і
// повертає суму тільки додатних чисел.
// Якщо додатних чисел немає – повертає 0.

// function sumPositiveNumbers() {
//   let sum = 0; // Початкова сума

//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > 0) {
//       // Перевіряємо, чи число додатне
//       sum += arguments[i]; // Додаємо його до суми
//     }
//   }

//   return sum; // Повертаємо суму всіх додатних чисел
// }

// // Перевіряємо функцію
// console.log(sumPositiveNumbers(3, -2, 7, -1, 10)); // Виведе 20 (3 + 7 + 10)
// console.log(sumPositiveNumbers(-5, -10, -3)); // Виведе 0 (немає додатних чисел)
// console.log(sumPositiveNumbers()); // Виведе 0 (немає аргументів)
// console.log(sumPositiveNumbers(5, 15, -8, 0, 12)); // Виведе 32 (5 + 15 + 12)

//=========================================================================

// Завдання:
// Уяви, що у тебе є список книг у бібліотеці.
// Напиши функцію getTotalPages(bookTitle),
// яка приймає назву книги та повертає загальну кількість сторінок,
// помножену на кількість екземплярів цієї книги в бібліотеці.

// Якщо книги немає в списку, функція повинна повернути рядок
// "Book {bookTitle} not found!".

// function getTotalPages(bookTitle) {
//   const books = [
//     { title: "Harry Potter", pages: 500, copies: 3 },
//     { title: "Lord of the Rings", pages: 700, copies: 2 },
//     { title: "The Witcher", pages: 400, copies: 5 },
//     { title: "Sherlock Holmes", pages: 300, copies: 4 },
//   ];

//   for (const book of books) {
//     if (book.title === bookTitle) {
//       return book.pages * book.copies;
//     }
//   }
//   return `Book ${bookTitle} not found!`;
// }

// console.log(getTotalPages("Harry Potter")); // 1500 (500 * 3)
// console.log(getTotalPages("The Witcher")); // 2000 (400 * 5)
// console.log(getTotalPages("Lord of the Rings")); // 1400 (700 * 2)
// console.log(getTotalPages("Dune")); // "Book Dune not found!"

//=================================================================================

// Задача 1: Створи об'єкт student, який має методи:

// addCourse(courseName) — додає курс в список курсів студента.

// removeCourse(courseName) — видаляє курс зі списку.

// getCourses() — повертає список всіх курсів.

// const student = {
//   name: "Anna",
//   courses: ["Math", "English"],

//   addCourse(courseName) {
//     this.courses.push(courseName);
//   },
//   removeCourse(courseName) {
//     const index = this.courses.indexOf(courseName);
//     if (index !== -1) {
//       this.courses.splice(index, 1);
//     }
//   },
//   getCourses() {
//     return this.courses;
//   },
// };

// student.addCourse("Physics");
// console.log(student.getCourses()); // ["Math", "English", "Physics"]

// student.removeCourse("Math");
// console.log(student.getCourses()); // ["English", "Physics"]

//===================================================================================
