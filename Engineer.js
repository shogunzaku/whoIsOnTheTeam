// constructor for the Engineer
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // call parent constructor here using a super.
        super(name, id, email);

        this.github = github;
    }
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";   
    }
}
module.exports = Engineer;