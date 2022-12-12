
// Time Complexity (before the enhancement) : Best Case-> O(n^2) , Worst Case-> O(n^2)
// Time Complexity (after the enhancement) : Best Case "Sorted"-> O(n)  , Worst Case "Random" -> O(n^2)

const bubbleSort = (array) => {
    

    //-----Enhancement: we don't need to loop over all the elements when the array is sorted--------

    // A counter to count the non-swaps
    // if counter == arrays elements then lets assume that the array is sorted

    let counter=1;  //starts with 1 because we suppose the first number is sorted 

    for (let i = 0; i<array.length;i++)
    {
        for (let j=0; j<array.length-1;j++)
        {
            
            if (array[j]>array[j+1])
            {
                let temp = array[j];
                array[j]=array[j+1];
                array[j+1] = temp;
            }
            else{
                counter+=1;
            }
        }
        if (counter == array.length)
        {
            break; // supposing that the array is sorted
        }
    }
};


//test cases 

let r = [2, -1, -3];
bubbleSort(r);
console.log(r);

let s = [1,2,3,4];
bubbleSort(s);
console.log(s);

let x = [2, 2, 2];
bubbleSort(x);
console.log(x);

let arr = [2, 1, 3];
bubbleSort(arr);
console.log(arr);


const a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
bubbleSort(a);
console.log(a);
