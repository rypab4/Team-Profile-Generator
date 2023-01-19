//this js runs application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

//add constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



const DIST_DIR = path.join(__dirname, 'dist');
const outputPath = path.join(DIST_DIR, 'index.html');

const render = require('./src/template.js');


const teamArray = [];
const idArray = [];


//Start App
function startApp(){
    
    //Promp for manager
    function addManager(){
        console.log("Add team profile");
        inquirer.prompt([
            {
                type:"input",
                name:"managerName",
                message:"Enter team manager's name: ",
                validate: answer =>{
                    if(answer!== ""){
                        return true;
                    }
                    return "Enter manager's name again: " 
                }
            },
            {
                type:"input",
                name:"managerID",
                message:"Enter team manager's Id: ",
                validate: answer =>{
                    if(answer!== ""){
                        return true;
                    }
                    return "Enter manager's Id again: " 
                }
            },
            {
                type:"input",
                name:"managerEmail",
                message:"Enter team manager's email: ",
                validate: answer =>{
                    if(answer!== ""){
                        return true;
                    }
                    return "Enter manager's email again: " 
                }
            },
            {
                type:"input",
                name:"managerOfficeNumber",
                message:"Enter team manager's office number: ",
                validate: answer =>{
                    if(answer!== ""){
                        return true;
                    }
                    return "Enter manager's office number again: " 
                }
            },

        ]).then(answers=>{
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            idArray.push(answers.managerId);
            addTeam();
        });

    }
    function addTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "employeeType",
                message: "What type of employee would you like to add?",
                choices:[
                    "Engineer",
                    "Intern",
                    "End application",

                ]
            }
        ]).then(userChoice => {
            switch (userChoice.employeeType){
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    generateHTML();
            }
        });
    }
    //Engineer selected
    function addEngineer() {
        inquirer.prompt([
            {
                type:"input",
                name:"engineerName",
                message:"Please enter Engineer name:",
                validate: answer => {
                    if (answer!== ""){
                        return true;
                    }
                    return "Please enter Engineer's name!"
                },
            },
            {
                type:"input",
                name:"engineerID",
                message:"Please enter Engineer ID:",
                validate: answer => {
                    if (answer!== ""){
                        return true;
                    }
                    return "Please enter Engineer's ID!"
                },
            },
            {
                type:"input",
                name:"engineerEmail",
                message:"Enter team engineer's email: ",
                validate: answer =>{
                    if(answer!== ""){
                        return true;
                    }
                    return "Enter engineer's email again: " 
                }
            },
            {
                type:"input",
                name:"engineerGithub",
                message:"Please enter Engineer Github:",
                validate: answer => {
                    if (answer!== ""){
                        return true;
                    }
                    return "Please enter Engineer's Github!"
                },
            },
        ]).then(answers =>{
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            idArray.push(answers.engineerID);
            addTeam();
        })
    } 

    //Intern selected
    function addIntern() {
        inquirer.prompt([
            {
                type:"input",
                name:"internName",
                message:"Please enter intern name:",
                validate: answer => {
                    if (answer!== ""){
                        return true;
                    }
                    return "Please enter intern's name!"
                },
            },
            {
                type:"input",
                name:"internID",
                message:"Please enter intern ID:",
                validate: answer => {
                    if (answer!== ""){
                        return true;
                    }
                    return "Please enter intern's ID!"
                },
            },
            {
                type:"input",
                name:"internEmail",
                message:"Please enter intern email:",
                validate: answer => {
                    if (answer!== ""){
                        return true;
                    }
                    return "Please enter intern's email!"
                },
            },
            {
                type:"input",
                name:"internSchool",
                message:"Please enter intern school:",
                validate: answer => {
                    if (answer!== ""){
                        return true;
                    }
                    return "Please enter intern's school!"
                },
            },
        ]).then(answers =>{
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            idArray.push(answers.internID);
            addTeam();
        });
    } 

    function generateHTML() {
        if (!fs.existsSync(DIST_DIR)){
            fs.mkdirSync(DIST_DIR);
        }
        console.log("Creating Team...");
        fs.writeFileSync(outputPath, render(teamArray), "UTF-8");
    }

    addManager();
}

startApp();
