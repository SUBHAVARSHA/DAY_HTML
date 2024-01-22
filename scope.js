/*
//global scope
sum=0;
for(i=0;i<10;i++)
{
    sum+=i;
}
console.log(sum)

//
sum=0
i=0




while(i<10)
{
    sum+=i
}
console.log(sum)


//LOCAL SCOPE
for(var i=0;i<5;i++){
    console.log(i+11)
}
console.log(i)
*/

//BLOCK SCOPE
var a=10
console.log(a)
{
    let a=5;
    let b=5;
    console.log(a)
    console.log(b)
}
console.log(a)