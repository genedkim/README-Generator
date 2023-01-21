// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArray = [
  {
    name: 'Apache 2.0',
    badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    link: 'https://opensource.org/licenses/Apache-2.0',
  },
  {
    name: 'BSD 2-Clause',
    badge: 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg',
    link: 'https://opensource.org/licenses/BSD-2-Clause',
  },
  {
    name: 'BSD 3-Clause',
    badge: 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
    link: 'https://opensource.org/licenses/BSD-3-Clause',
  },
  {
    name: 'GNU GPL v2',
    badge: 'https://img.shields.io/badge/License-GPL%20v2-blue.svg',
    link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
  },
  {
    name: 'GNU GPL v3',
    badge: 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
    link: 'https://www.gnu.org/licenses/gpl-3.0',
  },
  {
    name: 'GNU LGPL v3',
    badge: 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg',
    link: 'https://www.gnu.org/licenses/lgpl-3.0',
  },
  {
    name: 'Eclipse Public License 2.0',
    badge: 'https://img.shields.io/badge/License-EPL%202.0-red.svg',
    link: 'https://opensource.org/licenses/EPL-2.0',
  },
  {
    name: 'MIT',
    badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    link: 'https://opensource.org/licenses/MIT',
  },
  {
    name: 'Mozilla Public License 2.0',
    badge: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
    link: 'https://opensource.org/licenses/MPL-2.0',
  }
]

function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      response = `[![${licenseArray[0].name}](${licenseArray[0].badge})](${licenseArray[0].link})`;
      break;
    case 'BSD 2-Clause':
      response = `[![${licenseArray[1].name}](${licenseArray[1].badge})](${licenseArray[1].link})`;
      break;
    case 'BSD 3-Clause':
      response = `[![${licenseArray[2].name}](${licenseArray[2].badge})](${licenseArray[2].link})`;
      break;
    case 'GNU GPL v2':
      response = `[![${licenseArray[3].name}](${licenseArray[3].badge})](${licenseArray[3].link})`;
      break;
    case 'GNU GPL v3':
      response = `[![${licenseArray[4].name}](${licenseArray[4].badge})](${licenseArray[4].link})`;
      break;
    case 'GNU LGPL v3':
      response = `[![${licenseArray[5].name}](${licenseArray[5].badge})](${licenseArray[5].link})`;
      break;
    case 'Eclipse Public License 2.0':
      response = `[![${licenseArray[6].name}](${licenseArray[6].badge})](${licenseArray[6].link})`;
      break;
    case 'MIT':
      response = `[![${licenseArray[7].name}](${licenseArray[7].badge})](${licenseArray[7].link})`;
      break;
    case 'Mozilla Public License 2.0':
      response = `[![${licenseArray[8].name}](${licenseArray[8].badge})](${licenseArray[8].link})`;
      break;
    case 'None':
      response = "";
      break;
  }
  return response;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installtion)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Test
  ${data.test}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseBadge(data.license)} 

  This project is licensed under ${data.license} (click the badge above for further information).
`;
}

module.exports = generateMarkdown;
