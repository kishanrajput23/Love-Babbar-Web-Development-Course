// for-in loop 

let rectangle = {
    length:2,
    breadth:4
};

for(let key in rectangle ) {
    //keys are reflected through key variable 
    //values are reflected through rectangle[key]
    console.log(key, rectangle[key]);
}

if ('length' in rectangle) {
    console.log('Present');
}
else {
    console.log('Absent');
}