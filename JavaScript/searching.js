// searching in array
let numbers = [1,4,5,7];
console.log(numbers);

console.log(numbers.indexOf(9));        // gives -1 as 9 not present in array

// if we want to check if a number exist in an array

if( numbers.indexOf(4) != -1) 
    console.log("present");

console.log(numbers.includes(7));   // return true

console.log(numbers.indexOf(4, 2));     // return -1 as index of element 4 is 1 not 2


let courses = [
    {no:1, naam:'Love'},
    {no:2, naam:'Rahul'}
];

console.log(courses);

console.log(courses.includes( {no:1, naam:'Love'} ) );     // returns false as includes works only on primitve data types not on objects

let course =  courses.find(course => course.naam === 'Kilvish');

console.log(course);

let result = function(course) {
    return course.naam === 'Love';
}

console.log(result);