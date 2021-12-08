// 1. Write a JavaScript program that accept two integers and display the larger.

const largerNum = (num1, num2) => num1 > num2 ? num1 : num2

// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

const displaySign = (num1, num2, num3) => num1*num2*num3 >= 0 ? "+" : "-"

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

const sortNums = (num1, num2, num3) => {
    
    if (num1>num2 && num1>num3)
{
        if (num2>num3)
        {
            console.log(num1 + ", " + num2 + ", " +num3);
        }
        else
        {
            console.log(num1 + ", " + num3 + ", " +num2);
        }
}
else if (num2>num1 && num2 >num3)
{
        if (num1>num3)
        {
             console.log(num2 + ", " + num1 + ", " +num3);
        }
        else
        {
             console.log(num2 + ", " + num3 + ", " +num1);
        }
}
else if (num3>num1 && num3>num2)
{
        if (num1>num2)
        {
            console.log(num3 + ", " + num1 + ", " +num2);
        }
        else
        {
            console.log(num3 + ", " + num2 + ", " +num1);
        }
}
}

//sortNums(0, -1, 4)


// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

const biggestNum = (num1, num2, num3, num4, num5) => {
    if (num1>num2 && num1>num3 && num1>num4 && num1>num5 )
    {return num1}
    else if (num2>num1 && num2>num3 && num2>num4 && num2>num5 )
    {return num2}
    else if (num3>num1 && num3>num2 && num3>num4 && num3>num5 )
    {return num3}
    else if (num4>num1 && num4>num2 && num4>num3 && num4>num5 )
    {return num4}
    if (num5>num1 && num5>num2 && num5>num3 && num5>num4 )
    {return num5}
}


// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

const isOdd = (a,b) => {
    for (let i = a; i < b; i++){
        if (i%2==0) {
            console.log(i+" is even")
        } else {
            console.log(i+" is odd")
        }   
    }
}


// 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. Go to the editor 


const studentGrades = [
    {name : 'david',
     mark : 80},
    {name : 'Vinoth',
    mark :  77},
    {name : 'Divya', 
    mark : 88},
    {name : 'Ishitha',
    mark : 95},
    {name : 'Thomas',
    mark : 68}
]


//console.log(studentGrades[0].mark)
const getAverage = (studentGrades) => {
    let sum = 0
    
    studentGrades.forEach(i => {
        sum += i.mark
    });

    let averageGrade = sum/studentGrades.length
    return () => {
        if (averageGrade < 60 )
        {return "F"}
        else if (averageGrade < 70 )
        {return "D"}
        else if (averageGrade < 80 )
        {return "C"}
        else if (averageGrade < 90 )
        {return "B"}
        else if (averageGrade < 100 )
        {return "A"}
        else
        {return "Error"}
    }
}

const getGrade = getAverage(studentGrades)








// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"


const isMultipleOf3and5 = (a,b) => {
    for (let i = a; i < b; i++){
        if (i%3==0 && i%5==0) {
            console.log(i+"FizzBuzz")
        } else if (i%3==0) {
            console.log(i+"Fizz")
        } else if (i%5==0) {
            console.log(i+"Buzz")
        } else {
            console.log(i)
        }   
    }
}


// 8. According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers. 

const getHappyNum = (num) => {
    let square = 0 
let happyNum = 0
let num1 = 0
let num2 = 0
let stringNum = ''
    if (num<10)
    {num = num**2}

    stringNum = num.toString()
    num1 = parseInt(stringNum.charAt(0))
    num2 = parseInt(stringNum.charAt(1))
    happyNum = num1**2 + num2**2

    if (happyNum == 1) {
        return " is a happy number"
    } else {
        getHappyNum(happyNum)
    }

}

// 9. Write a JavaScript program to find the armstrong numbers of 3 digits. 
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

const isArmstrong = (num) => {
    let sNum = num.toString()
    let sum = 0

    for (let i = 0; i < sNum.length; i++) {
        sum += parseInt(sNum.charAt(i))**3  
    }

    if (sum === num) {
        return true
    } else {
        return false
    }
   

}

// 10. Write a JavaScript program to construct the following pattern, using a nested for loop. 

// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

const createTriangle = (baseLength) => {
    let x,y,chr
    for(x=1; x <=baseLength+1; x++)
        {
            for (y=1; y < x; y++)
                {
                     chr=chr+"*"       
                }
            console.log(chr);
            chr='';    
        }
};




// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

const getGCD = (num1, num2) =>{
    let gcd = 0
    if (num1>num2) {
        for (let i = 0; i < num1; i++) {
            if (num1%i==0 && num2%i==0) {
                gcd = i
            } 
        }
    }

    else {
        for (let i = 0; i < num2; i++) {
            if (num1%i==0 && num2%i==0) {
                gcd = i
            } 
        }
    }
   return gcd
}

// 12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

const sumMultipleOf3and5 = (num) => {
    let sum = 0
    for (let i = 0; i < num; i++){
        if (i%3==0 && i%5==0) {
            sum +=i
        } 
    }

    return sum
}


const createChessBoard = () => {
    const size = 8;

    let board = "";

    for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
        board += " ";
        else
        board += "#";
    }
    board += "\n";
    }

    return board
}

console.log(createChessBoard())




   