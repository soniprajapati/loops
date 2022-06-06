
var a=require("readline-sync")
num=a.questionInt("enter number:")

let lis=[]
for (let i=1;i<=num;i++){
    num1=a.questionInt("enter num1:")
    lis.push(num1)
}
const array=lis;

let max = array[0], min = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) { max = array[i]; }

    if (array[i] < min) { min = array[i]; }
}
console.log("max = " + max);
console.log("min = " + min);