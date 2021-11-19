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
let sum = 0





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





// 5.0 JAVASCRIPT LOGICAL OPERATORS
// can be && or || or !
 if (3<4 && 5>2) {
     let  num  = "Some Text..."
 }


// 6.0 JAVASCRIPT FUNCTIONS

  const squareRoot =  (num) =>  num*num
  const multiply = (a) => (b) => a*b;



// 7.0 JAVASCRIPT DATA STRUCTURES
// Arrays
 let arrVar = [1,2,3,4,5]
 //foreach
const forEachArr = arrVar.forEach(i => sum+=squareRoot(i) )
//map
const mapArr = arrVar.map(i => squareRoot(i) )
//filter
const filterArr = arrVar.filter(i => i>3)
//reduce
const reduceArr = arrVar.reduce((sum,i) => {
    return sum+i
},0);

//debug


const flattened = [[0,1],[2,3],[4,5]].reduce((accumulator,innerArray) => {
    return accumulator.concat(innerArray)},[]);



//  Object
let userObject1  = {
    userName : "Rufaro",
    age : 33
};

//referance type
let object1 = {value : 10 };
let object2 = object1
let object3 = {value: 10 };
// object1 == object3 will return false because these are not values but referances to objects and they will always be differant with each object

// context vs scope
// instantiation
class Player {
    constructor(name, type){
        this.name = name
        this.type = type
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and this is my type ${this.type} `)
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name,type)
    }
    play(){
        console.log(`Playing:  ${this.name} of type: ${this.type} `)
    }
}

const wizard1 = new Wizard("Shelly", "Healer")
const wizard2 = new Wizard("Shawn", "Magic")
//wizard1.introduce()
//wizard2.play()

//8.0 JAVASCRIPT looping
//for

for (let i = 0; i < arrVar.length; i++) {
    sum += arrVar[i];
    
}






