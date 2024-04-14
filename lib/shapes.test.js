//Import shape classes from shapes.js
const { Circle, Triangle, Square } = require("./shapes.js");


//Circle render test with color blue
describe("Circle test", () => {
    it("should render a circle with a blue fill color", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />')
    })
});


//Triangle render test with color yellow
describe("Triangle test", () => {
    it("should render a triangle with a yellow fill color", () => {
        const shape = new Triangle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<polygon "points=" 150, 18 244, 182 56, 182" fill="yellow" />')
    })
});

//Square render test with color green
describe("Square test", () => {
    it("should render a square with a green fill color", () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="green" />')
    })
});