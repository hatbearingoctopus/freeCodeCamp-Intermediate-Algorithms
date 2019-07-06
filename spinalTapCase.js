// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes

function spinalCase (str) {
  let regX = /\s+|_+/g;
  
  str = str.replace(/([a-z])([A-Z])?g, '$1 $2');
  
  return str.replace(regX, '_').toLowerCase();
  }
  
  //Create a variable for the gaps and _
  //Use replace to add a space before any uppercase so that the spaces can be replaced with -
  //Return the string while replacing the spaces with -
  
  //Used regular expressions
