var a=require("readline-sync")
num=a.question("enter any number:")


for (let i=1;i<=10;i++){
    console.log(num,"x",i,"=",num*i)
}