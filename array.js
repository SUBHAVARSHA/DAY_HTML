/*
arr=[10,20,30]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//example 2
arr=[10,20,20.5]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}


//example 3
arr=[10,20,true,false]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}


//example 4
arr=[10,"String","kongu",20,true,false]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//exmample 5
//for in loop
arr=[10,"String","kongu",20,true,false]
for (const index in arr) {
    console.log("The value present in",index,"is", arr[index])    
}

//to access an elt directly we use 2 loops i.e., for of loop and for each loop



//for of loop
arr=[10,"String","kongu",20,true,false]
for (const value of arr) {
    console.log(value)    
}


//for each loop

//example 1
arr=[10,"String","kongu",20,true,false]
arr.forEach(value=> {
    console.log(value)
});
*/


//example 2
var kongu=new Object()
kongu["fees"]=100000
kongu["accomodation"]="Excellent"
kongu["food"]="Pretty Decent"
kongu["hostelCount"]=10
console.log(kongu)
//for in example
for (key in kongu) {
   console.log(key,kongu[key])
}

//for each example
kongu.forEach(key,element => {
    console.log(key,element)
});