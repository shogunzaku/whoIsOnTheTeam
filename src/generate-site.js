const generateTeam = (team) => {
    console.log(team);
    // Creates a empty array to push html elements on to loop through the team data
    const html = [];
    // Creates functions for each type of employee that returns HTML data
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${manager.name} <br/>
           <i class="fas fa-mug-hot"></i>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number:${manager.officeNumber}</li>
            </ul>
        </div>
        `;
        html.push(managerHtml);
    }
    // info for engineer
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${engineer.name} <br/>
           <i class="fas fa-glasses"></i>Engineer</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
            </ul>
        </div>
        `;
        html.push(engineerHtml);
    }
    // info for intern
    const generateIntern = intern => {
        console.log(intern);
        let internHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${intern.name} <br/>
           <i class="fas fa-user-graduate"></i>Intern</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        `;
        html.push(internHtml);
    }
    // adding a loop for all employees
    for (let i = 0; i < team.lenght; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
        generateManager(team[i]);
        }
        if (team[i].getRole() === "Intern") {
        generateManager(team[i]);
        }
    }

    return html.join('');
}

// Export funtion to generate page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Who Is On The Team</title>
</head>
<body>
        <header>
        <h1> My Team </h1>
        </header>
    
        <main> ${generateTeam(team)} </main>
 </body>
 </html>
 `;
}
