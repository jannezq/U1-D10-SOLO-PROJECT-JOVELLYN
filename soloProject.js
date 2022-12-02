/*

ASSIGNMENT RULES

– All the answers must be written in JavaScript

– You can ask for help, reach the Teaching Assistants if needed

– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet

– You can test your code in a separate file or de-commenting the single exercises in this one.

– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.

– Complete as many exercises as you can

*/

// JS Basics

/* EXERCISE A

Create a variable called test and assign a string value to it.

*/
let test = "Jovellyn Quiapos";

/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;

let result = sum;

console.log("Result of 10 + 20 is: ", result);

/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/

let random = Math.floor(Math.random() * 10 + 1);

console.log("Random number", random);

/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/
let me = {
  name: "Jovellyn",
  surname: "Quiapos",
  age: 26,
};

console.log("This is me: ", me);

/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/
me = {
  name: "Jovellyn",
  surname: "Quiapos",
  age: 26,
};

delete me.age;
console.log("This is me: ", me);

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/
me = {
  name: "Jovellyn",
  surname: "Quiapos",
  age: 26,
  skills: [],
};
let newSkills = ["html", "css", "javascript"];
me.skills.push(newSkills);

console.log(`This is my skills:  ${me.skills}`);

/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/

let removeSkill = me.skills.splice[(2, 1)];
console.log(me);

// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/

function dice(diceNum) {
  let min = 1;
  let max = 7;
  let diceRoll = [];
  for (let i = 1; i <= diceNum; i++) {
    diceRoll.push(Math.floor(Math.random() * (max - min) + min));
  }
  return diceRoll;
}
console.log(dice(1));

/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/

//input 2 numbers , num1 & num2
// output = biggest number

function whoIsBigger(num1, num2) {
  if (num1 < num2) {
    console.log("Number 2: ", num2, "is bigger than number 1: ", num1);
  } else {
    console.log("Number 1: ", num1, "is bigger than number 2: ", num2);
  }
}

whoIsBigger(12, 32);

/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/

// string
// output = array of the strings inputed

let enteredString = ["Hello name is Jovellyn Quiapos"];

function splitMe(stringText) {
  return stringText.split(" ");
}

let newSplit = splitMe(enteredString[0]);

console.log(newSplit);

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/

function deleteOne(text, boolean) {
  if (boolean) {
    let removeLetterOne = text.slice(1);
    console.log(removeLetterOne);
  } else {
    let removeLetterOne = text.slice(0, -1);
    console.log(removeLetterOne);
  }
}
deleteOne("JavaScript", false);

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/

function onlyLetters(entrySentence) {
  let noNums = [];
  noNums = entrySentence.replace(/[0-9]/g, "");
  return noNums;
}

console.log(onlyLetters("I am 26 yrs, born in 1996"));

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/

function isThisAnEmail(entryEmail) {
  let validateEmail = /^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/;
  return validateEmail.test(entryEmail);
}

console.log(isThisAnEmail("jovellyn@gmail.com"));
console.log(isThisAnEmail("jovellynquiaposgmailcom"));

/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/

let today = new Date();
function whatDayIsIt(day) {
  day = today.getDay();
  let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log("Today is : " + daylist[day] + ".");
}

whatDayIsIt(1);

/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/

function dice(diceNum) {
  let max = 1;
  let min = 7;
  let diceRoll = [];
  for (let i = 1; i <= diceNum; i++) {
    diceRoll.push(Math.floor(Math.random() * (max - min) + min));
  }
  return diceRoll;
}

//forgot to put them into an array and object.
function RollTheDices(newNumber) {
  let diceResult = dice(newNumber);
  let startPoint = 0;
  let sumOfAllValues = diceResult.reduce(
    (totalSum, currentNumber) => totalSum + currentNumber,
    startPoint
  );
  console.log("Values: " + diceResult);
  return "Sum: " + sumOfAllValues;
}

console.log(RollTheDices(5));

/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/

function howManyDays(start, end) {
  let date1 = new Date(start);
  let date2 = new Date(end);

  // One day in milliseconds
  let oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  let diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  let diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

console.log(howManyDays("2/1/2021", "2/12/2021"));

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/
function isTodayYourBirthday(birthDate) {
  let today = new Date();
  let birthday = new Date(birthDate);
  if (today.getDate() == birthday.getDate()) {
    console.log("True! Happy birthday!");
  } else {
    console.log("False! Not your birthday.");
  }
}

console.log(isTodayYourBirthday("June 26 , 1996"));

// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/

function deleteProp(objectList, driverLicense) {
  let objectList = {
    name: "jovellyn",
    surname: "quiapos",
    age: 26,
    driverLicense: false,
  };
  delete objectList.driverLicense;
  return objectList;
}

// movies array
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

/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/
//use parseInt as a solution here
//let filmYear = movies[0].Year;

// function oldestMovie(oldestFilm){
//     for (let i = 0; i < oldestFilm.length; i++) {
//
//         oldestFilm = Math.min(... filmYear);
//         return oldestFilm;
//     }
// }

// console.log(oldestMovie(movies));

/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/

let totalMovies = movies.length;
function countMovies(moviesEntry) {
  moviesEntry = totalMovies;
  return moviesEntry;
}

console.log(countMovies());

/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/

function onlyTheTitles() {
  let onlyTitles = [];
  for (let i = 0; i < movies.length; i++) {
    onlyTitles.push(movies[i].Title);
  }

  return onlyTitles;
}

console.log(onlyTheTitles());

/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/

/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/
function getMovieById(movieId) {
  for (let i = 0; i < movies.length; i++) {
    if (movieId == movies[i].imdbID) {
      console.log(movies[i]);
    }
  }
}

getMovieById("tt4154796");

/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/

/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/
function searchByTitle(movieName) {
  let movieTitles = onlyTheTitles();
  let hasName = movieTitles.filter((Title) => Title.includes(movieName));
  console.log(hasName);
}

searchByTitle("Rings");

/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/

/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/

// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***

*/

/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3)

*

***

*****

*/

/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/

/* WHEN YOU ARE FINISHED

Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.

*/
