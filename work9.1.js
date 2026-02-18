let a = "hello";
let b = "ehllo";

let txt1= a.split("").sort().join("");
let txt2 = b.split("").sort().join("");


console.log(txt2);



let num = [2,4,6]

let newnum = num.map(fun)
function fun(n){
  return n*2
}
console.log(newnum)

let person = {
  name : "Akhil",
  age : 25,

  sayhello : function(){
    console.log(`Your name is ${person.name}`)

  }
  
}
person.sayhello()