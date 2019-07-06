// Convert the characters &, <, >, ", ', in a string to their corresponding HTML entities.

 function convertHTML (str) {
  let converted = str.split('');
  
  for (i = 0; i < converted.length; i++) {
    switch (converted[i] {
      case '&':
      converted[i] = '&amp;';
      break;
      
      case '<':
      converted[i] = '&lt;';
      break;
      
      case '>':
      converted[i] = '&gt;';
      break;
      
      case '"':
      converted[i] = '&quot;';
      break;
      
      case "'":
      converted[i] = '&apos;';
      break;
      }
     }
     
     converted = converted.join('');
     return converted;
     
     //Declare variable and split the string
     //Use switch statements to convert each character
     //Re-join converted characters
     //Return the result
      
      
