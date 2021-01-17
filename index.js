// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('generateMarkdown.js');

// const writeToFile = util.promisify(fs.writeFile)

// TODO: Create an array of questions for user input
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your application title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your application:',
        },
        {
            type: 'checkbox',
            name: 'contents',
            message: 'What do you want to include in your table of content?',
            choices: ["How to Access", "How to Install", "How to Use", "Screenshot", "Code Snippets", "Technologies Used", "How to Contribute", "How to Report Issues", "About Me", "References"],
        },
        {
            type: 'input',
            name: 'access',
            message: 'How does the user access your application?',
        },
        {
            type: 'input',
            name: 'install',
            message: 'How does the user install your application?',
        },
        {
            type: 'input',
            name: 'use',
            message: 'How to use your application?',
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'Enter the file pathway for a screenshot of your application:',
        },
        {
            type: 'checkbox',
            name: 'technologies',
            message: 'Which technologies were used in the creation of your application?',
            choices: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node.js'],
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Does does one contribute to your application?',
        },
        {
            type: 'input',
            name: 'report',
            message: 'How does one report issues about your application?',
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// 1. 