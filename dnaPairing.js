// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a second array. Base pairs are a pair of AT and CG. Match the missing element to the provided character.

function pairElement (str) {
  let pairArray = [];
  
  let findPairs = function (char) {
    switch (char) {
      case 'A':
      pairArray.push(['A', 'T']);
      break; 
      
      case 'T':
      pairArray.push(['T', 'A']);
      break;
      
      case 'C':
      pairArray.push(['C', 'G']);
      break;
      
      case 'G':
      pairArray.push(['G', 'C']);
      break;
      
      for (let i = 0; i < str.length; i++) {
        search (str[i]);
        }
        
       return pairArray;
       
       //Declare empty array to store result
       //Create findPairs function to store all the switches
       //Iterate through the str, use search to push right values to array
       //Return result
