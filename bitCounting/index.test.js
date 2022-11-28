
// step1 : decimal to binary conversion 
// step2: count the '1's 

//O(n)
function decimal2binary(num)
{
  let result = num; 
  let remainder =0; 
  let binaryRep = "";

  while (result!=0)
  {
    remainder = result % 2;
    result = Math.floor(result/2);
    binaryRep= remainder+binaryRep;
  }

  return binaryRep;

}


// O(n)
const bitCounting = (num) => {
  
  let binaryRepresentation = decimal2binary(num);

  // to test the representation 
  // console.log(binaryRepresentation);

  let counter = 0;
  for(let i=0; i<binaryRepresentation.length;i++)
  {
    if (binaryRepresentation[i]==1)
      counter++;
  }

  return counter;

};

// test 
console.log(bitCounting(157));