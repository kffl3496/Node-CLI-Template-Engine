// TODO: Write code to define and export the Employee class
const Employee = require('./lib/Employee.js');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {

    }
    getId() {

    }
    getEmail() {

    }
    getRole() {

    }
}

Employee.getName();
Employee.getId();
Employee.getEmail();
Employee.getRole();

module.exports = {
    Employee
};