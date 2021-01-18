// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const readmeData = [];
let titleObj; let descriptionObj; let installObj; let usageObj; let contributionObj; let testObj; let contactObj; let licenseObj;


////////////////////////////////
///// INITIALIZE MAIN MENU /////
////////////////////////////////
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
            message: "Select a section to add/edit:",
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
            case "Exit": createReadme();
                console.log("Your README.md file has been created!");
        }
    })
}


//////////////////////////
///// DATA FUNCTIONS /////
//////////////////////////

// Add a project title.
function addTitle() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? "
        }
    ]).then(function(userInput) {
        titleObj = {section: "title", content: `"${userInput.title}"`}
        mainMenu();
    })
}

// Add a project description.
function addDescription() {
    inquirer.prompt([
        {
            type: "input",
            name: "description",
            message: "Add a project description: "
        }
    ]).then(function(userInput) {
        descriptionObj = {section: "description", content: `"${userInput.description}"`}
        mainMenu();
    })
}

// Add installation instructions.
function installInst() {
    inquirer.prompt([
        {
            type: "input",
            name: "installation",
            message: "Add installation instructions: "
        }
    ]).then(function(userInput) {
        installObj = {section: "installation", content: `"${userInput.installation}"`}
        mainMenu();
    })
}

// Add usage information.
function usageInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "usage",
            message: "Add usage information: "
        }
    ]).then(function(userInput) {
        usageObj = {section: "usage", content: `"${userInput.usage}"`}
        mainMenu();
    })
}

// Add contribution guidelines.
function contributionGuide() {
    inquirer.prompt([
        {
            type: "input",
            name: "contribution",
            message: "Add contribution guidelines: "
        }
    ]).then(function(userInput) {
        contributionObj = {section: "contribution", content: `"${userInput.contribution}"`}
        mainMenu();
    })
}

// Add testing instructions.
function testInst() {
    inquirer.prompt([
        {
            type: "input",
            name: "test",
            message: "Add testing instructions: "
        }
    ]).then(function(userInput) {
        testObj = {section: "test", content: `"${userInput.test}"`}
        mainMenu();
    })
}

// Add contact info.
function contactInfo() {
    console.log("Add contact information:\n")
    inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Email: "
        }
    ]).then(function(userInput) {
        contactObj = {section: "contact", content: {username: `"${userInput.username}"`, email: `"${userInput.email}"`}}
        mainMenu();
    })
}

// Add a license.
function selectLicense() {
    inquirer.prompt([
        {
            type: "list",
            name: "licenseChoice",
            message: "Select a license: ",
            choices: ["MIT License", "GNU GPLv3", "Apache License 2.0", "The Unlicense"],
        }
    ]).then(function(userChoice) {
        licenseObj = {section: "license", content: `"${userChoice.licenseChoice}"`}
        mainMenu();
    })
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();