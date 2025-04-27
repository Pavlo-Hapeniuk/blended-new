// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const allValues = data.flatMap((value) => value.values);

// console.log(allValues);

//======================================================================================

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const dsNumbers = numbers.map((number) => number * number);

// console.log(dsNumbers);

//====================================================================

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const validAge = people.some((people) => people.age < 20);
// console.log(validAge);

//============================================================================================

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const res = numbers.every((number) => number % 2 === 0);
// console.log(res);

//==========================================================================

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const res = numbers.find((number) => number % 2 !== 0);
// console.log(res);

//==============================================================================

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const sortedArray = numbersArray.toSorted((a, b) => a - b);
// console.log(sortedArray);

//==========================================================================================

// const numbers = [101, 20, 25, 200, 40, 50, 5, 500];
// const sortedNumbers = numbers.toSorted();
// console.log(sortedNumbers);

//===========================================================================

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];
// const inAlphabetOrder = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder);

//=================Метод toSorted() + localeCompare=========================================================================================

// const words = [
//   "сонце",
//   "їжак",
//   "яблуко",
//   "іграшка",
//   "єнот",
//   "гора",
//   "світло",
//   "ґудзик",
//   "олень",
//   "зірка",
// ];

// const inAlphabetOrderWithLocal = words.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrderWithLocal);

// const inAlphabetOrderWithLocalNoLocal = words.toSorted();
// console.log(inAlphabetOrderWithLocalNoLocal);

//====================Метод filter()==========================================================================================

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const newArr = user.filter((user) => user.age > 20);
// console.log(newArr);

//==================Метод reduce()=========================================================================

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum);

//=================Ланцюжки методів=================================================================

// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.

// const products = [
//   { name: "Milk", price: 20 },
//   { name: "Bread", price: 10 },
//   { name: "Eggs", price: 15 },
// ];

// const res = products
//   .filter((product) => product.price > 10)
//   .reduce((acc, product) => acc + product.price, 0);
// console.log(res);

//=================Фільтрація унікальних елементів==================================================

// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses
//   .flatMap((topic) => topic.topics)
//   .filter((topic, index, array) => array.indexOf(topic) === index);
// console.log(allTopics);

//=======================================================================================

// Порахуй загальну кількість лайків в категорії  Fashion

// const posts = [
//   { title: "Post 1", likes: 20, category: "Tech" },
//   { title: "Post 2", likes: 45, category: "Fashion" },
//   { title: "Post 3", likes: 12, category: "Tech" },
//   { title: "Post 4", likes: 30, category: "Fitness" },
//   { title: "Post 5", likes: 15, category: "Fashion" },
//   { title: "Post 6", likes: 50, category: "Tech" },
// ];

// const result = posts
//   .filter((userPosts) => userPosts.category === "Fashion")
//   .reduce((acc, userPosts) => acc + userPosts.likes, 0);
// console.log(result);

//=====================================================================

// Маємо масив об'єктів, який представляє список замовлень:
// Поверніть список товарів з усіх виконаних замовлень.

// const orders = [
//   { id: 1, products: ["Milk", "Bread"], status: "completed" },
//   { id: 2, products: ["Eggs", "Juice"], status: "processing" },
//   { id: 3, products: ["Pasta", "Spices"], status: "completed" },
// ];

// const res = orders
//   .filter((order) => order.status === "completed")
//   .flatMap((order) => order.products);
// console.log(res);

//================Класи===============================================================================

//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прощі прямокутника.

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calculateArea() {
//     return this.height * this.width;
//   }
// }

// const rectangle1 = new Rectangle(45, 60);
// const rectangle2 = new Rectangle(415, 601);

// console.log(rectangle1.calculateArea());
// console.log(rectangle2.calculateArea());

//===================Геттери і сеттери=============================================================================

// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogit) {
//     this.#login = newLogit;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const res = new Client("i@com.com", "ZICK");

// console.log(res.login);
// console.log(res.email);
// res.login = "Poly";
// res.email = "you@com.ua";
// console.log(res.login);
// console.log(res.email);

//====================Статичні властивості==========================================

// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 -
// максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде
// через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice,
// що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює,
// то перезаписує ціну телефону.

// class Phone {
//   static MAX_PRICE = 40000;
//   #price;
//   constructor(price) {
//     this.#price = price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     if (newPrice > Phone.MAX_PRICE) {
//       return;
//     }
//     this.#price = newPrice;
//   }
// }
// const phone = new Phone(45000);
// console.log(phone.price);
// phone.price = 35000;
// console.log(phone.price);
// phone.price = 45000;
// console.log(phone.price);

//=================Статичні методи================================

// Додай класу Car публічний статичний метод checkPrice(price),
// що приймає ціну автомобіля.Метод повинен порівняти значення
// параметра price і приватної статичної властивості maxPrice.

// Якщо ціна автомобіля перевищує максимальну, метод повинен
// повернути рядок "Error! Price exceeds the maximum".

// В іншому випадку метод повинен повернути рядок
// "Success! Price is within acceptable limits".

// Під оголошенням класу ми додали ініціалізацію екземпляра і
// виклики методів, щоб показати, як буде використовуватися
// метод checkPrice(price).

// Оголошений клас Car
// Клас Car містить статичний метод checkPrice(price)
// Виклик Car.checkPrice(36000) повертає рядок
// "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(18000) повертає рядок
// "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(64000) повертає рядок
// "Error! Price exceeds the maximum"
// Виклик Car.checkPrice(57000) повертає рядок
// "Error! Price exceeds the maximum"

// class Car {
//   static #maxPrice = 50000;

//   static checkPrice(price) {
//     if (price > this.#maxPrice) {
//       return `Error! Price exceeds the maximum`;
//     } else {
//       return `Success! Price is within acceptable limits`;
//     }
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//===============================================================================
