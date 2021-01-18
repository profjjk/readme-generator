// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge() {
  if (licenseObj === "Apache License 2.0") {
    `[![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.00-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseObj === "GNU GPLv3") {
    `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (licensObj === "MIT License") {
    `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (licenseObj === "The Unlicense") {
    `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  } else {
    return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {`
# ${readmeData.title}
---
## Table of Contents`
for (let i = 0; i < tableContents.length; i++) {
  let words = tableContents[i].split(" ");
  let wordsJoin = words.join("-")
  let wordsJoinLower = wordsJoin.toLowerCase();
  console.log(wordsJoinLower);
}
`* [${tableContents[i]}](##${wordsJoinLower})
---
## ${tableContents[0]}
${readmeData.description}

## ${tableContents[1]}
${readmeData.installation}

## ${tableContents[2]}
${readmeData.usage}

## ${tableContents[3]}
${readmeData.contribution}

## ${tableContents[4]}
${readmeData.test}

## ${tableContents[5]}
GitHub username: ${readmeData.username}
Email: ${readmeData.email}

## License
`
renderLicenseBadge();
}

module.exports = generateMarkdown;