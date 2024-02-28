function reverseString(str) {
    let reversed = str.split("").reverse().join("");
    return reversed;
}

console.log("original string : LeetCode");
console.log("reverse string :", reverseString("LeetCode"));