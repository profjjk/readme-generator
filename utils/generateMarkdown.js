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
    return `
    Copyright ${license.licenseYear} ${license.licenseName}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    `;
  } else if (license === "GNU GPLv3") {
    return `
    Copyright (C) ${license.licenseYear}  ${license.licenseName}

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
    `;
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