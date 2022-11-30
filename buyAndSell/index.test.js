

//approach 1: exhaustive searching for the profit 
// O(n^2)

const maximumProfit = function(array) {
    let maxProfit = 0;
    for (let i=0 ; i<array.length;i++)
    {
      let j = array.length-1;

      while(i<=j)
      {
        let profit = array[j] - array[i];
        if (profit > maxProfit)
          maxProfit = profit;

        j--;
      }
    }

    return maxProfit;
};


//test cases 
let a = [100, 80, 120, 130, 70, 60, 100, 125];
console.log(maximumProfit(a))