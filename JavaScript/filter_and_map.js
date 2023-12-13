// using filter method
let numbers1 = [1,2,-1,-4];
console.log(numbers1);

let filtered =  numbers1.filter(value => value >= 0);

console.log(filtered);

// using map method
let numbers2 = [7,8,9,10];
console.log(numbers2);

let items1 = numbers2.map(value => 'student_no: ' + value);

console.log(items1);


// using filter and map method together
let numbers = [1,2,-6,-9];

let items = numbers.filter(value => value >= 0).map(num => {value: num});

console.log(items);





