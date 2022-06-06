var a=require("readline-sync")
num=a.question("enetr any number:")

var count=0;
var i=0;
while (i<=num){
    if (num%i==0){
        count=count+1
    }
    i++
}

if (count==2){
    console.log(num,"prime no.")
}
else{
    console.log(num,"not a prime no.")
}

