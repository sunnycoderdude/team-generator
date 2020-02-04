var inquirer = require("inquirer");
var Employee = require('./lib/Employee');
var Manager = require('./lib/Manager');
var Engineer = require('./lib/Engineer');
var Intern = require('./lib/Intern')


inquirer.prompt([
    {
        type: "input",
        message: "What is your manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "managerID"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "managerOffice"
    },
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is your engineer's ID?",
        name: "engineerID"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is your engineer's github?",
        name: "engineerGithub"
    },
    {
        type: "input",
        message: "What is your interns's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is your intern's ID?",
        name: "internID"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is your intern's school?",
        name: "internSchool"
    },
    ])
    .then(function(response) {
        const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice)
        const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub)
        const intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool)

        console.log(manager);
        console.log(engineer);
        console.log(intern);




    });
    
    

