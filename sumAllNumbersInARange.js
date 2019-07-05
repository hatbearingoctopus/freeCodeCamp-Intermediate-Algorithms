// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first. 

function sumAll (arr) {
  let sortedArray = arr.sort((a,b) => a-b);
  let firstNumber = arr[0];
  let lastNumber = arr[1];
  
  let sum = (lastNumber - firstNumber + 1)*(firstNumber + lastNumber)/;
    return sum;
}

//Sort the array from smallest to largest using ES6 arrow functions
//Set firstNumber equal to the first number
//Set lastNumber equal to the last number
//Use newly declared variables and the arithmetic progression summing formula and then return the sum.

//ARITHMETIC PROGRESSION
//SUM- The sum of the members of a finites progression is called an arithetic series. ex: 2+5+8+11+14 The sum can be found quickly by taking the number (n) of terms being added and multiplying by the sum of the first and last number in the progression. 

//    n(a1 + a2)/2
