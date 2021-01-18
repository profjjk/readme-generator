// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? "
        },
        {
            type: "input",
            name: "description",
            message: "Add a project description: "
        },
        {
            type: "input",
            name: "installation",
            message: "Add installation instructions: "
        },
        {
            type: "input",
            name: "usage",
            message: "Add usage information: "
        },
        {
            type: "input",
            name: "contribution",
            message: "Add contribution guidelines: "
        },
        {
            type: "input",
            name: "test",
            message: "Add testing instructions: "
        },
        {
            type: "input",
            name: "username",
            message: "GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Email: "
        },
        {
            type: "list",
            name: "licenseChoice",
            message: "Select a license: ",
            choices: ["MIT License", "GNU GPLv3", "Apache License 2.0", "The Unlicense"],
        },
        {
            type: "input",
            name: "licenseName",
            message: "Enter your full name for the license",
        },
        {
            type: "input",
            name: "licenseYear",
            message: "Enter the current year for the license",
        },
    ]);

promptUser()
    .then((answers) => writeFileAsync("myREADME.md", generateMarkdown(answers)))
    .then(() => console.log("Your file has been created!"))
    .catch((err) => console.error(err))