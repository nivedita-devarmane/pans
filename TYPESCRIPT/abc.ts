
class Emp{
	name;
	age;
	salary;
	designation;

	constructor(name, age, salary, designation)
	{
		this.name = name;
		this.age = age;
		this.salary = salary;
		this.designation = designation;
	}

	display()
	{
		console.log("Name : "+this.name);
		console.log("Age : "+this.age);
		console.log("Salary : "+this.salary);
		console.log("Designation : "+this.designation);
		console.log("........................");

	}
}
let e1 = new Emp("Paras", 27, 500000, "Full Stack");
let e2 = new Emp("Anusha", 25, 400000, "Full Stack");
let e3 = new Emp("Ankit", 24, 300000, "Full Stack");

e1.display();
e2.display();
e3.display();

