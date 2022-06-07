const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Employee = require('../lib/Employee')

const createTeam = team =>{

    const createManager = manager => {
        return `<div class="card">
        <div class="card-header">
          <p class="name">${manager.getName()}</p>
          <p class="title"><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</p>
        </div>
        <div class="grey">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
          </ul>
        </div>
      </div>`
    }

    const createEngineer = engineer => {
        return `<div class="card">
        <div class="card-header">
          <p class="name">${engineer.getName()}</p>
          <p class="title"><i class="fa-solid fa-mug-hot"></i> ${engineer.getRole()}</p>
        </div>
        <div class="grey">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
          </ul>
        </div>
      </div>`
    }

    const createIntern = intern => {
        return `<div class="card">
        <div class="card-header">
          <p class="name">${intern.getName()}</p>
          <p class="title"><i class="fa-solid fa-mug-hot"></i> ${intern.getRole()}</p>
        </div>
        <div class="grey">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
        </div>
      </div>`
    }

    const createEmployee = employee => {
        return `<div class="card">
        <div class="card-header">
          <p class="name">${employee.getName()}</p>
          <p class="title"><i class="fa-solid fa-mug-hot"></i> ${employee.getRole()}</p>
        </div>
        <div class="grey">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
          </ul>
        </div>
      </div>`
    }


    const html= []

    html.push(team
        .filter(employee=> employee.getRole() === "Manager")
        .map(manager=> createManager(manager))
        )
     html.push(team
        .filter(employee=> employee.getRole() === "Engineer")
        .map(manager=> createEngineer(manager))
        )
    html.push(team
        .filter(employee=> employee.getRole() === "Intern")
        .map(manager=> createIntern(manager))
        )
    html.push(team
        .filter(employee=> employee.getRole() === "Employee")
        .map(manager=> createEmployee(manager))
        )

    return html.join("")
}

module.exports = team=> {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="./style.css" />
    </head>
    
    <body>
      <section class="red">
        <p>My Team</p>
      </section>
      <section class="main">
      ${createTeam(team)}
      </section>
      <script src="https://kit.fontawesome.com/81f64fdf9e.js" crossorigin="anonymous"></script>
    </body>
    
    </html>`
}