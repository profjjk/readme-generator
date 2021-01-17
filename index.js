// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const readmeData = [];

start()
function start() {
    console.log("Create a README.md file:\n");
    mainMenu();
}

function mainMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "menuChoice",
            message: "Where would you like to start?",
            choices: ["Add a title", "Add a description", "Add installation instructions", "Add usage information", "Add contribution guidelines", "Add test instructions", "Add contact info for questions", "Select a license", "Exit"]
        }
    ]).then(function(userChoice) {
        switch (userChoice.menuChoice) {
            case "Add a title": addTitle();
                break;
            case "Add a description": addDescription();
                break;
            case "Add installation instructions": installInst();
                break;
            case "Add usage information": usageInfo();
                break;
            case "Add contribution guidelines": contributionGuide();
                break;
            case "Add test instructions": testInst();
                break;
            case "Add contact info for questions": contactInfo();
                break;
            case "Select a license": selectLicense();
                break;
            case "Exit":
                console.log("Your README.md file has been created!");
                createReadme();
        }
    })
}




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();