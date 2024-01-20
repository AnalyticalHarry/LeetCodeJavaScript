/*
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.
*/

function expect(data) {
    return {
        toBe: function(expected) {
            if (data !== expected) {
                throw new Error("Not Equal");
            }
            //return the result directly
            return true; 
        },
        notToBe: function(expected) {
            if (data === expected) {
                throw new Error("Equal");
            }
            //return the result directly
            return true; 
        }
    };
}

try {
    const result1 = expect(5).toBe(5);
    console.log(result1); 
} catch (error) {
    //handle error
    console.log({ error: error.message }); 
}

try {
    const result2 = expect(5).toBe(null);
    //this won't be reached due to the error
    console.log(result2); 
} catch (error) {
    console.log({ error: error.message }); 
}

try {
    const result3 = expect(5).notToBe(null);
    console.log(result3); 
} catch (error) {
    //this won't be reached due to the successful check
    console.log({ error: error.message }); 
}
