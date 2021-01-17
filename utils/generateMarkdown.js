// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {`
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}

    ## ${data.description}

    ## Table of Contents
    [${data.contents[0]}](##${data.contents[0]})
    [${data.contents[0]}](##${data.contents[0]})
    [${data.contents[0]}](##${data.contents[0]})
    [${data.contents[0]}](##${data.contents[0]})
    [${data.contents[0]}](##${data.contents[0]})

    ## ${data.technologies}

    ## ${access}
    [Portfolio Webpage](https://profjjk.github.io/portfolio/)

    ## About Me
    * [LinkedIn](www.linkedin.com/in/the-real-jordan-kelly)
    * [GitHub](https://github.com/profjjk)

    ## Screenshots
    ![Hero](assets/img/hero.png)
    ![Profile](assets/img/profile.png)
    ![Portfolio](assets/img/portfolio.png)
`;
}

module.exports = generateMarkdown;