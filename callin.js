function as(name,callback){
    setTimeout(function(){
   console.log(name)
   callback()
    },2000)
}
function sa(){
console.log("namastae")
}
as("Vanakam",sa)