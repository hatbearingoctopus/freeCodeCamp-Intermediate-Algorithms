// Write a function that takes two or more arrays and return a new array of unique values in the order of the original provided arrays. In other words all values present from all arrays should be included in their original order, but with no duplicates in the final array. The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order. 

function uniteUnique (arr) {
  for (let i = 0; i < arguments.length; i++) {
    for (let x = 0; x < arguments[i].length; i++) {
      if (arr.indexOf (arguments[i][x] === -1) {
        arr.push (arguments[i][x]);
        }
       }
      }
      return arr;
      }
      
      //Use arguments object. Iterate through the arguments object.
      //Iterate through the current index valuse of arguments.
      //If array contains value of arguments. It returns -1 if it does not. 
      //Push values into array
      //Return array

      
      //ARGUMENTS OBJECT - The arguments object contains an array of the arguments used when the function was called.
      
