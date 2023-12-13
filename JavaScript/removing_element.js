// ways to remove elements in the array

//  remove element from the end (pop method)
let numbers1 = [1,4,5,7];
numbers1.pop();
console.log(numbers1);

//  remove element from the start (shift mehtod)
let numbers2 = [1,4,5,7];
numbers2.shift();
console.log(numbers2);

//  remove element at the middle (splice mehtod)
let numbers3 = [1,4,5,7];
numbers3.splice(2, 1);
// In this code, the splice() method is called on the numbers array, starting at index 2, and the count of how many numbers we want to remove that is 1. The result is the modified array [ 1, 4, 7 ].
console.log(numbers3);