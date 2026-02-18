// let num=9;
// let i = 2;
// for (i=2;i<=(num-1);i++){
//     if(num%i==0){
//         console.log(`The ${num} is  not prime`);
//         isprime = false
//         break;
    
//     }
//     if(isprime){
//         console.log(`The ${num} is prime`)
//     }
    
// }


// prob 2 amstrong

// let num = 407;
// let value = num.toString();
// let sum=0;

// for( i=0;i<value.length;i++){
//    sum+= value[i]**3;
   
// }
// newnum=parseInt(sum);
// if(newnum==num){
//     console.log("the num is amstrong")

// }else{
//     console.log("not amstrong")
// }


let num = 121;
let a=num.toString();
let sum="";
  for(i=a.length-1;i>=0;i--){
    sum+=a[i];
  }
  let newnum=parseInt(sum);

  if (newnum==num){
    console.log("Plindrome");

  }
  else{
    console.log("Not palindrome");
  }



