const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function Team() {
  this.roundNumber = 0;
}

Team.prototype.buildTeam = function() {
  inquirer
    .prompt(
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
    )
    .then(({name}) => {
      this.name = new Employee(name);
      console.log(this.name);
    });

    

};



module.exports = Team;