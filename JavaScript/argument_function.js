function sum() {
    let total = 0;
    for(let value of arguments) 
        total = total + value;
    return total;
}

console.log(sum(1,2));      // prints 3
console.log(sum(1));      // prints 1
console.log(sum());      // prints 0
console.log(sum(1,2,3,4,5));      // prints 15

let ans = sum(1,2,2,3);
console.log(ans);      // prints 8