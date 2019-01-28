// INTERFACE

interface User {
    name: string;
    age: number;
    salary?: number; // '?' if we want to make it optional
}

//let u1 = {name:'Raj',age:25,salary:25000};
let u1 = { name: 'Raj', age: 25 };
console.log("Name :" + u1.name);
console.log("Age :" + u1.age);
//console.log("Salary :"+u1.salary);

interface Person {
    //abc();
    abc(): string;

    xyz(a: number): any;
    sum(a: number, b: number): number;
}
let p1: Person = {
    abc: function () {
        return "Just for Demo";
    },
    xyz: function (a: number) {
        console.log("Value of a :" + a);
    },
    sum: function (a: number, b: number) {
        return a + b;
    }
}


p1.abc();
p1.xyz(11);
let res = p1.sum(20, 30);
console.log("Sum of a and b :" + res);


// GENERICS

/*array allowing any type */
let arr: Array<any>;
arr = [1, 2, "abc", true];
arr[0] = 125;
arr[1] = 'xyz';
arr[2] = false;
/*
arry allowing number type only
let arr : Array<number>;
arr = [1,2,"abc",true];
arr[0] = 125;
arr[1] = 'xyz';
arr[2]= false; 

*/

/*
arry allowing string type only
let arr : Array<string>;
arr = [1,2,"abc",true];
arr[0] = 125;
arr[1] = 'xyz';
arr[2]= false; 

*/