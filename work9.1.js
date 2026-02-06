let txt =""I think this movie was BAD and 100% Stupid! But the Acting was Amazing and 3 actors were great."
console.log(txt);
let find = /\d/.test(txt);

if(find){
    let mark=txt.replace(/\d/g,"******");
    console.log(mark);
    console.log("The statement contains numbers")


}else{
    console.log("The statement contain no numbers")
}
