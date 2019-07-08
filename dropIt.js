// Given the (arr), iterate through and remove each element starting from the frist element (the 0 index) until the (func) returns true when the iterated element is passed through it. Then return the rest of the array once the condition is satisfied, otherwise (arr) should be returned as an empty array. 

function dropElements (arr, func) {
  while (!func(arr[0])) {
    arr.shift();
  }
  return arr;
}

//While the (func) is false at the 0 index.
//Take the (arr) and shift everything left into a new 0 index. Do this until it's not false.
//Once it runs true, return the (arr)

//shift() - method removes the first element of an array. Opposite of pop ()
