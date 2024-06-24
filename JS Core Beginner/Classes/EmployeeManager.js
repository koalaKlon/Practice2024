// variant 3
class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    calculateAnnualSalary() {
      const annualSalaryWithoutBonus = super.calculateAnnualSalary();
      const bonus = 0.1 * annualSalaryWithoutBonus;
      return annualSalaryWithoutBonus + bonus;
    }
  }
  
  const manager1 = new Manager("Alice", 5000, "Sales");
  const manager2 = new Manager("Bob", 6000, "Marketing");
  
  console.log(`${manager1.name} (${manager1.department}): $${manager1.calculateAnnualSalary().toFixed(2)}`);
  console.log(`${manager2.name} (${manager2.department}): $${manager2.calculateAnnualSalary().toFixed(2)}`);
  
