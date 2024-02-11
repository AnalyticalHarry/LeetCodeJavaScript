/*
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
Example 3:

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out
 
Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
*/

//function filter, which take two input array and function
function filter(arr, fn) {
  //empty list, result
    let result = [];
  //for loop to iterate over length of array
    for (let i = 0; i < arr.length; i++) {
      //control flow statement for function
        if (fn(arr[i], i)) {
          //storing iterated data into array
            result.push(arr[i]);
        }
    }
  //return result
    return result;
}
//greaterThan10
const arr1 = [0, 10, 20, 30];
const greaterThan10 = n => n > 10;
console.log(filter(arr1, greaterThan10)); // [20, 30]
//firstIndex
const arr2 = [1, 2, 3];
const firstIndex = (n, i) => i === 0;
console.log(filter(arr2, firstIndex)); // [1]
//plusOne
const arr3 = [-2, -1, 0, 1, 2];
const plusOne = n => n + 1;
console.log(filter(arr3, plusOne)); // [-2, 0, 1, 2]
