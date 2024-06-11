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
      return error ('Age must be a number');
    } else {
    return age >= 18;
    }
  }