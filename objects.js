
//OBJECTS

//HOW WILL YOU DECALRE OBJECTS
//1st WAY
var customerDetails={
    "name": "Varsha",
    "age": "20",
    "phone": "9385729285",
}
console.log(customerDetails)
customerDetails["id"]="21ECR207",
console.log(customerDetails)


//2nd WAY
var customerDetails={}
customerDetails["id"]="21ECR207",
customerDetails["name"]="VARSHA",
customerDetails["age"]="20",
customerDetails["phone"]="9385729285",
console.log(customerDetails)

//3rd WAY

var kongu=new Object()
kongu["fees"]=100000
kongu["accomodation"]="Excellent"
kongu["food"]="Pretty Decent"
kongu["hostelCount"]=10
console.log(kongu)
//way to access ojects key
console.log(kongu.food)
//Another way to access objects key
console.log(kongu["hostelCount"])