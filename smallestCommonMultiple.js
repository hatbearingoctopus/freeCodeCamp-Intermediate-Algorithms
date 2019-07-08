// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as all sequential numbers in the range between these parameters. The range will be an array of two numbers that can be in any order. For ex: given (1,3) find the smallest common multiple of both 1 & 3 that's also divisible by all numbers between 1 & 3. Answer is 6.

function smallestCommons (arr) {
  arr.sort(a,b) => a > b ? 1 : -1
  let[div, num] = arr
  
  while (div < arr[1]) {
    if (num % div === 0) {
      div ++
    } else {
      num += arr[1]
      div = arr[0]
    }
  }
  return num;
}

//Sort the array to get the numbers in numerical order
//Create variables for each number given
//As long as div is < arr[1] we want to run the loop 
//If remainder is equal to 0 then increment div by 1 and check the next number 
//Once a false is reached that increment num one above arr[1]
//Return result
