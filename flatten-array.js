/**
 *  Given an array of n length, where each item in the array may be a letter,
 *  number or another array, write a function that will return a flattened
 *  array containing all the values in the original array and its children.
 * 
 * Ex.
 * 
 * var arr = [ 1, 'b', [ 'c', [ 4 ], 5], 'f'];
 * flatten(arr) === [1, 'b', 'c', 4, 5, 'f'];
 */

let arr = [ 1, 'b', [ 'c', [ 4 ], 5], 'f'];
console.log(flatten(arr));

function flatten(arr){
  var ans = [];
  
  for(let i in arr){
    if(Array.isArray(arr[i])){
      ans = ans.concat(flatten(arr[i]));
    }
    else{
      ans.push(arr[i]);
    }
  }
  return ans;
}
