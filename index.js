// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const content = require("./develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ["What is the title of this project?",
"What is this project's description?",
"How do you install this project?",
"What are your project's instructions for use?",
"license", // TODO
"What are the guidelines for contributing to this project?",
"How should this project be tested?",
"Please enter your GitHub username:",
"Please enter your email address:"];

// Create a function to write README file
function writeToFile(fileName, data) {
    var text = content.generateMarkdown(data);
    // file path added for sample README
    fs.writeFile("sample-README/" + fileName, text, (err) =>
        err ? console.log(err) : console.log("success")
    );
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
                message: questions[4],
                choices: ["one", "two", "three"]
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
            },
            {
                type: "input",
                name: "github",
                message: questions[7]
            },
            {
                type: "input",
                name: "email",
                message: questions[8]
            }
        ])
        .then((data) => writeToFile("README.md", data));
}

// Function call to initialize app
init();
