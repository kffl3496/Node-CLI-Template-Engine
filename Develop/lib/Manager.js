// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(officeNumber) {
        super();
        this.officeNumber = 100;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
