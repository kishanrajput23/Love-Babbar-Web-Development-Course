// constructor function

// function name should be in pascal case

function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function() {
        console.log('drawing');
    }
}
console.log(Rectangle);

//object creation using constrcutor function
let rectangleObject = new Rectangle(4,6);
console.log(rectangleObject);

// adding new property
rectangleObject.color = 'yellow';
console.log(rectangleObject);

// deleting existing property
delete rectangleObject.color;
console.log(rectangleObject);

// below is the code to showcase how constructor functio actually work

let Rectangle1 = new Function('length', 'breadth',
    `this.length = length;
    this.breadth = breadth;
    this.draw= function() {
        console.log('drawing');
    }`
);

//object creation using Rectangle1
let rect = new Rectangle1(2,3);
console.log(rect);