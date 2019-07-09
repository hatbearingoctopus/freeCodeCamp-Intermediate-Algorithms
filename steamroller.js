// Flatten a nested array. You must account for various levels of nesting. ex: [[1], [[[2]], [3]] should return [1,2,3]. Use recursion or another way to go beyond two level arrays. Check if an element is an array or not. 

function steamrollArray (arr) {
  let result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(steamrollArray(item));
      } else {
        result.push(item);
       }
     })
     return result;
}

//Create an empty array to house result.
//Use forEach and recursion to check each item to see if it's an array.
//If it's an array, push the item into result.
//Return result.

// Array.isArray() - method determines whether an object is an array. The function returns true if the object is an array, false if not. 
