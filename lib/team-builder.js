const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function Team() {
  this.roundNumber = 0;
  this.employee = [];
};

Team.prototype.buildTeam = function() {
  this.employee.push(new Employee('jon'));
  this.currentEmployee = this.employee[0];
  inquirer
    .prompt({
      type: 'text',
      name: 'name',
      message: 'What is your name?'
    })
    .then(({name}) => {
      this.name = new Employee(name);

      console.log(this.name);
    })
};

module.exports = Team;