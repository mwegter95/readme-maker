// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseEdited = license.replace(/ /g, '\u00A0');
  return `![license ${licenseEdited}](https://img.shields.io/static/v1?label=License&message=${licenseEdited}&color=green?style=plastic&logo=appveyor)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return `[MIT license](https://opensource.org/licenses/MIT)`;
  } else if (license == "Apache License 2.0") {
      return `[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)`;
  } else if (license == "GNU GPLv3") {
      return `[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html) `;
  } else if (license == "none") {
      return ``;
  } else {
    return ``
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `
## License
` + renderLicenseLink(license);
  } else {
      return ``;
  }
}

function renderFeaturesSection(data) {
  if (data.features) {
    const featuresEdited = data.features.split('. ');
    console.log(featuresEdited);
    const featuresString = '* ' + featuresEdited.join("\n* ")
    return `
## Features
${featuresString}
` 
  } else {
      return ``;
  };
}

function renderTestsSection(data) {
  if (data.tests) {
    return `
## Tests
${data.tests}`
  } else return ``;
}

function renderTableOfContents(data) {
}

function renderInstallationSection(data) {
  if (data.install !== "") {
    return `
## Installation
${data.install}`;
  } else {
      return ``;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projecttitle}
` + renderLicenseBadge(data.license) +
`
## Description
${data.projectdescription}
`+ renderInstallationSection(data) +
`
## Usage
${data.usage}

` + renderLicenseSection(data.license) +
`
` + renderFeaturesSection(data) +
`
## Contributions
${data.contributions}

` + renderTestsSection(data) +
`

## Author
${data.email}

https://github.com/${data.github}

    `
    ;
}

module.exports = generateMarkdown;
