const inquirer = require("inquirer");
const fs = require("fs");
const questions = [
  {
    type: "list",
    message: "Let's start with the role first:",
    choices: ["Engineer", "Intern", "Manager", "Employee"],
    name: "role",
  },
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
];

inquirer.prompt(questions).then((response) => {
  if (response.role = "Manager") {
    inquirer.prompt({
      type: "input",
      message: "Enter the manager's office number:",
      name: "office-number",
    })
  } else if (response.role = "Engineer"){
    inquirer.prompt({
      type: "input",
      message: "Enter the engineer's GitHub username:",
      name: "github-username",
    })
  } else if (response.role = "Intern"){
    inquirer.prompt({
      type: "input",
      message: "Enter the school you attend:",
      name: "school",
    })
  } 
});

// const promptQuestions = async (options) => {
//   const questions = [];

//   if ((options.role = "Manager")) {
//     const managerQuestion = {
//       type: "input",
//       message: "Enter the manager's office number:",
//       name: "office-number",
//     };
//     questions.push(managerQuestion);
//   }
//   if ((options.role = "Engineer")) {
//     const engineerQuestion = {
//       type: "input",
//       message: "Enter the engineer's GitHub username:",
//       name: "github-username",
//     };
//     questions.push(engineerQuestion);
//   }
//   if ((options.role = "Intern")) {
//     const internQuestion = {
//       type: "input",
//       message: "Enter the engineer's GitHub username:",
//       name: "github-username",
//     };
//     questions.push(internQuestion);
//   }

//   const answers = await inquirer.prompt(questions);
// };
// inquirer
//   .prompt([
//     {
//       type: "list",
//       message: "Let's start with the role first:",
//       choices: ["Engineer", "Intern", "Manager"],
//       name: "role",
//     },
//     {
//       type: "input",
//       message: "Enter the person's name:",
//       name: "name",
//     },
//     {
//         type: "input",
//         message: "Enter the person's email:",
//         name: "email",
//       },
//       {
//         type: "input",
//         message: "Enter the manager's office number:",
//         name: "office-number",
//       },
//   ])
//   .then((response) => {
//     console.log(response.name);
//     fs.writeFile(
//       "./src/index.html",
//       `#### Table of Contents\n\n[${response.name}](#${response.name})\n[User Story](#user-story)\n[Motivation](#motivation)\n[Uniqueness](#uniqueness)\n[Preview Photo](#preview-photo)\n[Usage](#usage)\n[Git Hub URL](#git-hub-URL)\n[Author](#author)\n[Email](#email)\n[License](#license)\n[Badge](#badge)\n## [${response.name}\n\n${response.description}\n\n## User Story\n\n${response.user}\n\n## Motivation\n\n${response.why}\n\n## Uniqueness\n\n${response.unique}\n\n## Preview Photo\n\n![img](./${response.photo})\n\n## Usage\n\n${response.usage}\n\n## Git Hub URL\n\nhttps://github.com/${response.url}\n\n## Author\n\n${response.author}\n\n## Email\n\n[mailto](mailto:${response.email})\n\n## License\n\nThis project is protected by the ${response.copyright} license. Copyright J Cubed LLC\n\n## Badge\n\n![img](https://img.shields.io/badge/${response.label}-${response.message}-${response.color})`,
//       "utf8",
//       (err) => {
//         if (err) throw err;
//         console.log("success");
//       }
//     );
//   });
