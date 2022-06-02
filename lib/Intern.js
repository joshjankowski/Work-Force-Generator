const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        const getSchoolInput = `School: ${this.school}`
        return getSchoolInput
}
    getRole() {
        return `Intern`
    }

}

module.exports = Intern;