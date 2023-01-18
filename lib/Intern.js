const Employee = require('./Employee')

class Intern extends Employee{
    //Intern constructor
    constructor(name, id, email, school) {
        //use super because using employee constructor
        super(name, id, email)
        this.school = school
    }

    getSchool() { return this.school }
    getRole() { return 'Intern' }
}

module.exports = Intern;