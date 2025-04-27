// Функція makePizza повертає рядок з повідомленням клієнту.

// Доповни код таким чином, щоб у змінній result
// був результат виконання функції makePizza,
// а у змінній pointer було посилання на функцію makePizza.

// Оголошена функція makePizza
// Оголошена змінна result
// Значення змінної result - це рядок "Your pizza is being prepared, please wait."
// Значення змінної result отримане за допомогою виклику функції
// Оголошена змінна pointer
// Значення змінної pointer - це посилання на функцію makePizza

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);

//===================================================================

// Функція makeMessage приймає один параметр ім'я піци,
// що доставляється, pizzaName та повертає рядок з
// повідомленням клієнту.

// Доповни функцію makeMessage таким чином,
// щоб вона очікувала другим параметром (параметр callback)
// колбек-функцію і повертала результат її виклику.
// Функції deliverPizza або makePizza будуть передаватися
// як колбек для makeMessage і очікувати аргументом ім'я готової піци,
// що доставляється.

// Оголошена функція deliverPizza
// Оголошена функція makePizza
// Оголошена функція makeMessage
// Функція makeMessage приймає два параметри,
// названі відповідно до завдання, pizzaName і callback
// Виклик makeMessage("Royal Grand", makePizza)
// повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// Виклик makeMessage("Ultracheese", deliverPizza)
// повертає рядок "Delivering Ultracheese pizza."

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

//==========================================================================

// Функція makePizza має два параметри: pizzaName -
// ім'я піци та callback - колбек-функцію.
// Під час виконання, makePizza викликає цей колбек,
// передаючи йому pizzaName як аргумент.

// Доповни другий виклик функції makePizza(pizzaName, callback),
// передавши другим аргументом інлайн колбек - функцію eatPizza(pizzaName).
// Колбек eatPizza логує рядок "Eating pizza <назва піци>",
// де < назва піци > це значення параметра pizzaName.

// Оголошена функція makePizza
// Функція makePizza приймає два параметри
// Другим аргументом під час виклику makePizza("Ultracheese")
// передана функція eatPizza з єдиним параметром pizzaName

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

//==============================================================================

// Функція calculateTotalPrice(orderedItems) приймає один параметр
// orderedItems - масив чисел, і розраховує загальну суму його елементів,
// яка зберігається у змінній totalPrice і повертається як результат роботи
// функції.

// Доповни виклик метода forEach, передавши йому колбек - функцію,
// яка на кожній ітерації додає до totalPrice значення поточного
// елемента масива orderedItems.

// Оголошена функція calculateTotalPrice(orderedItems)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами,
//     повертає правильне значення

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (orderedItem) {
//     totalPrice += orderedItem;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116

//==========================================================================

// Виконай рефакторинг функції calculateTotalPrice() таким чином,
// щоб вона була оголошена як стрілочна.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція
// з параметрами(quantity, pricePerItem)
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик функції з випадковими, але валідними аргументами,
// повертає правильне значення

// function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem;
// }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100)); // повертає 500
// console.log(calculateTotalPrice(8, 60)); // повертає 480
// console.log(calculateTotalPrice(3, 400)); // повертає 1200

//=========================================================================
