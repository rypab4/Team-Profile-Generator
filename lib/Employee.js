//Create class Employee with constructor
class Employee{
    constructor(name, id, email, role='Employee'){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
//functions for class employees to be used in other js      
getName() { return this.name; }
getId() { return this.id; }
getEmail() { return this.email; }
getRole() { return this.role; }

}

module.exports = Employee