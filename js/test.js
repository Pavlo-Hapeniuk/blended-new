// function getLastElementMeta(array) {
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];

//   return [lastElementIndex, lastElement];
// }

// console.log(getLastElementMeta(["apple", "peach", "pear"])); // повертає `[2, "pear"]
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); // повертає `[3, "banana"]

// ============================================================================================================

// function getExtremeElements(array) {
//   const firstElementIndex = array[0];
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];

//   return [firstElementIndex, lastElement];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5])); //повертає [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); //повертає ["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); //повертає ["apple", "banana"]

// ============================================================================================================

// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]

// a[1] = "Jacob";
// console.log(a); // ["Mango", "Jacob"]
// console.log(b); // ["Mango", "Jacob"]

// ============================================================================================================

// function calculateTotalPrice(order) {
//   let totalPrice = 0; // Ініціалізуємо змінну для суми
//   for (const item of order) {
//     // Проходимо по кожному числу в масиві
//     totalPrice += item; // Додаємо число до суми
//   }
//   return totalPrice; // Повертаємо загальну суму
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає `1116`
// console.log(calculateTotalPrice([164, 48, 291])); //повертає `503`
// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає `138`

// ============================================================================================================

// Функція calculateTax(amount, taxRate) оголошує два параметри:

// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка.Необов'язковий параметр.
// За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку -
//   результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
// console.log(calculateTax(100, 0.1)); // повертає 10
// console.log(calculateTax(200, 0.1)); // повертає 20
// console.log(calculateTax(100, 0.2)); // повертає 20
// console.log(calculateTax(200, 0.2)); // повертає 40
// console.log(calculateTax(100, 0.3)); // повертає 30
// console.log(calculateTax(100)); // повертає 100

// ============================================================================================================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// ============================================================================================================

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = []; // Масив для збереження ключів
// const values = []; // Масив для збереження значень

// for (let key in apartment) {
//   keys.push(key); // Додаємо ключ у масив keys
//   values.push(apartment[key]); // Додаємо значення у масив values
// }
// console.log(keys); // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153"]

// ============================================================================================================

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// Запиши у змінну keys масив ключів властивостей об'єкта apartment,
// і додай в масив values всі значення його властивостей.

// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (let key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys); // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153"]

// ============================================================================================================

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// Рефакторинг функції (нижче)

// function countProps(object) {
//   return Object.keys(object).length;
// }

// console.log(countProps({})); // 0
// console.log({ name: "Mango", age: 2 }); // 2
// console.log({ mail: "poly@mail.com", isOnline: true, score: 500 }); // 3

// ============================================================================================================

// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра.
// Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

// Поради:

// Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
// Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
// Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
// Поверни totalSalary як результат
// Оголошена функція countTotalSalary(salaries)

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   for (const value of Object.values(salaries)) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({})); // повертає 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // повертає 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // повертає 400

// ============================================================================================================

// Функція getProductPrice(productName) приймає
// один параметр productName - назва продукту.
// Функція містить масив об'єктів products
// з такими властивостями, як name — ім'я товару,
// price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона шукала
// об'єкт продукту з певним ім'ям(властивість name) в масиві products і
// повертала його ціну(властивість price).
// Якщо продукт з такою назвою не знайдений,
// функція повинна повертати null.

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const item of products) {
//     if (item.name === productName) {
//       return item.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar")); // 1300;
// console.log(getProductPrice("Grip")); // 1200;
// console.log(getProductPrice("Scanner")); // 2700;
// console.log(getProductPrice("Droid")); // 400;
// console.log(getProductPrice("Engine")); // null;

// ============================================================================================================

// Напиши функцію getAllPropValues(propName),
// яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна
// повернути порожній масив.

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає []

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const values = [];
//   for (const item of products) {
//     if (item[propName] !== undefined) {
//       // Додаємо лише, якщо є значення
//       values.push(item[propName]);
//     }
//   }
//   return values;
// }

// console.log(getAllPropValues("name")); // повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // повертає [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // повертає []

//==============================================================================================

// Функція calculateTotalPrice(productName)
// приймає один параметр productName - назва товару.
// Функція містить масив об'єктів products з такими властивостями,
// як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона повертала
// загальну вартість(ціна * кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна повертати рядок
// "Product <productName> not found!", де < productName > — це ім'я товару.

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }

//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice("Blaster")); // "Product Blaster not found!"
// console.log(calculateTotalPrice("Radar")); // 5200
// console.log(calculateTotalPrice("Droid")); // 2800
// console.log(calculateTotalPrice("Grip")); // 10800

//=================================================================================================
// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає рядок
// "List of all available potions"
// Зміни код метода об'єкта getPotions() так,
// щоб він повертав значення властивості potions
//

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return "List of all available potions";
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.getPotions());

//=========================================================================

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає
// значення властивості potions
// addPotion() — метод, який приймає
// параметр рядок з назвою зілля potionName
// Зміни код методу addPotion(potionName) так,
// щоб він додавав зілля potionName в кінець
// масиву у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості potions - це масив
// ["Speed potion", "Stone skin"]
// Значення властивості getPotions - це метод об'єкта
// Значення властивості addPotion - це метод об'єкта
// Виклик методу atTheOldToad.getPotions()
// повертає поточне значення властивості potions
// Після виклику методу atTheOldToad.addPotion("Invisibility"),
// у властивості potions буде масив
// ["Speed potion", "Stone skin", "Invisibility"]
// Після виклику методу atTheOldToad.addPotion("Power potion"),
// у властивості potions буде масив
// ["Speed potion", "Stone skin", "Invisibility", "Power potion"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.addPotion("Invisibility")); // [("Speed potion", "Stone skin", "Invisibility")];
// console.log(atTheOldToad.addPotion("Power potion")); // ["Speed potion", "Stone skin", "Invisibility", "Power potion"]

//===================================================================================

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям,
// але й ціною.Тому зараз у властивості potions буде зберігатися
// масив об'єктів з властивостями name та price.

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр об'єкт нового зілля
// newPotion і додає його в кінець масиву у властивості potions.
// Додай метод getTotalPrice(), який має повертати загальну вартість
// усіх зілль з властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає поточне значення
// властивості potions
// Значення властивості atTheOldToad.addPotion - це метод об'єкта.
// Після виклику методу atTheOldToad.addPotion({
//     name: "Invisibility",
//     price: 620
// }), в масиві potions останнім елементом буде цей об'єкт
// Після виклику методу atTheOldToad.addPotion({
//     name: "Power potion",
//     price: 270
// }), в масиві potions останнім елементом буде цей об'єкт
// Значення властивості atTheOldToad.getTotalPrice - це метод об'єкта
// Виклик методу atTheOldToad.getTotalPrice() повертає загальну вартість
// усіх зілль з властивості potions

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;

//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };

// console.log(atTheOldToad.getTotalPrice());

//=========================================================================

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив об'єктів зілль
// getPotions() — метод, який повертає
// значення властивості potions
// updatePotionName() — метод, який приймає
// два параметра рядків oldName і newName
// Доповни метод updatePotionName(oldName, newName)
// таким чином, щоб він оновлював назву зілля з oldName
//  на newName в масиві зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Після першого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 } ]
// Після другого виклику методу atTheOldToad.updatePotionName("Speed potion", "Polymorth"), у властивості potions буде масив [{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 } ]

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName; // Оновлюємо назву
//         return; // Завершуємо роботу методу після оновлення
//       }
//     }
//   },
// };

// // Тестуємо код
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.getPotions());
// // [{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 }]

// atTheOldToad.updatePotionName("Speed potion", "Polymorth");
// console.log(atTheOldToad.getPotions());
// // [{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 }]

//=====================================================================

// Використовуючи синтаксис залишкових параметрів,
// доповни код функції add() так, щоб вона приймала
// будь - яку кількість аргументів у параметр args
//  і повертала їхню суму.

// Оголошена функція add
// Функція add оголошує параметр args
// Для збирання аргументів у змінну args у підписі функції
// використовується синтаксис залишкових параметрів
// Виклик add(15, 27) повертає 42
// Виклик add(12, 4, 11, 48) повертає 75
// Виклик add(32, 6, 13, 19, 8) повертає 78

// function add(...args) {
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// console.log(add(15, 27)); // 42
// console.log(add(12, 4, 11, 48)); // 75
// console.log(add(32, 6, 13, 19, 8)); // 78

//=======================================================================

// Функція addOverNum() приймає довільну кількість аргументів чисел.

// Доповни код функції таким чином, щоб вона обчислювала суму тільки
// тих аргументів, які більші за задане число.Це число завжди буде
// передано першим аргументом.

// Для вирішення цього завдання тобі потрібно зробити наступне:

// Перший параметр value повинен представляти задане число,
//     а решта аргументів повинні бути зібрані за допомогою
// синтаксису(...args)
// Усередині функції ініціалізуй змінну для зберігання загальної суми
// Потім пройдись по кожному аргументу за допомогою циклу
// Перевір, чи кожен аргумент більший за вказане число, і якщо так,
// додай його до загальної суми
// На завершення поверни загальну суму
// Оголошена функція addOverNum()
// Функція addOverNum приймає наступні параметри: value, ...args
// Виклик addOverNum(50, 15, 27) повертає 0
// Виклик addOverNum(10, 12, 4, 11, 48, 10, 8) повертає 71
// Виклик addOverNum(15, 32, 6, 13, 19, 8) повертає 51
// Виклик addOverNum(20, 74, 11, 62, 46, 12, 36) повертає 218

// function addOverNum(value, ...args) {
//   let sum = 0;
//   for (const arg of args) {
//     if (arg > value) {
//       sum += arg;
//     }
//   }
//   return sum;
// }
// console.log(addOverNum(50, 15, 27)); //повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); //повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //повертає 218

//==========================================================================

// Функція getExtremeScores(scores)
// приймає масив оцінок(чисел) у параметрі scores.

// Доповни код функції так, щоб вона повертала
// об'єкт із двома властивостями:

// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().

// Оголошена функція getExtremeScores(scores)
// Виклик функції getExtremeScores([89, 64, 42, 17, 93, 51, 26])
// повертає об'єкт { best: 93, worst: 17 }
// Виклик функції getExtremeScores([19, 7, 4, 17, 81, 24])
// повертає об'єкт { best: 81, worst: 4 }
// Для передачі аргументів методам Math.max() і Math.min()
// використовується синтаксис ... на масиві scores

// function getExtremeScores(scores) {
//   return {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); //{ best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24])); //{ best: 81, worst: 4 }

//===========================================================================

// У змінних firstGroupScores, secondGroupScores і thirdGroupScores
// зберігаються результати тестування окремих груп.
// Використовуючи розпилення, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів
// від першої до третьої групи включно.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

// Оголошена змінна firstGroupScores
// Значення змінної firstGroupScores - це масив [64, 42, 93]
// Оголошена змінна secondGroupScores
// Значення змінної secondGroupScores - це масив [89, 14, 51, 26]
// Оголошена змінна thirdGroupScores
// Значення змінної thirdGroupScores - це масив [29, 47, 18, 97, 81]
// Оголошена змінна allScores.
// Значення змінної allScores - це масив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 97
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 14
// Для присвоєння значення змінної allScores використовувався синтаксис ... для заповнення масиву
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві allScores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві allScores

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

//====================================================================

// В конструкторі можна створювати нові тести,
// для яких є налаштування за замовчуванням,
// які зберігаються у змінній defaultSettings.
// Під час створення тесту, усі або
// частину налаштувань можна перевизначити,
// користувацькі налаштування зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту,
// необхідно взяти налаштування за замовчуванням і
// поверх них застосувати перевизначені користувацькі налаштування.
// Доповни код таким чином, щоб у змінній finalSettings
// утворився об'єкт фінальних налаштувань тесту.

// Оголошена змінна defaultSettings
// Значення змінної defaultSettings - це об'єкт
// Оголошена змінна overrideSettings
// Значення змінної overrideSettings - це об'єкт
// Оголошена змінна finalSettings
// Значення змінної finalSettings - це об'єкт
// Значення властивості finalSettings.theme дорівнює "light"
// Значення властивості finalSettings.public дорівнює "false"
// Значення властивості finalSettings.withPassword дорівнює "true"
// Значення властивості finalSettings.minNumberOfQuestions дорівнює 10
// Значення властивості finalSettings.timePerQuestion дорівнює 30
// Для присвоєння значення змінній finalSettings використовується
// синтаксис ...

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...overrideSettings,
// };

//======================================================================
