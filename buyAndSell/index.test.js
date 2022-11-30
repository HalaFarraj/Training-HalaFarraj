// approach 2 : find the min number, then find the max difference between it and each element
// Objective: Enhance the time complexity to be O(n)

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

const maximumProfit = function(array){
    // let minCost = Math.min.apply(Math,array);

    let minCost = getMinOfArray(array); // O(n)
    let indexOfMinCost = array.indexOf(minCost);
    let maxProfit =0;

    for (let i = indexOfMinCost; i<array.length;i++)
    {
      if (array[i]-minCost > maxProfit)
         maxProfit=array[i]-minCost ;
    }

    return maxProfit;
}


//test cases 
const a = [100, 80, 120, 130, 70, 60, 100, 125];
console.log(maximumProfit(a));

const b = [100, 80, 70, 65, 60, 55, 50];
console.log(maximumProfit(b));
