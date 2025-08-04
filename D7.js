/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
const stringConc = function (x, y) {
  let firstChar = x.substring(0, 2);
  let lastChar = y.substring(y.length - 3);
  return firstChar + lastChar;
};

let newString = stringConc("Hello World", "Epicode");

console.log(newString);

console.log("%===================================%");
/* ESERCIZIO 2 (for)
Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

const arrayOfTen = function () {
  let randomNum = [];
  for (let i = 0; i <= 9; i++) {
    let randomized = Math.floor(Math.random() * 101);
    randomNum.push(randomized);
  }
  return randomNum;
};

let arrayRes = arrayOfTen();
console.log(arrayRes);

console.log("%===================================%");
/* ESERCIZIO 3 (filter)
Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
// let evenNumber = [];
// const evenNum = function () {
//   for (let i = 0; i < arrayRes.length; i++) {
//     const num = arrayRes[i];
//     if (num % 2 === 0) {
//       evenNumber.push(num);
//     }
//   }
//   return evenNumber;
// };

// let onlyEven = evenNum();

// console.log(onlyEven);

const evenNum = arrayRes.filter((num) => num % 2 === 0);

console.log(evenNum);

console.log("%===================================%");
/* ESERCIZIO 4 (forEach)
Scrivi una funzione per sommare i numeri contenuti in un array
*/
let summed = 0;
const sum = evenNum.forEach((num) => {
  summed += num;
});

console.log(summed);

console.log("%===================================%");
/* ESERCIZIO 5 (reduce)
Scrivi una funzione per sommare i numeri contenuti in un array
*/
const sum2 = evenNum.reduce((accumulator, num) => accumulator + num, 0);

console.log(sum2);

console.log("%===================================%");
/* ESERCIZIO 6 (map)
Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

// const increase = function (num, n) {
//   let increased = num.map((num) => num + n);
//   return increased;
// };

// let increasedArray = increase(evenNum, 12);

// console.log(increasedArray);

const increase = (num, n) => evenNum.map((num) => num + n);

let increasedArray = increase(evenNum, 12);

console.log(increasedArray);

console.log("%===================================%");
/* ESERCIZIO 7 (map)
Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const strings = ["EPICODE", "is", "great", "every", "day", "more"];

const letterCount = (strings) => strings.map((singleString) => singleString.length);

let count = letterCount(strings);

console.log(count);
console.log("%===================================%");
/* ESERCIZIO 8 (forEach o for) consigliato for !!!!!!
Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
const oddNumbers = function () {
  let oddNum = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      oddNum.push(i);
    }
  }
  return oddNum;
};
let oddest = oddNumbers();
console.log(oddest);
console.log("%===================================%");
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
const oldest = function () {
  let oldest = movies[0];
  movies.forEach((movie) => {
    if (movie.Year < oldest.Year) {
      oldest = movie;
    }
  });
  return oldest;
};

let oldestFilm = oldest();

console.log(oldestFilm);
console.log("%===================================%");
/* ESERCIZIO 10
Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
const filmNum = () => movies.length;

let numbersOfFilm = filmNum();

console.log(numbersOfFilm);

console.log("%===================================%");
/* ESERCIZIO 11 (map)
Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

const titles = movies.map((movie) => movie.Title);

console.log(titles);

console.log("%===================================%");
/* ESERCIZIO 12 (filter)
Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
const millenniumBug = movies.filter((movie) => movie.Year >= 2000);

console.log(millenniumBug);

console.log("%===================================%");
/* ESERCIZIO 13 (reduce)
Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const yearSum = movies.reduce((accumulator, movie) => (accumulator += parseInt(movie.Year)), 0);

console.log(yearSum);

console.log("%===================================%");
/* ESERCIZIO 14 (find) ritorna il primo trovato un solo elemento 
Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
const oneFilm = function (imdbID) {
  return movies.find((movie) => movie.imdbID === imdbID);
};

let selectedFilm = oneFilm("tt0167261");

console.log(selectedFilm);

console.log("%===================================%");
/* ESERCIZIO 15 (findIndex)                 
Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

const indexFilm = function (year) {
  return movies.findIndex((movie) => parseInt(movie.Year) === year);
};

let indexFind = indexFilm(1984);

console.log(indexFind);

console.log("%===================================%");
