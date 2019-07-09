// Fill in the object constructor with the following methods below: getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)

// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object. 

let Person = function(firstAndLast) {
  let array = firstAndLast.split('');
  this.getFirstName = function () {
    return array[0];
  };
  this.getLastName = function () {
    return array[1];
  };
  this.getFullName = function () {
    return array[0] + "" + array[1];
  };
  this.setFirstName = function(first) {
    array[0] = first;
  };
  this.setLastName = function(last) {
    array[1] = last;
  };
  this.setFullName = function(firstAndLast) {
    let splitArray = firstAndLast.split('');
    this.setFirstName(splitArray[0]);
    this.setLastName(splitArray[1]);
    };
  }
  
  //Create variable that makes a copy of the full name passed.
  //Create the six methods needed and return what was asked for.
