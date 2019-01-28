/*Inheritence in Class */
abstract class Emp {
    name;
    age;
    salary;
    designation;
    constructor(name, age, salary, designation) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
    }
    display() {
        console.log("Name : " + this.name);
        console.log("Age :" + this.age);
        console.log("Salary :" + this.salary);
        console.log("Designation :" + this.designation);
    }
r
}
export class Manager extends Emp {
    id;
    address;
    constructor(id, address, name, age, salary, designation) {
        super(name, age, salary, designation)
        this.id = id;
        this.address = address;

    }
    displayAll() {
        super.display();
        console.log("ID :" + this.id);
        console.log("Address :" + this.address);
    }
}
let emp = new Manager(101, "Raj", 22, 20000, "Tester", "Domlur");
emp.displayAll();