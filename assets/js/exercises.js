// Program a Calculator
const calculator = (num1,sym,num2) => {
    switch (sym) {
        case "+":
            return num1+num2
            break;
        case "-":
            return num1-num2
            break;
        case "*":
            return num1*num2
            break;
        case "/":
            return num1/num2
            break;
    
        default:
            break;
    }
}
const ans = calculator(10,"/",2)


/************************************************************************************************************************************************************************** */
// using this array,
let array = ["Banana", "Apples", "Oranges", "Blueberries"]
// 1. Remove the Banana from the array.
array.shift()
// 2. Sort the array in order.
array.sort()
// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi")
// 4. Remove "Apples" from the array.
array.shift()
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse()
//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]

// using this array,
const array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

let access = array2[1][1][0]

/************************************************************************************************************************************************************************** */
// Create an object and an array which we will use in our facebook exercise. 
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
const facebook = {
    username : "haruperi",
    password : "123"
};

// 2. Create an array which contains the object you have made above and name the array "database".
const database = [facebook]

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
let newsfeed = [
    {
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

access = database[0].username



//////////////////////////////////////////////////////////////////////////////////////////

// Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const currentDateTime = () => {

}


const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+' '+time;



console.log()