// TODO: Include packages needed for this application
const license = ["MIT", "GPLv2", "GPLv3", "Apache"]
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "enter the project title:"
    },
    {
        type: "input",
        name: "description",
        message: "enter a description:"
    },
    {
        type: "input",
        name: "Table of Contents",
        message: "enter the table of contents:"
    },
    {
        type: "input",
        name: "install",
        message: "enter installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "enter the information on how to use this readme:"
    },
    {
        type: "input",
        name: "license:",
        message: "enter project license:"
    },
    {
        type: "input",
        name: "contributing guidelines",
        message: "enter contribution guidelines:"
    },
    {
        type: "input",
        name: "test instructions",
        message: "enter test instructions:"
    },
    {
        type: "input",
        name: "questions",
        message: "enter username and email:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = "./README.md";
}

// TODO: Create a function to initialize app
function init() {
    writeToFile(generateMarkdown);
}

// Function call to initialize app
init();