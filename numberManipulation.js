// get user 10 numbers from user into an array

let tenNumbers = [];

for (let i = 0; i < 10; i++) {
  answer = +prompt("Please enter a number:");
  tenNumbers.push(answer);

  console.log(tenNumbers);
}

/*  i looked here for help to find max and min https://bobbyhadz.com/blog/javascript-get-index-of-max-value-in-array#:~:text=Get%20the%20max%20value%20in,the%20value%20is%20not%20found.
i didn't know how to sort an array which i needed to do before i found the median so i found help here https://www.w3schools.com/jsref/jsref_sort.asp
 i looked here to understand how to find the median https://masteringjs.io/tutorials/fundamentals/median */

function doMaths(numbers) {
  const arr = numbers;
  let sum = 0;

  // add numbers in the array together
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);

  // find the index of the max number in the array
  let theMax = Math.max(...numbers);
  let indexOfMax = numbers.indexOf(theMax);
  console.log(indexOfMax);

  // find the index of the min number in the array
  let theMin = Math.min(...numbers);
  let indexOfMin = numbers.indexOf(theMin);
  console.log(indexOfMin);

  // finding the average to 2 decimal places
  let average = sum / 10;
  let twoDecimals = +average.toFixed(2);
  console.log(twoDecimals);

  // sorting array from lowest to highest for the median
  const sort = numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(sort);

  // finding the median
  const midPoint = Math.floor(sort.length / 2);
  const median = (sort[midPoint - 1] + sort[midPoint]) / 2;
  console.log(median);
}

// calling the function on the array
doMaths(tenNumbers);
