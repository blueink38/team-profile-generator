const inquirer = require('inquirer');
const fs = require('fs');
const jest = require("jest");

// const Employee = require('../lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employee = [];

function init() {
  startHtml();
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
    .then(function({name, id, email, role}) {
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
            message: `Enter team member's ${newRole}`
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
        .then(function({newRole, addMember}) {
        let newMember;
        if (role === "Engineer") {
            newMember === new Engineer(name, id, email, newRole);
        } else if (role === "Intern") {
            newMember = new Intern(name, id, email, newRole);
        } else {
            newMember = new Manager(name, id, email, newRole);
        }
        employee.push(newMember);
        newHtml(addMember)
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

function startHtml() {
    const html = `
    <!doctype html>
    <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <!-- Font Awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
    integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
    crossorigin="anonymous" />
    <link rel="stylesheet" href="./assets/style.css" />


    <title>Team Builder</title>
  </head>
  <body>

    <!-- start header -->
    <header>
      <h1>My Team</h1>
    </header>
    <!-- end header -->
`;
fs.writeFile("./dist/new-team.html", html, function(err) {
    if (err) {
        console.log(err);
    }
});
    console.log("Build your team");
}

function newHtml(member) {

        return new Promise(function(resolve, reject) {
            const name = member.getName();
            const role = member.getRole();
            const id = member.getId();
            const email = member.getEmail();
            let data = "";

            if (role === "Engineer") {
                const gitHub = member.getGithub();
                data = `
                <div class="container">
                    <section class="employees" id="engineer">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text"><i class="fas fa-glasses"></i> Engineer</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID Number: ${id}</li>
                            <li class="list-group-item">Email: <a href="#" class="card-link">${email}</a></li>
                            <li class="list-group-item">GitHub: <a href="#" class="card-link">${gitHub}</a></li>
                        </ul>
                        </div>
                    </section>
                </div>
                `;
                } else if (role === "Manager") {
                    const officeNumber = member.getOfficeNumber();
                    data = `
                    <div class="container">
                    <section class="employees" id="manager">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${name}</h5>
                          <p class="card-text"><i class="fas fa-mug-hot"></i> Manager</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">ID Number: ${id}</li>
                          <li class="list-group-item">Email: <a href="#" class="card-link">${email}</a></li>
                          <li class="list-group-item">Office Number: ${officeNumber}</li>
                        </ul>
                      </div>
                    </section>
                  </div>
                `;
                } else {
                    const schoolInput = member.getSchool();
                    data = `
                    <div class="container">
                    <section class="employees" id="intern">
                      <div class="card" style="width: 18rem;">
                          <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text"><i class="fas fa-user-graduate"></i> Intern</p>
                          </div>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID Number: ${id}</li>
                            <li class="list-group-item">Email: <a href="#" class="card-link">${email}</a></li>
                            <li class="list-group-item">School: ${school}</li>
                          </ul>
                        </div>
                      </section>
                    </div>
                    `
                }
                fs.appendFile("./dist/new-team.html", data, function (err) {
                    if (err) {
                        return reject(err);
                    };
                    return resolve();
                });
            });
        }

        function endHtml() {
            const html = `
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

            </body>
          </html>
          `;

          fs.appendFile(".dist/new-team.html", html, function (err) {
              if (err) {
                  console.log(err);
              };
          });
          console.log ("Team Made");
        }
    
init();