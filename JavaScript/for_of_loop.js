// for-of loop
// it works ony in iterbles like arrays, maps, etc.

let rectangle = {
    length:2,
    breadth:4
};

for(let key of Object.entries(rectangle)) {
    console.log(key);
}

let arr = [10,20,30,40,50];

for (let value of arr) {
    console.log(value);
}