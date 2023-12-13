// object cloning #1 (using iteration)

let src1 = {
    a:10,
    b:20,
    c:30
};

let dest1 = {};

for (let key in src1) {
    dest1[key] = src1[key];
}

console.log(dest1);
src1.a++;
console.log(dest1);

// Object Cloning #2 (using assign)

let src2 = {
    a:10,
    b:20,
    c:30
};

let srcc = {value: 25};

let dest2 = Object.assign({}, srcc, src2);


console.log(dest2);
src2.a++;
console.log(dest2);

// Object Cloning #3 (using spread)

let src3 = {
    a: 10,
    b:20,
    c:30
};

let dest3 = {...src3};

console.log(dest3);
src3.a++;
console.log(dest3);