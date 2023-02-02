// TODO: Include packages needed for this application
const license = ["MIT", "GPLv2", "GPLv3", "Apache"]
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require ("fs")



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
        name: "install",
        message: "enter installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "enter the information on how to use this readme:"
    },
    {
        type: "list",
        name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: "input",
        name: "contributing_guidelines",
        message: "enter contribution guidelines:"
    },
    {
        type: "input",
        name: "test_instructions",
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

}

// TODO: Create a function to initialize app
function init() {
    askQuest()
    // writeToFile(generateMarkdown);
}

function askQuest() {
    inquirer.prompt(questions)
        .then((response) => {
            generateMarkdown(response)
            fs.writeFileSync("README.md", generateMarkdown(response))
        })
}

// Function call to initialize app
init();