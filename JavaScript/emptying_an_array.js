// ways to empty an array

// #1 by using splice method
let numbers1 = [1,2,3,4,5];
let numbers2 = numbers1;

numbers1.splice(0 ,numbers1.length);
console.log(numbers1);
console.log(numbers2);

// #2 by doing length equal to zero
let numbers3 = [1,2,3,4,5];
numbers3.length = 0;
console.log(numbers3);

// #3 by using pop method
let numbers4 = [1,2,3,4,5];
while (numbers4.length > 0) {
    numbers4.pop();
}
console.log(numbers4);
