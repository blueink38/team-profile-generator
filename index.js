const inquirer = require('inquirer');
const fs = require('fs');
const jest = require("jest");

// const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
// const generateHTML = require('./dist/generateHTML');

const employee = [];

function init() {
  generateHTML();
  buildTeam();
}

function buildTeam() {
  inquirer.prompt([
    {
      name: 'name',
      message: 'What is your name?',
    },
    {
      name: 'id',
      message: 'What is your employee ID?',
    },
    {
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'checkbox',
      name: 'role',
      message: 'What is your role?',
      choices: ['Manager', 'Engineer', 'Intern']
    }])
    .then(function({name, role, id, email}) {
        let newRole = "";
        if (role === "Engineer") {
            newRole = "GitHub username";
        } else if (role === "Intern") {
            newRole = "school name";
        } else {
            newRole = "office number";
        }
        inquirer.prompt([{
            name: "newRole",
            message: `Enter team member's ${roleSpec}`
        },
        {
            type: "checkbox",
            message: "Would you like to add another team member?",
            choices: [
                "yes",
                "no"
            ],
            name: "addMembers"
        }])
        .then(function({newRole, addMembers}) {
        let newMember;
        if (role === "Engineer") {
            addMember === new Engineer(name, id, email, newRole);
        } else if (role === "Intern") {
            addMember = new Intern(name, id, email, newRole);
        } else {
            addMember = new Manager(name, id, email, newRole);
        }
        employee.push(buildTeam);
        addHtml(addMember)
        .then(function() {
            if (addMember === "yes") {
                addMember();
            } else {
                endHtml();
            }
        });
        });
    });
}

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