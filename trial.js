/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/

// string & boolean
// output = 
// 1) if true, return string without first letter
// ) if false returns string without last letter


// function deleteOne(entry){
//     let without1 = entry.slice(1);
//     if (without1 == true) {
//      let entryNoFirst = without1.slice(1);
//        console.log(entryNoFirst);
//     } 
// };

// console.log(deleteOne("true"));



// let str = 'false';

// let withoutFirst = str.slice(1);
// if (withoutFirst.startsWith("true") === true) {
//     let entryNoFirst = withoutFirst.slice(1);
//       console.log(entryNoFirst);
//    } 
// console.log(withoutFirst); // 👉️ ello world

// let day = new Date();
// function whatDayIsIt(day){
//     let today = day.getDay();
//     return today;
// }

function dice(diceNum){
    let min = 1;
    let max = 7;
    let diceRoll= [];
    for (let i = 1; i <= diceNum; i++) {
       diceRoll.push(Math.floor(Math.random() * (max-min)+min));
    }
    return diceRoll;
}
console.log(dice(1));


function crazySum(num1, num2){
    if (num1 === num2) {
        let totalSum3 = (num1 + num2) * 3;
        console.log("Values are the same and so they are multiplied by 3: ", totalSum3);
        return totalSum3;
    } else {
        let totalNum1 = num1 + num2;
        console.log("Total sum of the two values are: ", totalNum1);
       return totalNum1;
    }
}

crazySum(44, 21);

let num1 = 10;
let num2 = 20;
let sum = num1 + num2

let result = sum;

console.log("Result of 10 + 20 is: ", result);

let random = [];
random.push(Math.floor(Math.random() * 21));

console.log("Random number");
