/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("ESERCIZIO 1");
function concatenare(stringa1, stringa2) {
  const primaparte = stringa1.slice(0, 2);
  const secondaparte = stringa2.slice(-3);
  result = primaparte.concat(secondaparte).toUpperCase();

  console.log(result);
}
concatenare("casa", "pera");

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
//creao array vuoto
//creo un ciclo di 10 indici
//creao un operazione che mi randommizzi questi 10 indici con numeri compresi da 0 a 100
console.log("ESERCIZIO 2");
function generatoreArray(array) {
  randomArray = [];

  for (let i = 0; i < 10; i++) {
    let numRandom = Math.floor(Math.random() * 101);
    randomArray.push(numRandom);
  }
  return randomArray;
}
console.log(generatoreArray());

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log("ESERCIZIO 3");
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeriPari = numArray.filter((numero) => numero % 2 === 0);

console.log(numeriPari);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("ESERCIZIO 4");

const somma = function (array) {
  let actualSum = 0;
  array.forEach((number) => (actualSum += number));
  return actualSum;
  console.log(array);
};

console.log(somma(numArray));

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("ESERCIZIO 5");
const abc = [23, 50, 7];
const addizione = abc.reduce((sum, item) => sum + item, 0);
console.log(addizione);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri,
   ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log("ESERCIZIO 6");

const sommaDiArray = function (array, n) {
  let somdArray = array.map((number) => number + n);
  return somdArray;
};
console.log(sommaDiArray(numArray, 1));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, 
  ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/ console.log("ESERCIZIO 7");

const strArray = ["EPICODE", "IS", "GREAT!"];

const countStrings = (array) => {
  const countedStrings = array.map((elementoArray) => {
    // con map creo una nuova variabile
    return elementoArray.length;
  });
  return countedStrings;
};

console.log(countStrings(strArray));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("ESERCIZIO 8");

const dispari = () => {
  const numeri1 = [];
  const numeri2 = [];
  for (let i = 1; i < 100; i++) {
    numeri1.push(i);
  }
  numeri1.filter((number) => number % 2 !== 0).forEach((n) => numeri2.push(n));
  return numeri2;
};

console.log(dispari());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/ console.log("ESERCIZIO 9");

function findOldestMovie(movies) {
  let oldestMovie = movies[0]; // Assume che il primo film sia il più vecchio

  movies.forEach(function (movie) {
    // Confronta gli anni dei film per trovare il più vecchio
    if (parseInt(movie.Year) < parseInt(oldestMovie.Year)) {
      oldestMovie = movie;
    }
  });

  return oldestMovie;
}

const oldestMovie = findOldestMovie(movies);
console.log(
  "Il film più vecchio è:",
  oldestMovie.Title,
  "del",
  oldestMovie.Year
);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/ console.log("ESERCIZIO 10");
const getNumberOfMovies = (movies) => {
  return movies.length;
};

console.log("Il numero di film è:", getNumberOfMovies(movies));

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/ console.log("ESERCIZIO 11");
const getMovieTitles = (movies) => {
  const arrayTitoli = [];
  movies.map((movie) => {
    arrayTitoli.push(movie.Title);
  });
  return arrayTitoli;
};

console.log("Titoli dei film:", getMovieTitles(movies));

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/ console.log("ESERCIZIO 12");
const filmCorrenti = (film) => {
  const millennio = movies.filter((film) => film.Year >= 2000);
  return millennio;
};
console.log(filmCorrenti(movies));
/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/ console.log("ESERCIZIO 13");
function sumOfProductionYears(movies) {
  const sum = movies.reduce((total, movie) => {
    return total + parseInt(movie.Year);
  }, 0);
  return sum;
}

const totalYears = sumOfProductionYears(movies);
console.log("Somma degli anni di produzione dei film:", totalYears);

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/ console.log("ESERCIZIO 14");

const findimbdID = (stringa) => {
  const filimbId = movies.find((movie) => movie.imdbID === stringa);
  return filimbId;
};
console.log(findimbdID("tt4154756"));

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
const findFirstMovieIndexByYear = (movies, year) => {
  const primoFilm = movies.findIndex((movie) => movie.Year === year);

  return primoFilm;
};

const year = "2012";

console.log(
  "Indice del primo film uscito nel",
  year + ":",
  findFirstMovieIndexByYear(movies, year)
);
