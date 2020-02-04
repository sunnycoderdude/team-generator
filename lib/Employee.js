// The first class is an `Employee` parent class with the following properties and
// methods:

//   * name
//   * id
//   * title
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(this.name);
        return this.name;
    }
    
    getId() {
        console.log(this.id);
        return this.id;
    }
    
    getEmail() {
        console.log(this.email);
        return this.email;
    }

    getRole() {
        return 'Employee';
    }

}

module.exports = Employee;




  