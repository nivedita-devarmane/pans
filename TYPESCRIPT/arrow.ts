/*Arrow Function */

function multiplyDemo1(x, y) {
    return x * y;
}
let res1 = multiplyDemo1(10, 20);
console.log("Result :" + res1);
var multiplyDemo2 = (x, y) => x * y;
let res2 = multiplyDemo2(20, 30);
console.log("Result :" + res2);

class ABC {
    name = "SunSoft";
    /* without Arrow function */
    /*
    display() {
        var xyz = this;
        setTimeout(function () {
            console.log(xyz.name)
        }, 3000);
    } */

    /*With Arrow Function */
    display(){
        setTimeout(()=>{console.log(this.name)},3000);
    }

}
let a1 = new ABC();
a1.display();