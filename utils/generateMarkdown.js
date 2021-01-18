// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "Apache License 2.0") {
    return `[![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.00-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === "Apache License 2.0") {
    return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GNU GPLv3") {
    return `[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "MIT License") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else {
    return `[The Unlicense](http://unlicense.org/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license === "Apache License 2.0") {
    return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GNU GPLv3") {
    return `[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "MIT License") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else {
    return `[The Unlicense](http://unlicense.org/)`;
  }
}


// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
`
# ${data.title}
---
## Table of Contents
* [Description](##description)
* [Installation Instructions](##installation-instructions)
* [Usage Information](##usage-information)
* [Contribution Guidelines](##contribution-guidelines)
* [Testing Instructions](##testing-instructions)
* [Contact Info](##contact-info)
* [License](##license)
---

## Description
${data.description}

## Installation Instructions
${data.installation}

## Usage Information
${data.usage}

## Contribution Guidelines
${data.contribution}

## Testing Instructions
${data.test}

## Questions
* GitHub username: ${data.username}
* Email: ${data.email}

## License
${renderLicenseBadge(data.licenseChoice)}
${renderLicenseLink(data.licenseChoice)}

`;

module.exports = generateMarkdown, renderLicense;