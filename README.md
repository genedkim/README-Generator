# README-Generator
Repository for UW Bootcamp week 9 challenge to build a README generator using node

## Description
For the week 9 challenge I created a README.md generator that can be used for future projects. 

I was able to implement the acceptance criteria for this project by first using Inquirer to prompt a series of questions for the user to answer in the command line when running the script file with Node. 

Then in my generateMarkdown.js file I created an array for license information and a function to generate the contents of the README.md given the user's answers to the prompts. A switch statement was also used to pass the license chosen by the user and return a generated badge for the license using the corresponding license object within the licenseArray.

Back in the init() function within the index.js file, the questions() function is called to run the prompts and then, while passing the responses to those prompts, fs.writeFile() is called to create the README file while also calling generateMarkdown() to generate the content of the README file given the user responses.

## Table of Contents
- [Installation](#installtion)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
To run this program the user will need to have the generateMarkdown.js, index.js and Inquirer 8.2.4 node_modules files installed to your root folder. The user will also need to have node installed.

## Usage
Once everything is properly installed, in order to use the README generator the user must run
```bash
node index.js
```
on their command line. The user must then answer all the following prompts with the information they want displayed on their README file. Once completed the user should receive a message informing them the README file was successfully created and upon checking the root folder should find the generated file.

![How To](./images/howtouseREADMEgenerator.gif)

## Credits

Used the following page https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba to add license badges to the README.