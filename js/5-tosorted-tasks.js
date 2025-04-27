// Змінна releaseDates - це масив чисел, років видання книг.
// Змінна authors - це масив рядків, авторів книг.

// Доповни код таким чином, щоб у змінній ascendingReleaseDates
// вийшла копія масиву releaseDates, відсортована за зростанням,
// а у змінній alphabeticalAuthors - копія масиву імен авторів authors,
// відсортована за алфавітом.Використовуй метод toSorted()

// Оголошена змінна releaseDates

// Значення змінної releaseDates -
// це масив[2016, 1967, 2008, 1984, 1973, 2012, 1997]

// Оголошена змінна authors

// Значення змінної authors -
// це масив["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]

// Оголошена змінна ascendingReleaseDates

// Значення змінної ascendingReleaseDates -
// це масив[1967, 1973, 1984, 1997, 2008, 2012, 2016]

// Оголошена змінна alphabeticalAuthors

// Значення змінної alphabeticalAuthors -
// це масив["Bernard Cornwell", "Fyodor Dostoevsky", "Robert Sheckley", "Tanith Lee"]

// Використаний метод toSorted()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// console.log(ascendingReleaseDates);

// const alphabeticalAuthors = authors.toSorted();

// console.log(alphabeticalAuthors);

//=========================================================================

// Змінна releaseDates - це масив чисел, років видання книг.

// Онлайн бібліотеці необхідно відображати книги,
// відсортовані за датою видання, за їх зростанням або спаданням.
// Доповни код таким чином, щоб у змінній ascendingReleaseDates
// вийшла копія масиву releaseDates, відсортована за зростанням,
// а у змінній descendingReleaseDates - копія, відсортована за спаданням.

// Оголошена змінна releaseDates

// Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]

// Оголошена змінна ascendingReleaseDates

// Значення змінної ascendingReleaseDates - це масив[1967, 1973, 1984, 1997, 2008, 2012, 2016]

// Оголошена змінна descendingReleaseDates

// Значення змінної descendingReleaseDates - це масив[2016, 2012, 2008, 1997, 1984, 1973, 1967]

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// console.log(ascendingReleaseDates);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

// console.log(descendingReleaseDates);

//========================================================================

// Змінна authors - це масив рядків, авторів книг.

// Онлайн бібліотеці необхідно відображати книги,
// відсортовані за автором в алфавітному і
// в зворотному алфавітному порядку.
// Доповни код таким чином,
// щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors,
// відсортована за алфавітом, а у змінній authorsInReversedOrder - копія,
// відсортована у зворотному алфавітному порядку.

// Оголошена змінна authors

// Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]

// Оголошена змінна authorsInAlphabetOrder

// Значення змінної authorsInAlphabetOrder - це масив["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]

// Оголошена змінна authorsInReversedOrder

// Значення змінної authorsInReversedOrder - це масив["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]

// Використаний метод toSorted()

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

// console.log(authorsInAlphabetOrder);

// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

// console.log(authorsInReversedOrder);

//==============================================================================

// Масив books містить масив об'єктів книг,
// кожен з яких містить властивості title, author, rating.

// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг,
//     відсортований за ім'ям автора в алфавітному порядку.

// У змінній sortedByReversedAuthorName вийшов масив книг,
//     відсортований за ім'ям автора у зворотному алфавітному порядку.

// У змінній sortedByAscendingRating вийшов масив книг,
//     відсортований за зростанням рейтингу.

// У змінній sortedByDescentingRating вийшов масив книг,
//     відсортований за спаданням рейтингу.

// Оголошена змінна books

// Значення змінної books - це вихідний масив об'єктів книг

// Оголошена змінна sortedByAuthorName

// Значення змінної sortedByAuthorName - це масив книг,
//     відсортований за ім'ям автора в алфавітному порядку

// Оголошена змінна sortedByReversedAuthorName

// Значення змінної sortedByReversedAuthorName - це масив книг,
//     відсортований за ім'ям автора у зворотному алфавітному порядку

// Оголошена змінна sortedByAscendingRating

// Значення змінної sortedByAscendingRating - це масив книг,
//     відсортований за зростанням рейтингу

// Оголошена змінна sortedByDescentingRating

// Значення змінної sortedByDescentingRating - це масив книг,
//     відсортований за спаданням рейтингу

// Для перебирання масиву books використовується метод toSorted()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((firstAuthorName, secondAuthorName) =>
//   firstAuthorName.author.localeCompare(secondAuthorName.author)
// );

// console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = books.toSorted(
//   (firstAuthorName, secondAuthorName) =>
//     secondAuthorName.author.localeCompare(firstAuthorName.author)
// );
// console.log(sortedByReversedAuthorName);

// const sortedByAscendingRating = books.toSorted(
//   (firstRating, secondRating) => firstRating.rating - secondRating.rating
// );

// console.log(sortedByAscendingRating);

// const sortedByDescentingRating = books.toSorted(
//   (firstRating, secondRating) => secondRating.rating - firstRating.rating
// );

// console.log(sortedByDescentingRating);

// ==========================================================================
