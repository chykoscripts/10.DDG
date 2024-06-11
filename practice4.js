let x = 'chika';
console.log(x);

let firstName = 'chika';
let lastName = 'obidinma';
let age = '38';
console.log(firstName , lastName, age);

let person = {
    firstName: 'chika',
    lastName: 'obidinma',
    age: '38',
    institution: 'decagon'
};
console.log(person);

person.name = 'louis';
console.log(person.name);

let selectedFruits =['apple', 'banana', 'orange', 'pineapple'];
console.log(selectedFruits);

function greet(firstName) {
    console.log('Hello' , firstName , lastName);
}
greet(firstName);

function cube(number) {
    return number * number * number;
}

let number = cube(38);
console.log(number);

let a = 50;
let b = 24;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a | b);
console.log(a ** b);
console.log(++a);
console.log(--a);
console.log(a > b);
console.log(b > a);
console.log(a != b);
console.log(a <= b);
console.log(a >= b);
console.log(a === b);

let c = 59;
c *= 3;
console.log(c);

// if chika has more than 100 points 
// he is a 'good' student, otherwise,
// he is a 'not good' student

let points = 150;
let type = points > 100 ? 'good' : 'not good';
console.log(type);

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

console.log('Eligible', eligibleForLoan);

let applicationRefused = !eligibleForLoan;

console.log('Application Refused', !eligibleForLoan);

let d = 'red';
let e = 'blue';
let f = d;
d = e;
e = f;
console.log(d);
console.log(e);

// if hour is between 8am and 12pm: Good morning!
// if it is betweeen 12pm and 4pm: Good afternoon!
// otherwise: Good evening!

// if (condition) {
// statment//block of code
// }
// else if (anotherConditon){
// statment//block of code
// }
// else if(yetAnotherCondition)
//statment//block of code
//else{
//statement
// }
let hour = 19;

if (hour >= 6 && hour < 12) {
   console.log('Good Morning');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon');
}
else if (hour >= 18 && hour < 20) {
    console.log('Good Evening');
}
else{
    console.log('Good Night');
}
// you can take out curly braces to reduce code noise

let role = 'moderator';
switch (role) {
    case 'guest':
        console.log('Guest User'); 
        break;
    case 'moderator':
        console.log('Moderator User');    
    default:
        console.log('Unknown User');
        break;
}
if (role === 'guest') console.log('Guest');
else if (role === 'moderator') console.log('Moderator');
    else console.log('Unknown User');

    // for(initialExpression; Condition; incrementExpression); 
for (let i = 0; i < 3; i++) {
    console.log('Hello World');
}
for (l = 1; l <=5; l++){
    if (l % 2 !== 0)
    console.log(l);
}
  let i = 0;
  while (i <= 5) {
    if (i % 2 !== 0)
        console.log(i);
    i++;
  }
  