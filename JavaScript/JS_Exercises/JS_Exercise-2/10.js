function findMaxByProperty(arr, prop) {
    if (arr.length == 0) {
        return null;
    }

    let maxObj = arr[0];

    for (let i=1; i<arr.length; i++) {
        if (arr[i][prop] > maxObj[prop]) {
            maxObj = arr[i];
        }
    }

    return maxObj;
}

// Test Case 1
let arr1 = [
    {name: "apple", price: 1},
    {name: "banana", price: 2},
    {name: "mango", price: 3}
];

console.log(findMaxByProperty(arr1, "price"));

// Test Case 2
let arr2 = [
    {name: "kishan", age: 24},
    {name: "mohit", age: 25},
    {name: "rohit", age: 23}
];

console.log(findMaxByProperty(arr2, "age"));

// Test Case 3
let arr3 = [];

console.log(findMaxByProperty(arr3, "age"));