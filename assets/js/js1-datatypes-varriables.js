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



/**********************************************************************************
 * 
 * EXERCISES
 * 
 * *******************************************************************************/

/*
 * Programming Quiz: First Expression
 
  Write an expression that uses at least three, different, arithmetic operators
  to log the number 42 to the console.
 */
const log42 = () => 3*10+20-8

/*
 * Programming Quiz: Converting Tempatures
 
  The Celsius-to-Fahrenheit formula:
 
     F = C x 1.8 + 32
 
  1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
  2. Log the fahrenheit variable to the console
 *
 */

const celsiusToFahrenheit = (celsius) => celsius*1.8+32

/*
 * Programming Quiz: Console log your Favorite Food 
 */
const favFood = 'Fish'


/*
 * Programming Quiz: String Equality for All 

Fix the right side expression so it evaluates to true.
 */

let answer = "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal";

/*
 * Programming Quiz: All Tied Up 

Build a single string that resembles the following joke.

Why couldn't the shoes go out and play?
They were all "tied" up!

Your joke should take the format of a question and answer. The first line should be a question and the second line should be an answer.
 */
const allTiedUp = `Why couldn't the shoes go out and play?
They were all "tied" up!`


/*
 * Programming Quiz: Yosa Buson 

Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.

Blowing from the west
Fallen leaves gather
In the east.


Each string should be printed on its own line.
 */

const haiku = `Blowing from the west
Fallen leaves gather
In the east.`

/*
 * Programming Quiz: What's my Name? 

Create a variable called fullName and assign it your full name as a string.
 */

const fullName = 'Rufaro Haruperi'

/*
 * Programming Quiz: Out to Dinner 

Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.

Print the total to the JavaScript console.

Hint: 15% in decimal form is written as 0.15_._

TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.

 */

const bill = 10.25 + 3.99 + 7.15
const tip = bill*0.15
const total = bill+tip


/*
 * Programming Quiz: MadLibs 
  
Mad Libs is a word game where players have fun substituting words for blanks in a story.

"The Intro to JavaScript course is __________. James and Julia are so __________. I cannot wait to work through the rest of this __________ content!"

  1. Declare a madLib variable
  2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
  
  'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 */

const adjective1 = 'amazing';
const adjective2 = 'fun';
const adjective3 = 'entertaining';

const madlib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`


/*
 * Programming Quiz: One Awesome Message 
 
  1. Create the following variables:
      - firstName
      - interest
      - hobby
  2. Create a variable named awesomeMessage and set it to an awesome message using
      string concatenation and the variables above.
  3. Log the awesomeMessage variable to the console.
 


  Notes:
  - The `awesomeMessage` should have the format of:
    Hi, my name is _____. I love _____. In my spare time, I like to _______.
 
  - Using the above as an example, firstName would have been assigned to "Julia",
    interest to "cats", and hobby to "play video games" to produce the message:
    Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 
  - Be sure to include spaces and periods where necessary!
 */

const firstName2 = 'Julia'
const interest = 'cats'
const hobby = 'play video games'
const awesomeMessage = `Hi, my name is ${firstName2}. I love ${interest}. In my spare time, I like to ${hobby}.`


/*****************************CONSOLE OUTPUT*************************************/
