//Shapes class produces shape selected by user in the color selected by user
class Shapes {
    constructor() {
        //Shape color initialized as an empty string
        this.color = "";
    }
    //Function to assign shape color
    setColor(shapeColor) {
        this.color = shapeColor;
    }
}

//Circle class extends the Shapes class to render the shape in color selected by the user
class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}
//Triangle class extends the Shapes class to render the shape in color selected by the user
class Triangle extends Shapes {
    render() {
        return `<polygon "points=" 150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
//Square class extends the Shapes class to render the shape in color selected by the user
class Square extends Shapes {
    render() {
        return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
}

//Export the shape classes
module.exports = { Circle, Triangle, Square }