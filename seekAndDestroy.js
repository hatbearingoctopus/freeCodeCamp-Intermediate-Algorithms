// You will be provided with an initial array (the first argument in the destroyer function), follwed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. You have to use the arguments object. 

function destroyer (arr) {
  let args= Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
   });
  }
  
  //Declare variable args and set it to Array.from() with arguments passed into the function. 
  //Use slice on the second index (1) to separate the arguments into their own array.
  //Return and filter the array using includes() as the callback function test. This checks if (val) is not in (args); returning true to keep the value in the original array or false to remove it. 
  
  
