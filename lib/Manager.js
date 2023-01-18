const Employee = require('./Employee');

class Manager extends Employee {
    //Manager constructor
    constructor(name, id, email, officeNumber){
        //Use super becaue using from Employee constructor
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){ return this.officeNumber; }
    getRole(){ return 'Manager'; }
}

module.exports = Manager;