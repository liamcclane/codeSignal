// Lia McClane

// These are algorthim probelms taken off of CodeSignal.com designed to help
// students and experts keep up on all levels of algos


// CodeSignal
// Level 2 : Edge of the Ocean

// Given an array of integers, find the pair of adjacent elements that
// has the largest product and return that product.
function adjacentElementsProduct(inputArray) {

  var max = inputArray[0] * inputArray[1];  // initalizing a max to compare though out the for loop

  for (var i = 1; i < inputArray.length - 1; i++) {

    if (inputArray[i] * inputArray[i + 1] > max) {

      max = inputArray[i] * inputArray[i + 1];

    }

  }

  return max;
}
console.log('adjaentElementsProducts([3,6,-2,-5,7,3]) returns ' + adjacentElementsProduct([3, 6, -2, -5, 7, 3]))

// this algorithm has a visual attached inside the folder to show what is happening for various n's
function shapeArea(n) {
  
  let a = 1; // the base case

  if (n > 1) {
    a = 2 * (n - 1) * n + 1; // math using addtion of the rows of squares and then polynonial math to simplify
  }

  return a;
}


// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
// each statue having an non-negative integer size. Since he likes to make things perfect, 
// he wants to arrange them from smallest to largest so that each statue will be bigger 
// than the previous one exactly by 1. He may need some additional statues to be able to 
// accomplish that. Help him figure out the minimum number of additional statues needed.
let x = [2, 5, 6, 8, 1, 3]
console.log(makeArrayConsecutive2(x));
function makeArrayConsecutive2(x) {
  
  let min = statues[0], max = statues[0]; // initalizing max and min
  
  for (num of statues) {
  
    if (num > max) {
      max = num
    }
    if (num < min) {
      min = num
    }
  
  }
  
  distance = max - min + 1
  result = distance - statues.length
  return distance - statues.length

}


// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence 
// by removing no more than one element from the array.
// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. 
// Sequence containing only one element is also considered to be strictly increasing.
function almostStrictlyIncreasing(arr) {

  let hasRemove = false;
  let curr = arr[0]; // creating a pointer to compare three elements at a time

  for (let i = 1; i < arr.length; i++) { // one for loop makes it O(n)

    if (curr < arr[i]) { // we want to always be storing the smallest of the 3 elements we are looking at
      curr = arr[i];
    }
    else {

      if (hasRemove) {
        return false;
      }
      if (i < 2) { //edge case
        curr = arr[i]
      } else {
        curr = arr[i] <= arr[i - 2] ? curr : arr[i];
        // console.log(curr);
      }
      hasRemove = true;
    }
  }
  return true;
}

console.log(almostStrictlyIncreasing(x));
console.log(almostStrictlyIncreasing([1, 2, 1, 2]));
console.log(almostStrictlyIncreasing([5, 1, 2, 3]));
console.log(almostStrictlyIncreasing([5, 7, 10, 6, 9]));
