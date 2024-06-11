//ES

const arrOfNumbers = [1 ,2, 3, 4];

let firstElement = arrOfNumbers[0];
let secondElement = arrOfNumbers[1];
let thirdElement = arrOfNumbers[2]


console.log(firstElement);
console.log(secondElement);
console.log(thirdElement);

console.log(firstElement, secondElement, thirdElement);

const dev = { 
    firstName: "john",
    stack: "node",
    week: "3",
};

const devName = dev.firstName;
console.log(devName);

// const newArr = [...arrOfNumbers];
const secondArray = [5, 6, 7, 8];
const newArr = [...arrOfNumbers, ...secondArray]
const str = "chika"
const letters = [...str];



console.log(newArr);
console.log(letters);

const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
    console.log(numbers);
}

//...rest parameter

function sumNumbers(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total +=number
    }
     return total
}
console.log(sumNumbers(3, 5, 8, 5, 10));

const arr1 = [ 4, 5, 9, 8];
const arr2 = [ 2, 3, 0, 7, 6];
let [fourthElement, ...rest] = arr1;
console.log(fourthElement, rest);
console.log(...rest);

//sets...unique values---non repeated values

const numberslock = new Set ([1, 2, 1, 6, 5, 1, 3, 6, 5, 7]);

//add--we could add new elements into a set

numberslock.add(10);
numberslock.add(56);
numberslock.add(11);

console.log(numberslock);

console.log(numberslock.size);
console.log(numberslock.delete(10));
console.log(numberslock);

// maps--a way to hold key value pairs
const names = new Map()
names.set('firstName', 'louis');
names.set('lastName', 'uzoma');
console.log(names.has('firstName'));
console.log(names.delete('firstName'));
console.log(names);

















