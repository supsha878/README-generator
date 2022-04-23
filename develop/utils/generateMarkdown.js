// All licensing information retrieved from https://choosealicense.com/
const licenses = ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unilicense", "No License"];

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadgeMessage = ["GNU-AGP-3.0", "GNU-GP-3.0", "GNU-LGP-3.0", "Mozilla-2.0", "Apache-2.0", "MIT", "Boost Software", "Unilicense", ""];
  return licenseBadgeMessage[licenses.indexOf(license)];
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinkPaths = ["agpl-3.0/", "gpl-3.0/", "lgpl-3.0/", "mpl-2.0/", "apache-2.0/", "mit/", "bsl-1.0/", "unlicense/", ""];
  return licenseLinkPaths[licenses.indexOf(license)];
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseDescriptions = ["Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.",
  "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.",
  "Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.",
  "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.",
  "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
  "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
  "A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
  "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.",
  ""];
  return licenseDescriptions[licenses.indexOf(license)];
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![license badge](https://img.shields.io/static/v1?label=license&message=${renderLicenseBadge(data.license)}&color=blue&style=flat-square)

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

**${data.license}**

>${renderLicenseSection(data.license)}

[Learn more about this license](https://choosealicense.com/licenses/${renderLicenseLink(data.license)}).

## Contribute

${data.contribute}

## Tests

${data.tests}

## Questions

If you have any additional questions about this product, go to my [GitHub](https://github.com/${data.github}) profile or email me at ${data.email}.
`;
}

module.exports = { generateMarkdown };