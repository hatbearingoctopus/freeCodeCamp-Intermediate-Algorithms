// Check if the (pre) is truthy on all elements of (collection). In other words you are given an array (collection) of objects. The predicate (pre) will be an object property and you need to return true if its value is truthy. Otherwise return false. In JS truthy values are values that translate to true when evaluated in a boolean context. Remember, you can access object properties through dot/bracket notation.

function truthCheck (collection, pre) {
  let caseCounter = 0;
  for (let i in collection) {
    if(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
      caseCounter ++;
    }
  }
  return caseCounter === collection.length;
}

//Create a counter to check how many are true
//Check each object
//If it has property and the value is truthy...
//Return caseCounter with the full length of collection

// hasOwnProperty() - method returns a boolean indicating whether the object has the specified property as its own property.
