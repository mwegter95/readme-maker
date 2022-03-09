// Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path")

// create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'projecttitle',
        message: 'What is the title of your project?',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a title!")
                return false;
            };
        }
    },
        {
        type: 'input',
        name: 'projectdescription',
        message: 'Please provide text for a description section for your project'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email!")
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username!")
                return false;
            };
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does the project use?',
        choices: ["MIT", "Apache License 2.0", "GNU_GPLv3", "none"]
    },
    {
        type: 'input',
        name: 'install',
        message: 'How does a user install your project? If no instruction, hit enter and install instructions will be left blank.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions, for example, how to start your app, then how to use.'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter any contribution guidelines, default is contributions welcome, will be replaced if you add text.',
        default: 'Contributions welcome.',
    },
    {
        type: 'confirm',
        name: 'testsConfirm',
        message: 'Does your project have tests?',
        default: false
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please instruct how to run tests.',
        when: ({ testsConfirm }) => {
            if (testsConfirm) {
                return true;
            } else {
                return false;
            }
        }

    },


    
    
    //install instructions
    //features
    //
];

// define a function to convert inquirer answers to markdown
function createTemplate(data) {
    console.log(data);
    var template = 
`# ${data.projecttitle}
## ${data.projectdescription}
## ${data.email}
## ${data.github}

    `
    return template
}

// define a function to write README file
function writeToFile(fileName, data) {

    console.log(fileName, data, process.cwd());
    return fs.writeFileSync(path.join(process.cwd(), "/dist", fileName), data)

}

// define a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(answers => writeToFile("README.md", generateMarkdown(answers)))
};

// call the function to initialize app
init()
