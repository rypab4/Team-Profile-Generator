module.exports = team => {
    return` 
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,300&display=swap"
            rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <div class="container">
            <div class="jumbotron bg-info">
                <h1 class="text-center">My Team</h1>
            </div>
            <div class="container">
            <div class="row">
                <div class="main-section col-12 d-flex justify-content-center">
                    ${createTeamProfile(team)}
                </div>
            </div>
        </div>
    </body>

    </html>
    `;
};
//Create team profile
const createTeamProfile = team => {
    //Create Manger profile
    const createMangerProfile = manager => {
        return `
        <div class="allcards">

            <div class="card manager" style="width: 20rem">
                <div class="card-header text-center  bg-danger">
                <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-subtitle">${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href=mailto:${manager.getEmail()}>${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
            `;
    };
    //Create Engineer Profile
    const createEngineerProfile = engineer => {
        return `
            <div class="card engineer" style="width: 20rem">
                <div class="card-header text-center bg-success">
                    <h2 class="card-title">${engineer.getName()}</h2>
                    <h3 class="card-subtitle">${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID:${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href=mailto: ${engineer.getEmail()}>${engineer.getEmail()}</a></li>
                        <li class="list-group-item">Github: <a
                                href="https://github.com/${engineer.getGithub()}"></a>${engineer.getGithub()}</li>
                    </ul>
                </div>
            </div>
            `;
    };
    //Create Intern Profile
    const createInternProfile = intern => {
        return `
            <div class="card intern" style="width: 20rem">
                <div class="card-header text-center bg-warning">
                    <h2 class="card-title">${intern.getRole()}</h2>
                    <h3 class="card-subtitle">Intern</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID:${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href=mailto: ${intern.getEmail()}>${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
            `;
    };
    const html = []
    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => createMangerProfile(manager))
        );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => createEngineerProfile(engineer))
        .join('')
        );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => createInternProfile(intern))
        .join('')
        );
    return html.join('');
};

