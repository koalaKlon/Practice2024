// variant 1
class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
  }
  const person1 = new Person("Roman", 20, "Belarus");
  const person2 = new Person("Jora", 21, "Poland");
  
  person1.displayInfo(); // Name: Roman, Age: 20, Country: Belarus
  person2.displayInfo(); // Name: Jora, Age: 21, Country: Poland
  