'use strict'

// // let numberOfFilms;

// // function start() {
// //     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// //     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// //         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// //     }
// // }

// // // start();

// // const personalMovieDB = {
// //     count: numberOfFilms,
// //     movies: {},
// //     actors: {},
// //     genres: [],
// //     privat: false
// // };

// // for (let i = 0; i < 2; i++) {
// //     const a = prompt('один из последних просмотренных фильмов?', ''),
// //         b = prompt('На сколько оцените его?', '');

// //     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// //         personalMovieDB.movies[a] = b;
// //         console.log('done');
// //     } else {
// //         console.log('error');
// //         i--;
// //     }
// // }

// // function rememberMyFilms() {
// //     for (let i = 0; i < 2; i++) {
// //         const a = prompt('один из последних просмотренных фильмов?', '').trim(),
// //             b = prompt('На сколько оцените его?', '');

// //         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// //             personalMovieDB.movies[a] = b;
// //             console.log('done');
// //         } else {
// //             console.log('error');
// //             i--;
// //         }
// //     }
// // }

// // // rememberMyFilms();

// // function detectPersonalLevel() {
// //     if (personalMovieDB.count < 10) {
// //         console.log("Просмотрено довльно мало фильмов");
// //     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// //         console.log("Вы классический зритель");
// //     } else if (personalMovieDB.count >= 30) {
// //         console.log("Вы киноман");
// //     } else {
// //         console.log("Ошибка");
// //     }
// // }

// // // detectPersonalLevel();

// // function showMyDB(hidden) {
// //     if (!hidden) {
// //         console.log(personalMovieDB);
// //     }
// // }

// // // showMyDB(personalMovieDB.privat);

// // function writeYourGenres() {
// //     for (let i = 1; i <= 3; i++) {
// //         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по номерои ${i}`);
// //     }
// // }

// // writeYourGenres();

// // console.log(personalMovieDB);






// // Функция, которая принимает в себя целое число минут и возвращает время в нужном формате строки.
// function getTimeFromMinutes(minutesTotal) {
//     if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     switch (hours) {
//         case 0:
//             hoursStr = "часов";
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     switch (minutes) {
//         case 0:
//             minutesStr = "минут";
//             break;
//         case 1:
//             minutesStr = "минута";
//             break;
//         case 2:
//         case 3:
//         case 4:
//             minutesStr = "минуты"
//             break;
//         default:
//             minutesStr = "минут"
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} ${minutesStr}`;

// }

// const result = getTimeFromMinutes(120);

// console.log(result);


// //      Задача с числами Фибоначчи
// function fib(num) {
//     if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }


//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// const number = fib(7);
// console.log(number);


// // Objects 

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log("Test");
//     }
// };

// options.makeTest();

// console.log(Object.keys(options).length);

// // console.log(options.name);

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const { age } = plan;
        const { languages } = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function (lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);


function showExperience(plan) {
    const { exp } = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const { programmingLangs } = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}

const a = showProgrammingLangs(personalPlanPeter);
console.log(a);


//Задача на работу с массивами

// 1 Задача:
// Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member}, `
    });

    return str;
}

const names = showFamily(family);
console.log(names);

// 2 Задача:
// Напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль:

// lisbon
// rome
// milan
// dublin

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

const cities = standardizeStrings(favoriteCities);
console.log(cities);
