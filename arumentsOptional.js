// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum. For ex: addTogether(2,3) should return 5 and addTogether(2) should return a function. Calling this returned function will then return the sum. If either argument isn't a valid number return undefined. 

function addTogether () {
  let params = [].slice.call(arguments);
  if(!params.every(function(param) {
    return typeof param === 'number';
    }))
    { return undefined;
}
  if (params.length === 2) {
    return params[0] + params[1];
    } else {
      let firstParam = params[0];
      let addOneMore = function (secondParam) {
        return addTogether(firstParam, secondParam);
        };
        return addOneMore;
        }
       }
       
       //Create array that slices arguments on each param.
       //Check if every param is a number by iterating through with a function and if it isn't return undefined.
       //If array has 2 values add them together.
       //Store first param.
       //Store a function that will take in the second param and using recursion call itself to add the values.
       //Return values of above.
