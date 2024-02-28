function keyArray(obj) {
    let keys = Object.keys(obj);
    return keys;
}

const person = {
    name: "kishan",
    age: 24,
    gender: "male",
    city: "New Delhi"
};

console.log(keyArray(person));