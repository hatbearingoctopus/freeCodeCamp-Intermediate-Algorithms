// Return en english translated sentence of the passed binary string. The binary string will be space separated. 

function binaryAgent (str) {
  return str.split('').map(x => String.fromCharCode(parseInt(x, 2))).join('');
}

//Split string on the gap
//Use map to create new array and process each element from binary to decimal using parseInt
//Use String.fromCharCode to convert each ASCII number into the cooresponding character
//Lastly join elements back together

// map() - method creates a new array with the results of calling a function for every element.

// parseInt() - function parses a string and returns an integer. The radix parameter is used to specify which numeral system to be used.
