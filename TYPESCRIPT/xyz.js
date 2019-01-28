"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Emp1 = /** @class */ (function () {
    function Emp1(name, age, salary, designation) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
    }
    Emp1.prototype.display = function () {
        console.log("Name : " + this.name);
        console.log("Age :" + this.age);
        console.log("Salary :" + this.salary);
        console.log("Designation :" + this.designation);
    };
    return Emp1;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, address, name, age, salary, designation) {
        var _this = _super.call(this, name, age, salary, designation) || this;
        _this.id = id;
        _this.address = address;
        return _this;
    }
    Manager.prototype.displayAll = function () {
        _super.prototype.display.call(this);
        console.log("ID :" + this.id);
        console.log("Address :" + this.address);
    };
    return Manager;
}(Emp1));
exports.Manager = Manager;
var emp = new Manager(101, "Raj", 22, 20000, "Tester", "Domlur");
emp.displayAll();
