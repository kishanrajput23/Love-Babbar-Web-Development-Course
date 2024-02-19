//Default Parameters
function interest(p, r=6, y=9) {
    return p*r*y/100;
}

console.log(interest(1000,undefined, 8));