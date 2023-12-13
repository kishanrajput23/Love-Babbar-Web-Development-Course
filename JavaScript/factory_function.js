// factory function 
// function name should be in camel case

function createRectangle(len, bre) {
    const rectangle = {
        length: len,
        breadth:bre ,

        draw() {
            console.log('drawing rectangle');
        }
    };
    return rectangle;
}

//object creation using factory function
let rectangle1 = createRectangle(5, 4);
console.log(rectangle1);

let rectangle2 = createRectangle(2,3);
console.log(rectangle2);

let rectangle3 = createRectangle(7,9);
console.log(rectangle3);