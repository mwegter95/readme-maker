// Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// create an array of questions for user input
    // to do: add questions here, then pass the array to the inquirer.prompt in the init function
const questions = [];

// define a function to write README file
function writeToFile(fileName, data) {}

// define a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type:'input',
            name: 'project-title',
            message: 'What is the title of your project?'
        }
    ])
};

// call the function to initialize app
init()
    .then(answers => console.log(answers));
