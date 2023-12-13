// Type 1 --> primitives or values types
// in this type copy of data is created that's why there will be no changes in other variale

let a = 10;
let b = a;
a++;
console.log(a);
console.log(b);


// using function
let p = 10;

function inc(p) {
    p++;
}

inc(p);
console.log(p);

// Type 2 --> reference types or objects
// in this type reference is passes so there will be change refelect in other varibale if orginal get change

let x = { value: 10};
let y = x;

x.value++;

console.log(x.value);
console.log(y.value);


// using function
let q = {value:10};

function inc(q) {
    q.value++;
}

inc(q);
console.log(q.value);
