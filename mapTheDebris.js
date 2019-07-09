// Return a new array that transforms the elements average altitude into their orbital periods (in seconds). The array will contain objects in the format: {name: 'name', avgAlt: avgAlt}. Values should be rounded to the nearst whole number. The body being orbited is earth. The radius of earth is 6367.4447 km, and the GM value of earth is 398600.4418 km3s-2. Read about orbital periods on eikipedia.

function orbitalPeriod (arr) {
  let GM = 398600.4418; 
  let earthRadius = 6367.4447;
  
  return arr.reduce(function(acc, obj) {
    let orbPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3)/GM));
    
    acc.push({name: obj.name, orbitalPeriod: orbPeriod});
    
    return acc;
    },[]);
   }
   
   //Use built in Math methods to complete the orbital equation, round the whole thing and reduce.
   //Push onto acc the obj name and orbPeriod
   //Return the accumulator
   
  
