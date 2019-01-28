class Emp {
   protected name: string;
   private age: number;
    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;

    }
    display() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}
let e1 = new Emp(25, "Rajiv");
e1.display();
//e1.name = "paras";
//e1.age = 30;
e1.display();