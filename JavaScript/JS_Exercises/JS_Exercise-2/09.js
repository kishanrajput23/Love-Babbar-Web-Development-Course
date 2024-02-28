function getPropertyValues(arr, propName) {
    let values = arr.map((obj) => obj[propName]);
    return values;
}

const people = [
    {name: "Kishan", age: 24, gender: "male", city: "New Delhi"},
    {name: "Rohit", age: 23, gender: "male", city: "Haryana"},
    {name: "Mohit", age: 25, gender: "male", city: "Gwalior"},
    {name: "Kritika", age: 24, gender: "female", city: "UP"},

];

console.log(getPropertyValues(people, "name"));
console.log(getPropertyValues(people, "age"));
console.log(getPropertyValues(people, "gender"));
console.log(getPropertyValues(people, "city"));