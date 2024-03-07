function convertToRoman(num) {
  const values =  
	  [1000, 900, 500, 400, 100,  
	   90, 50, 40, 10, 9, 5, 4, 1]; 
  const symbols =  
	  ['M', 'CM', 'D', 'CD', 'C',  
	   'XC', 'L', 'XL', 'X', 'IX',  
	   'V', 'IV', 'I']; 
  let result = ''; 

  for (let i = 0; i < values.length; i++) { 
	  while (num >= values[i]) { 
		  result += symbols[i]; 
		  num -= values[i]; 
	  } 
  } 

  return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

//console.log(convertToRoman(36));

// do not edit below this line
module.exports = convertToRoman
