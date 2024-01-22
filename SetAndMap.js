
//SET
//1st example
setExample=new Set(["aiadmk","bjp","congress"])
console.log(setExample)
setExample.add("dmk")
setExample.add("aiadmk")
console.log(setExample)

//for of
setExample=new Set(["apple","orange","banana"])
for (const value of setExample) {
    console.log(value)
    
}

//for in
setExample=new Set(["apple","orange","banana"])
for (const value in setExample) {
    console.log(value)
        
    }


//MAPS
//EXAMPLE 1
mapEg=new Map([
    ["id","21ECR207"]
])
console.log(mapEg)

mapEg=new Map([
    ["id","21ECR207"],["name","VARSHA"]
])
console.log(mapEg)

for ( key in mapEg) {
    console.log(key)
}

for (value of mapEg) {
    console.log(value)
}

console.log(mapEg.has("name"))

//MAP EXERCISE

mapeg=new Map([["id","21ECR207"],["name","VARSHA"]])
console.log(mapeg)
mapeg.set("phone","9385729285")
mapeg.set("age","20")
console.log(mapeg)
mapeg.delete("phone","9385729285")
console.log(mapeg)