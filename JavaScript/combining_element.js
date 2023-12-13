let first = [1,2,3];
let second = [4,5,6];

let combined1 = first.concat(second);
console.log(combined1);

let combined2 = [...first,'a', false, ...second ,'b', true];
console.log(combined2);