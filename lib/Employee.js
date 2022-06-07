const uuid = require('../helper/uuid');
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        const nameInput = `${this.name}`;
        return nameInput;
    }

    getId() {
        const idInput = `${this.id}`
        return idInput;
    }
    getEmail() {
        const emailInput = `${this.email}`
        return emailInput;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;