var a=require("readline-sync")
num=a.question("enter the number:")

var sum=0;
for (let i=1;i<=num;i++){
    num2=a.questionInt("enter num3:")
    sum=sum+num2
   
}
console.log("total sum:",sum)
