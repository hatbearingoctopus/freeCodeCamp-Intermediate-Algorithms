// Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined. 

function fearNotLetter (str) {
  let numbers = str.split('').map(function (letter) {
    return letter.charCodeAt();
   });
   
   for (let i = 0; i < numbers.length; i ++) {
    if (numbers[i + 1] - numbers[i] > 1) {
      return string.charCode(numbers[i] + 1);
      }
    } 
    return undefined;
    }
    
    //Create variable, split each character, use map to create new arrray, return the letter as an integer.
    //Iterate through to find the gap.
    //If a gap is found, return the integer translated to a letter. 
    //If no gap is found, return undefined. 
    
    
    //String.fromCharCode() - method converts unicode values into characters.
    
    //charCodeAt() - method returns the unicode of the character at the specified index in a string. 
