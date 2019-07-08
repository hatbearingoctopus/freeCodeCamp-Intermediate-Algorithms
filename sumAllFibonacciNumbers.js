// Given a positive integer (num), return the sum of all odd fibonacci numbers that are less than or equal to (num). The first two numbers //in the fibonacci sequence are 1 & 1. Every additional number in the sequence is the sum of the two previous numbers. ex: ,5
//112358. For example sumFibs(10) should return 10 because all odd fibonacci numbers less than or equal to 10 are 1,1,3.

function sunFibs(num) {
  Array.prototype.last = function () {
    return this[this.length -1];  
  };
  Array.prototype.secondToLast = function () {
    return this[this.length -2];
  };
  function sumFibs(num) {
    let sequence = [1,1];
    
   while(sequence.secondToLast() + sequence.last() <= num) {
     sequence.push(sequence.secondToLast() + sequence.last());
   }
   return sequence.filter(function(num) {
     return num % 2 !== 0;
   }).reduce(function(a,b) {
      return a + b;
   });
  }

  //Create method to get last number
  //Create method to get second to last number
  //create variable to hold result
  //If last 2 numbers added together are <= num, than add them and push 
  //Filter out odd numbers and reduce then
  
  // % remainder operator (modulus) - Returns division remainder
