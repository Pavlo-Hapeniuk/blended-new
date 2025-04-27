// Створи клас Car, який має властивості brand, year, mileage.

// Додай метод drive(km), який додає до пробігу передані кілометри.

// Додай метод info(), який виводить інформацію про машину.

// Створи екземпляр і протестуй.

// class Car {
//   constructor(brand, year, mileage) {
//     this.brand = brand;
//     this.year = year;
//     this.mileage = mileage;
//   }

//   drive(km) {
//     this.mileage += km;
//   }

//   info() {
//     return `Car: ${this.brand}\nYear: ${this.year}\nMileage: ${this.mileage} km`;
//   }
// }

// const myCar = new Car("Mercedes", 2025, 10200);
// myCar.drive(100);
// console.log(myCar.info());

//==================Статичні властивості=======================================================

// Виконай рефакторинг класу Car.
// Додай публічну статичну властивість maxPrice
// зі значенням число 50000 - максимально допустима ціна автомобіля.

// Додай сеттеру price перевірку значення параметра newPrice,
// що передається.Якщо воно більше за maxPrice, сеттер нічого не робить,
// а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Під оголошенням класу ми додали ініціалізації екземплярів і
// виклики методів, щоб показати, як будуть використовуватися геттери і
// сеттери price.

// Оголошений клас Car

// Клас Car містить статичну властивість maxPrice

// Значення статичної властивості maxPrice - це число 50000

// Екземпляр не містить властивості maxPrice

// В класі Car оголошений геттер price

// В класі Car оголошений сеттер price

// Виклик сеттера price в екземпляра класу,
// зі значенням аргументу меншим за значення maxPrice,
// змінює властивість #price

// Виклик сеттера price в екземпляра класу,
// зі значенням аргументу більшим за значення maxPrice,
// не змінює властивість #price

// class Car {
//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static maxPrice = 50000;
//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.maxPrice) {
//       return;
//     }
//     this.#price = newPrice;
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

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

//=====================Наслідування класів====================================================

// У застосунку потрібен адміністратор з можливістю
// додавати пошти користувачів у чорний список.

// Оголоси клас Admin, який наслідує від класу User

// Додай класу Admin публічну статичну властивість role(рівень доступу),
// значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}

// Оголошений клас Admin

// Клас Admin наслідується від класу User

// Клас Admin містить публічну статичну властивість role

// Звернення до Admin.role.BASIC повертає рядок "basic"

// Звернення до Admin.role.SUPERUSER повертає рядок "superuser"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = { BASIC: "basic", SUPERUSER: "superuser" };
// }

// console.log(Admin.role.BASIC);

// console.log(Admin.role.SUPERUSER);

//===========Конструктор дочірнього класу===========================================================

// Додай класу Admin метод constructor, який приймає один параметр params -
// об'єкт налаштувань з двома властивостями email і access.
// Додай класу Admin публічну властивість access, значення якої буде
// передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin,
// ми додали ініціалізацію екземпляра під оголошенням класу.

// Оголошений клас Admin

// Клас Admin наслідує від класу User

// Клас Admin містить публічну статичну властивість role

// Клас Admin містить метод constructor з параметром params

// В класі Admin в конструкторі для властивості email використовується
// звернення до конструктора батьківського класу

// Звернення до Admin.role.BASIC повертає рядок "basic"

// Звернення до Admin.role.SUPERUSER повертає рядок "superuser"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);

//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

//========================Методи дочірнього класу============================

// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного
// списку поштових адрес користувачів.Значення за замовчуванням —
// це порожній масив.

// Публічний метод blacklist(email) для додавання пошти у чорний список.
// Метод повинен додавати значення параметра email в масив,
// що зберігається у властивості blacklistedEmails.

// Публічний метод isBlacklisted(email) для перевірки пошти у чорному
// списку.Метод повинен перевіряти наявність значення параметра email в
// масиві, що зберігається у властивості blacklistedEmails, і повертати
// true або false.

// Після оголошення класу ми додали ініціалізацію екземпляра і виклики
// методів у тій послідовності, в якій твій код перевірятимуть тести.
// Будь ласка, нічого там не змінюй.

// Оголошений клас Admin

// Клас Admin наслідує від класу User

// Клас Admin містить публічну властивість blacklistedEmails

// Клас Admin містить публічний метод blacklist

// Клас Admin містить публічний метод isBlacklisted

// Після виклику mango.blacklist("poly@mail.com")
// значення властивості blacklistedEmails - це масив["poly@mail.com"]

// Виклик mango.isBlacklisted("mango@mail.com") повертає false

// Виклик mango.isBlacklisted("poly@mail.com") повертає true

// class User {
//   #email; // приватна властивість для email

//   constructor(email) {
//     this.#email = email;
//   }

//   // Геттер для email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер для email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//     this.blacklistedEmails = params.blacklistedEmails || []; // додав перевірку на випадок порожнього масиву
//   }

//   // Метод для додавання email до чорного списку
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   // Метод для перевірки, чи є email у чорному списку
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// // Тести (не змінювати)
// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
