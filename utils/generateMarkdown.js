// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license ${license}](https://img.shields.io/static/v1?label=License&message=${license}&color=green?style=plastic&logo=appveyor)`
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
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ` + renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projecttitle}
` + renderLicenseBadge(data.license) +
`
## Description
${data.projectdescription}
## ${data.email}
## ${data.github}

    `
    ;
}

module.exports = generateMarkdown;
