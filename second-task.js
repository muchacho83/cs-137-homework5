class Employee {
    constructor(firstName, lastName, salary, position) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.salary = salary;
      this.position = position;
    }
  
    toString() {
      return `Employee: ${this.getFullName()}, Position: ${this.position}, Salary: ${this.salary}`;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  class Manager extends Employee {
    constructor(firstName, lastName, salary, position, department, bonus) {
      super(firstName, lastName, salary, position);
      this.department = department;
      this.bonus = bonus;
    }
  
    toString() {
      return `${super.toString()}, Department: ${this.department}, Bonus: ${this.bonus}`;
    }
  
    getSalary() {
      return this.salary + this.bonus;
    }
  }

  const emp1 = new Employee("John", "Doe", 50000, "Software Engineer");
console.log(emp1.toString());

const mgr1 = new Manager("Jane", "Smith", 80000, "Engineering Manager", "Engineering", 10000);
console.log(mgr1.toString());
console.log(mgr1.getSalary());