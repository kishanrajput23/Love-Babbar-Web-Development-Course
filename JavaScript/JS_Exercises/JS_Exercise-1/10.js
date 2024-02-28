function getCommonElements(arr1, arr2) {
    let arr = [];
    for (let i=0; i<arr1.length; i++) {
        for (let j=0; j<arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                if (!arr.includes(arr1[i])) {
                    arr.push(arr1[i]);
                }
            }
        }
    }
    return arr.sort((a, b) => a - b);
}

let arr1 = [1, 2, 3, 10, 4, 5, 2];
let arr2 = [3, 4, 5, 10, 6, 7, 3];
console.log(getCommonElements(arr1, arr2));