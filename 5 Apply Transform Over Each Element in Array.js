/*

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
fn returns a number

*/
//function map take input array and function
function map(arr, fn) {
  //list to store result
    let result = [];
    //for loop to iterate over length of array
    for (let i = 0; i < arr.length; i++) {
      //storing data in result list
        result.push(fn(arr[i], i));
      //returning result 
    } return result;
}

//plusOne
const arr1 = [1, 2, 3];
const plusOne = n => n + 1;
console.log(map(arr1, plusOne)); // [2, 3, 4]
//plusI
const arr2 = [1, 2, 3];
const plusI = (n, i) => n + i;
console.log(map(arr2, plusI)); // [1, 3, 5]
//constant
const arr3 = [10, 20, 30];
const constant = () => 42;
console.log(map(arr3, constant)); // [42, 42, 42]
