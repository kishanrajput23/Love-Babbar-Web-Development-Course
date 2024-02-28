function sumTillN(num) {
    let sum = 0;
    for (let i=0; i<=num; i++) {
        sum += i;
    }
    return sum;
}

console.log("sum till 10 :", sumTillN(10));