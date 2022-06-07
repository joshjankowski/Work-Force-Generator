const inquirer = require("inquirer");
const uuid = require('./helper/uuid');
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const managerQuestions = [
  {
    type: "input",
    message: "Enter the person's name:",
    name: "name",
  },
  {
    type: "input",
    message: "Enter the person's email:",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the manager's office number:",
    name: "officeNumber",
  },
  {
    type: "list",
    message: "Would you like to add another employee?",
    choices: ["Yes", "No"],
    name: "another",
  }
];
const engineerQuestions = [
  {
    type: "input",
    message: "Enter the person's name:",
    name: "name",
  },
  {
    type: "input",
    message: "Enter the person's email:",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the engineer's GitHub username:",
    name: "githubUsername",
  },
  {
    type: "list",
    message: "Would you like to add another employee?",
    choices: ["Yes", "No"],
    name: "another",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "Enter the person's name:",
    name: "name",
  },
  {
    type: "input",
    message: "Enter the person's email:",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the school you attend:",
    name: "school",
  },
  {
    type: "list",
    message: "Would you like to add another employee?",
    choices: ["Yes", "No"],
    name: "another",
  },
];
const employeeQuestions = [
  {
    type: "input",
    message: "Enter the person's name:",
    name: "name",
  },
  {
    type: "input",
    message: "Enter the person's email:",
    name: "email",
  },
  {
    type: "list",
    message: "Would you like to add another employee?",
    choices: ["Yes", "No"],
    name: "another",
  },
];
const firstQuestion = {
  type: "list",
  message: "Let's start with the role first:",
  choices: ["Engineer", "Intern", "Manager", "Employee"],
  name: "role",
};

const render = require("./src/template-helper.js");

const teamArr = [];
const idArr = [];

function addTeam() {
  inquirer.prompt(firstQuestion).then((response) => {
    if (response.role == "Manager") {
      inquirer.prompt(managerQuestions).then((response) => {
        console.log("MANAGER SELECTED");
        function addManager() {
          const manager = new Manager(
            response.name,
            uuid(),
            response.email,
            response.officeNumber,
          );
          console.log(manager)
          teamArr.push(manager);
          idArr.push(response.id);
        if (response.another == "Yes") {
          addTeam();
        } else {
          generateHTML();
        }}
        addManager();
      });
    } else if (response.role == "Intern") {
      inquirer.prompt(internQuestions).then((response) => {
        console.log("INTERN SELECTED");
        function addIntern() {
          const intern = new Intern(
            response.name,
            uuid(),
            response.email,
            response.school,
          );
          teamArr.push(intern);
          idArr.push(response.id);
        if (response.another == "Yes") {
          addTeam();
        } else {
          generateHTML();
        }}
        addIntern();
      });
    } else if (response.role == "Engineer") {
      inquirer.prompt(engineerQuestions).then((response) => {
        console.log("ENGINEER SELECTED");
        function addEngineer() {
          const engineer = new Engineer(
            response.name,
            uuid(),
            response.email,
            response.githubUsername,
          );
          teamArr.push(engineer);
          idArr.push(response.id);
        if (response.another == "Yes") {
          addTeam();
        } else {
          console.log(engineer.getGithub())
          generateHTML();
        }}
        addEngineer();
      });
    } else if (response.role == "Employee") {
      inquirer.prompt(employeeQuestions).then((response) => {
        console.log("EMPLOYEE SELECTED");
        function addEmployee() {
          const employee = new Employee(
            response.name,
            uuid(),
            response.email,
            response.officeNumber,
          );
          teamArr.push(employee);
          idArr.push(response.id);
        if (response.another == "Yes") {
          addTeam();
        } else {
          generateHTML();
        }}
        addEmployee();
      });
    }
  });
}

addTeam();

function generateHTML() {
  console.log("Generating Team Profile.... ");
  fs.writeFile("./src/index.html", render(teamArr), "utf8", (err) => {
    if (err) throw err;
    console.log("success");
  });
}
