//using Employee from Employee.js
const Employee = require('./Employee')

class Engineer extends Employee  {
    //create engineer constructor
    constructor(name, id, email, github){
        //use super because extending from Employee
        super(name, id, email);
        this.github = github;
    }

    getGithub(){ return this.github; }
    getRole(){ return 'Engineer'; }
}

module.exports = Engineer;