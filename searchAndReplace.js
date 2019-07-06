//Perform a search and replace on the sentence using the arguments provided and return the new sentence. First argument is the sentence to preform the search and replace on. Second is the sentence argument is the word you will be replacing. Third argument is what you will be replacing it with. Preserve the case of the first character in the original word when you are replacing.

function myReplace (str, before, after) {
  let index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
   }
   str = str.replace(before, after);
   
   return str;
  }
  
  //Find index where (before) is on  string.
  //Check to see if the first letter is uppercase or not.
  //Change (after) word to be capitalized before we use it.
  //Replace original str with the edited one and return the str. 
  
  //charAt() method- returns the character at the specified index in a string. The index of the first character is 0, the second is 1, etc. The index of the last character in a string is string.length -1, second to last is string.length -2, etc.
