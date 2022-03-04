// Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path")

// create an array of questions for user input
    // to do: add questions here, then pass the array to the inquirer.prompt in the init function
const questions = [
    {
        type:'input',
        name: 'projecttitle',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
        {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
        {
        type: 'input',
        name: 'projectdescription',
        message: 'What is your project?'
    },
        {
        type: 'list',
        name: 'license',
        message: 'What license does the project use?',
        choices: ["MIT", "Apache", "none"]
    }
    //install instructions
    //features
    //
];

// define a function to convert inquirer answers to markdown
function createTemplate(data) {
    console.log(data);
    var template = 
        `
        #${data.projecttitle}
        ##${data.email}
        ##${data.github}
        ##${data.projectdescription}
    `
    return template // the template finished
}

// define a function to write README file
function writeToFile(fileName, data) {

    console.log(fileName, data, process.cwd());
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}

// define a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(answers => writeToFile("README.md", createTemplate(answers)))
};

// call the function to initialize app
init()
