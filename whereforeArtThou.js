// Make a function that looks through an array of objects (first argument) and returns an array of objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array. 

function whatIsInAName (collection, source) {
  let result = collection.filter(function(check) {
    for(let i in source) {
      if(source[i] != check[i]) {
        return false;
        }
      }
      return true;
    });
     return result;
  }
  
  //declare a place to store the result
  //filter through the collection 
  //If source[i] doesn't equal check[i] then return false, otherwise return true
  //Return result
  
