const inquirer = require("inquirer");
const fs = requie("fs");

//User prompts for logo design parameters
function logoDesignPrompts() {
    inquirer
    .createPromptModule([
        
        //Characters *ONE TO THREE REQUIRED*
        {
        type: "input",
        name: "text",
        message: "Enter one to three characters for your logo:",
        validate: (input) => {
            const charLength = input.length <= 3;
            const charInput = input.trim() !== "";
            if (!charLength) {
                return "One to three characters are allowed. Enter characters for your logo:";
            }
            if (!charInput) {
                return "One to three characters are required. Enter characters for your logo:";
            }
            return true;
        },
        },

        //Font Color
        {
            type: "input",
            name: "fontColor",
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
    
 }

logoDesignPrompts();