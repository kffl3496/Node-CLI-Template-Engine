// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(github) {
        super();
        this.github = "GitHubUser";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;