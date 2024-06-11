const arrofNumbers = [1, 2, 3, 4,5];
//to access the numbers in an array
console.log(arrOfNumbers)[4];

//to change a value or element in an array, call the elements
arrOfNumbers [0] = 90
console.log(arrOfNumbers);

//to access the last element of an array

arrOfNumbers[arrOfNumbers.Length - 1];

console.log(arrLength)
//Array Methods, pop,push, toString, 
//to remove the last element of an array use pop
arrOfNumbers.pop()
console.log(lastItem);
console.log(arrOfNumbers);//to show the remaining items in array
//differentiate b/w pop and push
//pop will return value removed , push will return the values
//pop appends arguments
//shift removes the first element of an array
arrOfNumbers.shift()
const appendItem = arrOfNumbers.push(67);
const firstItem = arrOfNumbers.shift();
//arrays are zero-indexed
//destructive and non-destructive methods of an array,
//they alter the original of an array e.g .pop and push
//push appends while pop(destructive), .shift(removes 1st element)
//.toString converts an element to a string
//.join() joins the elements of an array into a string
let str2 = arr.join('')
console.log(str2);
//.unshift() -adds an element to the beginning of an array
arr2.unshift(0)
//adds 0 to the beginning of an array
//const arr3 = [(12), (20), (90)]//nested arrays
//.tostring can convert an obj to a string
//.join can also be used to join elements by character
//.split method converts a string to an array
// in strings spaces counts for characters so in an array of 5 with spaces makes it 10
// to remove spaces
let arr5 = str2.split('')
//concat() creates a new array by merging arrays
//non-destructive method
const arr1 = [1,2,3,4,5,6]
const arr2 = ['boy', 'man', 'he', 'she']
const arr3 = [true, false]
const combine = arr1.concat(arr3, arr2)
console.log(typeof combine[6])
//.splice used to remove elements based on the index specified
//it is a destructive method 
let arr4 = ['monday', 'tuesday', 'thursday', 'friday']
arr4.splice(2);

console.log()

let arr6 = ['í am', 'a', 'software', 'developer',]
arr6.splice(4)
console.log(arr6)
//splice takes index first then how elements to remove
//.splice[4] takes out all elements after 4
//.splice[4, 3] takes out 3 elements including elements in index 4
//splice[4, 1, "living"]
//.splice[2, 0, "tall"], adds tall to the elements without taking out any
//other elements
//can be used to cut out an array
//can be used to replace elements
//can be used to add

