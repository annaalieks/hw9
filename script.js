'use strict';

// ЗАДАЧА 1
// ‘FizzBuzz’ через ітератор -  не через класи

let numbersSequence = {};

numbersSequence[Symbol.iterator] = function (start = 1, end = 100, interval = 1) {

        let counter = 0;
        let nextIndex = start;

        return {
            next: () => {

                if (nextIndex <= end) {
                    let result = { value: nextIndex, done: false }

                    nextIndex += interval;
                    counter++;

                    if (counter % 15 === 0) {
                        result = { value: "FizzBuzz", done: false }
                    } else if (counter % 5 === 0) {
                        result = { value: "Buzz", done: false }
                    } else if (counter % 3 === 0) {
                        result = { value: "Fizz", done: false }
                    }

                    return result;
                }
                return {done: true };
            }
        }
}

for (const num of numbersSequence) {
    console.log(num);
}

// ‘FizzBuzz’ через генератор - не через класи

function* fizzBuzzGenerator(start = 1, end = 100, interval = 1) {
    let num;

    for (num = start; num <= end; num = ++interval) {
        
        if (num % 15 === 0) {
            yield num = "FizzBuzz";
        } else if (num % 5 === 0) {
            yield num = "Buzz";
        } else if (num % 3 === 0) {
            yield num = "Fizz";
        } else {
            yield num;
        }
    }
}

let numSequence = fizzBuzzGenerator();

for (const num of numSequence) {
    console.log(num);
}

// ЗАДАЧА 1
// ‘FizzBuzz’ через ітератор -  через класи

// class FizzBuzzIterator {

//     constructor(start = 1, end = 100, interval = 1) {
//         this.start = start;
//         this.end = end;
//         this.interval = interval;
//     }

//     [Symbol.iterator]() {

//         let counter = 0;
//         let nextIndex = this.start;

//         return {
//             next: () => {

//                 if (nextIndex <= this.end) {
//                     let result = { value: nextIndex, done: false }

//                     nextIndex += this.interval;
//                     counter++;

//                     if (counter % 15 === 0) {
//                         result = { value: "FizzBuzz", done: false }
//                     } else if (counter % 5 === 0) {
//                         result = { value: "Buzz", done: false }
//                     } else if (counter % 3 === 0) {
//                         result = { value: "Fizz", done: false }
//                     }

//                     return result;
//                 }
//                 return {done: true };
//             }
//         }
//     }
// }

// let numbersSequence = new FizzBuzzIterator;

// for (const num of numbersSequence) {
//     console.log(num);
// }


// // ‘FizzBuzz’ через генератор - через класи

// class FizzBuzzGenerator {

//     constructor(start = 1, end = 100, interval = 1) {
//         this.start = start;
//         this.end = end;
//         this.interval = interval;
//     }

//     *[Symbol.iterator]() {
//         let num;

//         for (num = this.start; num <= this.end; num = ++this.interval)
        
//             if (num % 3 === 0 && num % 5 === 0) {
//                 yield num = "FizzBuzz";
//             } else if (num % 5 === 0) {
//                 yield num = "Buzz";
//             } else if (num % 3 === 0) {
//                 yield num = "Fizz";
//             } else {
//                 yield num;
//             }
//     }
// }

// let numSequence = new FizzBuzzGenerator;

// for (const num of numSequence) {
//     console.log(num);
// }


// ЗАДАЧА 2
//  Генератор випадкових чисел

// function* generateRandomNumbers(max = 50, quantity = 10) {
    
//     for (let i = 1; i <= quantity; i++) {
//         yield Math.round(Math.random() * max);
//     }
// }

// let randomNumberSequence = generateRandomNumbers();

// for (const num of randomNumberSequence) {
//     console.log(num);
// }