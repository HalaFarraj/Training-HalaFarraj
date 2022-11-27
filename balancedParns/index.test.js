/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *	"())"
 */


function peek(items)
{
  // return the top most element from the stack
// but does'nt delete it.
   return items[items.length - 1];
}

function balancedParens(input) {
  let openings = "('[{";
  let closings = ")']}";

  let bracketsStack =[];

  for (let i=0; i<input.length;i++)
  {
    let character  = input[i];

    // skip the non-brackets characters 
    if (openings.indexOf(character)==-1 && closings.indexOf(character)==-1)
      continue;

    // if it's an opening bracket    
    if (openings.indexOf(character )>-1)
    {
      // push it to the brackets Stack
      bracketsStack.push(character );
    }
    // if it's not (it's a closing bracket)
    else{
      //check if the last element in the stack is the opening bracket of it
      if (openings.indexOf(peek(bracketsStack))== closings.indexOf(character))
      {
        // if it is, remove if from the stack 
        bracketsStack.pop();
      }
      
    }

  }

  // if brackets stack is Empty, then the brackets are closed correctly
  // otherwise, they're closed wrongly. Hence, return false
    return (bracketsStack.length==0)? true : false;
}


// test case 
let input = "var wow  = { yo: thisIsAwesome() }";
console.log(balancedParens(input));
