// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdowwn = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of the project (as it appears on GitHub).',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of this project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the steps required to install this project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter instructions and examples for use of this project.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list your collaborators with links to their GitHub profiles and/or the creators of any third party assets used for this project.',
    },
    {
        type: 'list',
        name: 'license',
        choices: [],
    }
])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
