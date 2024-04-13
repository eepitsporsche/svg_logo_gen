//Required Node Modules
const inquirer = require("inquirer");
const fs = require("fs");

//Import shape classes from shapes.js
const { Circle, Triangle, Square } = require("./lib/shapes");

//User prompts for logo design parameters
function logoDesignPrompts() {
    inquirer
    .prompt([
        
        //Characters *ONE TO THREE REQUIRED*
        {
        type: "input",
        name: "text",
        message: "Enter one to three characters for your logo:",
        validate: (input) => {
            const textLength = input.length <= 3;
            const textInput = input.trim() !== "";
            if (!textLength) {
                return "One to three characters are allowed. Enter characters for your logo:";
            }
            if (!textInput) {
                return "One to three characters are required. Enter characters for your logo:";
            }
            return true;
        },
        },

        //Font Color
        {
            type: "input",
            name: "textColor",
            message: "Enter the color name or hexadecimal number for your logo's characters:",
        },

        //Shape
        {
            type: "list",
            name: "shape",
            message: "Select a shape for your logo:",
            choices: ["Circle", "Triangle", "Square"],
        },

        //Shape Color
        {
            type: "input",
            name: "shapeColor",
            message: "Enter the color name or hexadecimal number for your logo:"
        },
    ])

    //Promise to save user input
    .then((answers) => {
    saveUserInput("logo.svg", answers)
    });
}

//Saves user input
 function saveUserInput(fileName, answers) {
    //Create empty string for generated logo
    let svgCode = "";

    //Define SVG dimensions
    svgCode = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    //Group tag to bind logo characters and shape together
    svgCode += '<g>';

    //Apply shape selected by user
    svgCode += `${answers.shape}`;

    //Define shape parameters for circle, triangle, and square options
    let shapeSelected;
    if (answers.shape === "Circle") {
        shapeSelected = new Circle();
        //Apply circle rendering parameters
        svgCode += `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/>`;
        //Apply text selected by user
        svgCode += `<text x="150" y="115" text-anchor="middle" font-size="50" fill="${answers.textColor}">${answers.text}</text>`;
    } else 
    if (answers.shape === "Triangle") {
        shapeSelected = new Triangle();
        //Apply triangle rendering parameters
        svgCode += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
        //Apply text selected by user
        svgCode += `<text x="150" y="160" text-anchor="middle" font-size="50" fill="${answers.textColor}">${answers.text}</text>`;
    } else {
            shapeSelected = new Square();
            //Apply square rendering parameters
            svgCode += `<rect x="50" y="50" width="175" height="175" fill="${answers.shapeColor}"/>`;
            //Apply text selected by user
            svgCode += `<text x="140" y="140" text-anchor="middle" font-size="50" fill="${answers.textColor}">${answers.text}</text>`;
    }



    //Closing tags for SVG code
    svgCode += '</g>';
    svgCode += '</svg>';

    //Write generated SVG code to new svg file
    fs.writeFile(fileName, svgCode, (err) => {
        //Ternary operator to either log an error or produce success message in the terminal
        err ? console.log(err) : console.log("New SVG logo has been created.")
    })
    }

//Function call to intialize app:
logoDesignPrompts();