const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function buildTeam() {
    this.roundNumber = 0;
    this.employee = [];
}