function getStringArray(arr) {
    let str = [];

    for (let i=0; i<arr.length; i++) {
        if (arr[i].length > 5) {
            str.push(arr[i]);
        }
    }
    return str;
}

console.log(getStringArray(["apple", "banana", "mango", "watermelon", "muskmelon", "pineapple"]));
console.log(getStringArray(["cat", "horse", "giraffe", "elephant", "hippopotamus"]));
console.log(getStringArray([]));