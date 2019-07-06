// Translate the provided string to pig latin. Pig latin takes the first consonant or consonant cluster of an english word, moves it to the end of the word and suffices an 'ay'. If a word begins with a vowel you just add 'way' to the end. Input string will be english and lowercase.

function translatePigLatin (str) {
  let pigLatin = ''
  let regX = /[aeiou]/g
  
  if (str[0].match(regX)) {
    pigLatin = str + 'way'
    } else if (str.match(regX) === null {
      pigLatin = str + 'ay'
    } else {
      let vowelIndex = str.indexOf(str.match(regX)[0])
      
   pigLatin = str.substr(vowelIndex)+str.substr(0, vowelIndex) + 'ay'
   }
   
   return pigLatin
   }
   
   //Create empty string for storage
   //Make regular expression to vowel check
   //If string at 0 index matches a vowel add 'way' to the end
   //else if string doesn't match regX than add 'ay' to the end
   //else find the number of consonants before the first vowel
   //Then take the string from the first vowel to the last character. Add the consonants that were previously ommitted and add the ending.
   //Lastly, return the result
