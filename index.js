// returnFirstTwoDrivers() —
//1- Declare the variable returnFirstTwoDrivers with const
//2 -assign an anonymous function to it.
//3- The assigned function should accept an array of drivers as an argument
//  and return the first two drivers in the array.

// function x(){
//     console.log('hello world');
// }

/*
Rule ==> every value can be accessed by its key
*/
const returnFirstTwoDrivers = function (arrOfDrivers) {
  return arrOfDrivers.slice(0, 2);
  // const firstTwoDrivers = [];

  // for (let i = 0; i < 2; i++){
  //     firstTwoDrivers.push(
  //         arrOfDrivers[i]
  //     )
  // }

  // return firstTwoDrivers;
};

/*
1 -Declare a variable with `const` 
2 - that is assigned an anonymous function. 
3- The assigned function should accept an array of drivers as n argument and 
4- return the **last** two drivers in the array.

*/
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length - 2, drivers.length);
};

// selectingDrivers — This is an array containing two elements:
// the two functions that we previously defined
// (returnFirstTwoDrivers() and returnLastTwoDrivers()).

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier() — This is a higher-order function that takes in one argument,
//  an integer, and returns a function that will multiply a fare for a ride accordingly.
//   For example, if createFareMultiplier() receives an argument of 4, it will return a
//   function that takes in a fare as an argument and quadruples the fare.

function createFareMultiplier(int) {
  return function (fare) {
    return int * fare;
  };
}
function fareDoubler(fare) {
  return fare * 2;
}
function fareTripler(fare) {
  return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers);
}
