/*
The following iterative sequence is defined for the set of positive integers:
n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million.
*/

/**
 * Wiki link
 * https://en.wikipedia.org/wiki/Collatz_conjecture
 */

/**
 * What is the time complexity for your solution ?
 */

/**
 * Write the unit tests that cover your solution
 */

let longestChainLength=0 ;
let numberOfLongestChain=0; 

function collatzSeq(number) {
    let remainder = number;
    let chainArray = [];
    chainArray.push(remainder);
    while (remainder != 1)
    {
        if((remainder%2)==0)
        {  // if it's even
            remainder = remainder /2; 
        }
        else{ // if it's odd
            remainder = (3*remainder)+1;
        }
        chainArray.push(remainder);
    }
    // if(chainArray.length >longestChainLength)
    // {
    //     longestChainLength=chainArray.length;
    //     numberOfLongestChain = number;
    // }
    return chainArray;
    // return numberOfLongestChain;
}
// module.exports=collatzSeq;

console.log(collatzSeq(10));
console.log(collatzSeq(11));