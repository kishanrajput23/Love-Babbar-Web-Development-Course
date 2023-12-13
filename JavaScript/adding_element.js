// ways to add elements in the array

//  add element at the end (push method)

let numbers1 = [1,4,5,7];
numbers1.push(10);
console.log(numbers1);

//  add element at the start (unshift mehtod)

let numbers2 = [1,4,5,7];
numbers2.unshift(10);
console.log(numbers2);


//  add element at the middle (splice mehtod)

let numbers3 = [1,4,5,7];
numbers3.splice(1, 0, 11);
// In this code, the splice() method is called on the numbers array, starting at index 1, with a deleteCount of 0. You then add the new element 11 to the array at the start index. The result is the modified array [ 1, 11, 4, 5, 7 ].
console.log(numbers3);