// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

let badge;

  switch (license) {
    case "MIT":
      licenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;

    case "Apache 2.0":
      licenseLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;

    case "GPL 3.0":
      licenseLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    case "BSD 3":
      licenseLink = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

      if (!license) {
        return ""
      }
  } 
  return badge;
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None"){
    return `\n* [License](#license)\n`
  }
  else {
    return ""
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSec = `## license
    this project is licensed under the ${license} license`;

  if (!license) {
    return "";
  }
  return licenseSec;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)

  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  
  * [Usage](#usage)
    ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation 

   \`\`\`
  ${data.install}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Tests

  ${data.test_instructions}

  ## Questions

  ${data.questions} 
`
}

module.exports = generateMarkdown;