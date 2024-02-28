function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let a = createCounter();
console.log(a());       // prints 1
console.log(a());       // prints 2
console.log(a());       // prints 3
console.log(a());       // prints 4
console.log(a());       // prints 5
console.log(a());       // prints 6