// var a,j;
// var sum="";
// for (a=1;a<=5;a++){
//     for (j=1;j<=a;j++){
//         sum=sum+j
//     }
//     console.log(sum)
//     console.log()
// }

let n = 0; 
let string = "";
for(let i = 5; i >n; i--) { 
  for(let j = 5; j > n; j--) { 
    string += i;
  }
  string += "\n";
}
console.log(string);