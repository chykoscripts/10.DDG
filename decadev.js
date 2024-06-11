function gradeClass(grade) {
    if (grade >= 90) {
      return "A";
    } else if (grade >= 80) {
      return "B";
    } else if (grade >= 70) {
      return "C";
    } else if (grade >= 60) {
      return "D";
    } else {
      return "F";
    }
  }

  //Write a program that determines if a given year is a leap year. A leap year is divisible by 4 but not by 100 unless also divisible by 400.

  function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}


//Write a function that finds the largest of three given numbers.

function findLargest(num1, num2, num3) {

    if (num1 >= num2 && num1 >= num3) {

        return num1;

    } else if (num2 >= num1 && num2 >= num3) {

        return num2;

    } else {

        return num3;

    }
}

//Write a function that checks if a person is eligible to vote based on their age.

 const votingAge = 18
function isEligibleToVote(age) {
    if (typeof age !== 'number') {
      return TypeError('Age must be a number');
    } else {
    return age >= 18;
    }
  }

// numbers
let num = 2.45;
Math.floor(num1);
console.log(num1);
//Math.floor always rounds down
console.log(Math.floor(num1));
//Math.ceil always rounds up
//Math.round does everyday math, roundingup to the nearest integer
//Math.trunc returns only the integer path e.g 2.567=2
//number operators
let num1 = "2"
let num2 = "3"
console.log(num2 + num1 );


//parseInt(num1)
//parseFloat(num1)

let num1 = "2.03"
let num2 = "3"
console.log(parseInt(num1) + num2);

console.log(parseFloat(num1) + num2);

//checkingup a number
//largest number using Math.max and Math.min
//console.log(Math.max(500, 87, 1000))
//console.log(Math.min(45, 67, 84))
//Using Math.random to get 
//using Math.sqrt to get the squareroot

//strings are characters in quotes using single or double quotes
//length
let str = "school"
console.log(str[0]);
//toUpperCase returns all characters to uppercase
//toLowerCase returns all to lower case
//adding multiple methods together through chaining
//index is the position of a char
//using indexOf to get the positions
//str.includes returns the boolean value, true or false
//str.startWith get the value of the character of the string
//str.endsWith get the value of the Last character on a string
//str.slice getting part of a string back to us
//softstr is a section of a string
//sliced method does not mutate the original value
//trim.Start and trim.End trims beginning and end of char
//str.replace to replace the occurance of char
//str.split("") used to divide char by a given number
//padding a string , adding char till it gets to its desired length



let str =  "school";
console.log(str[0]. toUpperCase() + str.slice(1));
console.log(firstLetter)

//trim method to remove excess spaces
let str = "jon.doe@gmail.com";
let str2 = "  jon.doe@gmail.com  ";
console.log(str2.trim())

let str = john
console.log(str.padStart(8, "*"))
console.log(str.padEnd (8, "*"))

let str = "32467895"
console.log(str.padStart(24, "*" ))

//this is a good day
//use loops to repeat a particular code multiple times
//for loop
//while loop
//do while loop
for(begin; condition; step){
//loop body
}
for(let index = 0; index < 3; index++){
    console.log(index)
}

for(let i = 0; index < strlength; index++){
    console.log(index, str[index])
}    
function sumNumbers(num) {
    let total = 0 ;
    for ( let index = 0; index <= num; index++) {
        total += index;
    }
    return total;
}
console.log(sumMumbers(7));
console.log(sumNumbers(9));






