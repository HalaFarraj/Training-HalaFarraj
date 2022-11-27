/**
 * Given a single input string, wribbte a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */



const allAnagrams = function(string) {

  // this is the stop case of the recurion
  if (string.length == 1)
  return string;

  let anagrams = [];
  for (let i=0; i<string.length; i++)
  {
    let firstChar = string[i];

    if (string.indexOf(firstChar)== i)
    {
      let remainingLetters = string.slice(0,i) + string.slice(i+1,string.length);

      for (var subPermutation of allAnagrams(remainingLetters))
        anagrams.push(firstChar + subPermutation)
    }
    else 
      continue;
  
  }

  return anagrams;

};

var anagrams = allAnagrams('abcd');
console.log(anagrams);