/*
Iterative Binary Search Algorithm
Divide and Conquer - Can only be used on SORTED arrays

Complexity:
Each iteration will cut the array in half logarithmically.
O(log n)
*/


function binarySearch(array, target){
  let start = 0;
  let end = array.length - 1;
  
  while(start <= end)
    {
      //Define middle each iteration.
      middle = Math.floor((start + end)/2);
      
      //If we find it, return it's index
      if(array[middle] == target) return console.log("here: " + middle);
      
      //If the middle is larger than the target, set the end to the middle.
      if(array[middle] > target) end = middle - 1;
      
      //If the middle is smaller than the target, set the start to the middle.
      if(array[middle] < target) start = middle + 1;
    }
}


array = [1,2,3];
binarySearch(array, 3)
