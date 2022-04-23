// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = ["What is the title of this project?",
"What is this project's description?",
"How do you install this project?",
"What are your project's instructions for use?",
"license", // TODO
"What are the guidelines for contributing to this project?",
"How should this project be tested?",
"username",
"email",
"questions"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data.title);
    generateMarkdown(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: questions[0]
            },
            {
                type: "input",
                name: "description",
                message: questions[1]
            },
            {
                type: "input",
                name: "installation",
                message: questions[2]
            },
            {
                type: "input",
                name: "usage",
                message: questions[3]
            },
            {
                type: "list",
                name: "license",
                message: questions[4]
            },
            {
                type: "input",
                name: "contribute",
                message: questions[5]
            },
            {
                type: "input",
                name: "tests",
                message: questions[6]
            }
        ])
        .then((data) => writeToFile(data.title + ".md", data));
}

// Function call to initialize app
init();
