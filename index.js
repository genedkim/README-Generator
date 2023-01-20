// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => inquirer.prompt([
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
        message: 'Please choose a license for this project.',
        choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU GPL v2', 'GNU GPL v3', 'GNU LGPL v3', 'Eclipse Public License 2.0', 'MIT', 'Mozilla Public License 2.0', 'None'],
    },
    // {
    //     type: 'input',
    //     name: 'readmeName',
    //     message: 'Please create a name for your README file (if left blank the file name will be defaulted to README.md)',
    // }

]);

// TODO: Create a function to write README file
// const writeToFile = (fileName, data) => {
//     fs.writeFile(fileName, data);
// }

// TODO: Create a function to initialize app
const init = () => {
    console.log('Welcome to Gene\'s README generator. Please answer the following prompts. Once completed the generator will create your custom README file.');
    questions()
        .then((response) => {
            // console.log(`${response.readmeName}.md`)
            // if (response.readmeName = '') {
            //     response.readmeName = 'README'
            // }
            // let readmeNameFull = response.readmeName + '.md'
            fs.writeFile('EXAMPLE.md', generateMarkdown(response), (err) =>
            err ? console.error(err) : console.log('Your README file is complete! Check your root folder to take a look.'))
        })
}

// Function call to initialize app
init();
