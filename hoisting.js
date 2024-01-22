//hoisting
//variable hoisting
/*
console.log(a)
var a=10
//
console.log(a)
let a=10
*/
//functional hoisting
konguclg(5,10)
function konguclg(a,b){
for(i=a;i<b;i++)
{
    if(i%2==0)

    {
        console.log("the number",i,"is even")
    }
    else{
        console.log("the number", i , "is odd")
    }
}
}
