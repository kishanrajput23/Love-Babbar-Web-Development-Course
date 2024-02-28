function checkNumber(num) {
    if (num == 0) {
        return "zero";
    }
    else if (num > 0) {
        return "positive";
    }
    else {
        return "negative";
    }
}

console.log(checkNumber(0));
console.log(checkNumber(5));
console.log(checkNumber(-10));