const inquirer = require('inquirer');
const fs = require('fs');
const jest = require("jest");

// const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
// const generateHTML = require('./dist/generateHTML');

const Employee = [];

function init() {
  generateHTML();
  buildTeam();
}

function buildTeam() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your employee ID?',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your employee ID.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email.');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'role',
      message: 'What is your role?',
      choices: ['Manager', 'Engineer', 'Intern']
    },

    // manager question
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is yor office number?',
      validate: officeNumberInput => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log('Please enter your office number');
          return false;
        }
      }
    },
    
    // engineer question
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub user name?',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please give your GitHub user name');
          return false;
        }
      }
    },

    // intern question
    {
      type: 'input',
      name: 'school',
      message: 'What school do you attend?',
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log('Please give your school name');
          return false;
        }
      }
    },
  ]);
};

async function init() {
  try {
    const data = await questions();
    const generateContent = generateHTML(data);

    await writeFileAsync('./produced-readme/README.md', generateContent);
    console.log('README.md was written to produced-readme directory');
  }
  catch(err) {
    console.log(err);
  }
}


module.exports = buildTeam;