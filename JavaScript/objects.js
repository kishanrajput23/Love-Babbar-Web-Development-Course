//object create

let rectangle = {
    length: 1,
    breadth: 2,

    draw: function() {
        console.log('drawing rectangle');
    }
};
console.log(rectangle.length);
console.log(rectangle.breadth);
rectangle.draw();
console.log(rectangle);


rectangle['color'] = 'blue';
console.log(rectangle);

delete rectangle['color'];
console.log(rectangle);