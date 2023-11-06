/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

/* const stringa1 = prompt("inserisci parola 1")
const stringa2 = prompt("inserisci parola 2")

const slice1 = stringa1.slice(0,3)
const slice2 = stringa2.slice(-3)

const nuovaStringa = slice1.concat(slice2)
const nuovaStringaM = nuovaStringa.toUpperCase()

console.log(nuovaStringaM) */

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

/* function ranNumbers() {
  const randomNumbers = [];
  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 101);
    randomNumbers.push(randomNumber); 
  return randomNumbers;
}
}
const numeriCasuali = ranNumbers
console.log(numeriCasuali) */




/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

/* function filtraNumeriPari(array) {
  return array.filter(numero => numero % 2 === 0);
}

const numerico = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeriPari = filtraNumeriPari(numerico);
console.log(numeriPari); */


/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

/* function sommaNumeri(array) {
  let somma = 0;
  array.forEach(function(numero) {
    somma += numero;
  });
  return somma;
}

const arrayDiNumeri = [1, 2, 3, 4, 5];
const risultato = sommaNumeri(arrayDiNumeri);
console.log("La somma dei numeri è:", risultato)
 */


/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

/* function somma(array) {
  return array.reduce((acc, numero) => acc + numero, 0);
}

const arrayDiNumeri = [1, 2, 3, 4, 5];
const risultato = somma(arrayDiNumeri);
console.log(risultato); */


/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

/* function incrementa(array, n) {
  const arrayIncrementato = array.map(numero => numero + n);
  return arrayIncrementato;
}

const arrayDiNumeri = [1, 2, 3, 4, 5];
const n = 5;
const arrayIncrementato = incrementa(arrayDiNumeri, n);
console.log(arrayIncrementato);  */


/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

/* function stringLenght(arrayStringhe) {
  const length = arrayStringhe.map(stringa => stringa.length);
  return length;
}

const arrayStringhe = ["ciao", "hello", "hola", "bonjour"];
const length = stringLenght(arrayStringhe);
console.log(length); */

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

/* function numeriDispari() {
  const arrayDispari = [];
  for (let i = 1; i <= 99; i += 2) {
    arrayDispari.push(i);
  }
  return arrayDispari;
}

// Esempio di utilizzo della funzione
const numeriDispari99 = numeriDispari();
console.log(numeriDispari99); */


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

/* function trovaFilmPiuVecchio(movies) {

    let filmPiuVecchio = movies[0];

  for (let i = 1; i < movies.length; i++) {
    const filmC = movies[i];
    if (parseInt(filmC.Year) < parseInt(filmPiuVecchio.Year)) {
      filmPiuVecchio = filmC;
    }
  }
  return filmPiuVecchio;
}

const filmPiuVecchio = trovaFilmPiuVecchio(movies);
console.log(filmPiuVecchio);
 */

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/* function numeroFilm(movies) {
  return movies.length;
}

const numeroDiFilm = numeroFilm(movies);
console.log("Il numero di film è: " + numeroDiFilm); */


/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

/* function titoliFilm(movies) {
  const titoliDeiFilm = movies.map(film => film.Title);
  return titoliDeiFilm;
}
const titoliDeiFilm = titoliFilm(movies);
console.log(titoliDeiFilm); */


/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* function filmDal2000(movies) {
  const dal2000 = new Date().getFullYear().toString().slice(0, 3);

  const filmDal2000InPoi = movies.filter(film => {
    const annoFilm = parseInt(film.Year);
    return annoFilm >= parseInt(dal2000 + "00");
  });

  return filmDal2000InPoi;
}

const filmDal2000InPoi = filmDal2000(movies);
console.log(filmDal2000InPoi); */

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* function sommaAnniFilm(movies) {
  const anniFilm = movies.map(film => parseInt(film.Year));
  const sommaAnni = anniFilm.reduce((acc, anno) => acc + anno, 0);
  return sommaAnni;
}

const risultatoSommaAnni = sommaAnniFilm(movies);
console.log("La somma degli anni di produzione dei film è: " + risultatoSommaAnni);
 */


/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/* function trovaFilmConImdbID(movies, imdbID) {
  const filmCercato = movies.find(film => film.imdbID === imdbID);
  return filmCercato || null;
}
const imdbIDCerca = prompt("Cerca film con ImdbID"); 
const filmTrovato = trovaFilmConImdbID(movies, imdbIDCerca);

if (filmTrovato) {
  console.log("Film trovato:");
  console.log(filmTrovato);
} else {
  console.log("Nessun film trovato con l'IMDbID inserito.");
} */

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
