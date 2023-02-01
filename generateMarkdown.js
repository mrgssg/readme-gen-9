// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  
  if (!license) {
    return ""
    }

    return badge;
  }

 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";

  switch (license) {
     case "MIT":
      licenseLink = "";
      break;

      case "GPLv2":
      licenseLink = "";
      break;

      case "GPLv3":
      licenseLink = "";

      case "Apache":
      licenseLink = "";
  
      if (!license) {
        return ""
    }
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSec = "";
  
  if (!license) {
    return "";
  }
    return licenseSec;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = ["Description", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"]; 
  
  markdown += "## " + sections[0];
  markdown += data.description;

  markdown = "## Table of Contents"
for (let i=0; i<sections.length; i++) {
  sections["###" + i] 
}

markdown += "## " + sections[2]; 
markdown  += data.installation;

markdown += "## " + sections[3]; 
markdown  += data.usage;

markdown += "## " + sections[4]; 
markdown  += data.license;

markdown += "## " + sections[5]; 
markdown  += data.contributing;

markdown += "## " + sections[6]; 
markdown  += data.tests;

// the questions section includes the github username & email that was entered
markdown += "## " + sections[7]; 
markdown += "## " + data.questions 
markdown += "Here's a link to my github profile (https://github.com/mrgssg)";
markdown += "Email me at: " + data.email;

  return `# ${data.title} + markdown;
`
}

module.exports = generateMarkdown;