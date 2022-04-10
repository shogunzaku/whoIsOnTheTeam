// constructor for Intern
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // call parent constructor here using a super.
        super(name, id, email);

        this.school = school;
    }
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";   
    }
}
module.exports = Intern;