// 1.0 JAVASCRIPT TYPES

//1.1 Numbers
const numbers = () => 5*3

//1.2 Strings
const firstName = "Rufaro"

//1.3 Boolean
const isMarried = true

//1.4 Undefined
let varName1

//1.5 Null
let varName2  = null

//1.6 Symbol
let varSymbol  = Symbol("id")

//1.6 Objects
let userObject  = {
    userName : "Rufaro",
    age : 33
};



// 2.0 JAVASCRIPT COMPARISON
// 3!=4
// 3===3
// 3>2
// 3<4
// 3>=2
// 3<=4

// 3.0 JAVASCRIPT VARIABLES
const constNumber = 1988
let varName = "Name"


// 4.0 JAVASCRIPT FLOW CONTROL - CONDITIONALS
// if 
const varIf = false
let varTrue = ""
let varFalse = ""
const ratingVar = 3
let ratingStar = ""

if (varIf){
    varTrue = "its TRUE"
}

// if else
if (varIf) {
    varTrue = "its TRUE"
} else {
    varFalse = "its TRUE"
}

// ternary
 varIf === true ? varTrue = "its TRUE" : varFalse = "its TRUE"

 //Switch
 switch (ratingVar) {
     case 1:
         ratingStar = "One Star"
         break;
    case 2:
         ratingStar = "Two Star"
         break;
    case 3:
         ratingStar = "Three Star"
         break;
    case 4:
         ratingStar = "Four Star"
         break;
    case 5:
         ratingStar = "Five Star"
         break;
 
     default:
        ratingStar = "Zero Star"
         break;
 }


console.log(ratingStar)

