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