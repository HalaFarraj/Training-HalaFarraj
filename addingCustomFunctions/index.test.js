/**
 * adding custom functions into native array
 * 1- sort function
 * 2- get first element
 * 3- get last element
 * 4- search for value
 */

//  TODO


//





// 1 - sort function

function sortArray(arr)
{
    // bubble sort O(n^2)
    for (let i=0; i < arr.length ; i++)
    {
        for (let j=0; j< arr.length-1 ; j++)
        {
            if (arr[j]>arr[j+1])
            {
                // swap 
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}




// 2- get first element 

function get_first(arr)
{
    return arr[0];
}


// 3- get last element 

function get_last(arr)
{
    return (arr[arr.length-1]);
}



// 4- search for value 

// --------linear search(n) -----------
function search(arr, value)
{
    
    for (let i =0 ; i < arr.length; i++)
    {
        if (arr[i] == value)
            return i;

    }
    // if value is not found return -1
    return -1;

}

// Tests 
let num = [5,4,3,2,1];

console.log("First element: " , get_first(num));
console.log("Last element: " ,get_last(num));
console.log("Found at: " ,search(num,8));

sortArray(num);

console.log(num);