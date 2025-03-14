// QUESTION 1
// Write a function that displays current date & time in your
// browser.

// ANSWER

/*function dateTime() {
    let time = new Date()
    let currentDate = new Date().getDate()
    let currentTime = new Date().getHours()
    let currentMinute = new Date().getMinutes()

    document.write("<h4>Current Time:</h4>" + "Time:"+ "<br/>" +time + "<br/>" + "Today's Date" + "<br/>" 
    + currentDate + "<br/>" + "Current time:"+ "<br/>" + currentTime + ":" + currentMinute)
}
dateTime();*/

// QUESTION 2
// Write a function that takes first & last name and then it
// greets the user using his full name.

// ANSWER

/*let userFirstName = prompt("Enter Your First Name")
let userLastName = prompt("Enter Your Last Name")

function userGreeting(userFirstName , userLastName){
    alert("Welcome" + " " + userFirstName + " " + userLastName)
}
userGreeting(userFirstName,userLastName)*/

// QUESTION 3
// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// ANSWER

/*document.write("<h1>Sum of 2 numbers</h1>")
let number1 = Number(prompt("Enter your 1st number for the sum"))
let number2 = Number(prompt("Enter your 2nd number for the sum"))

function sumNumbers(number1 , number2) {
    document.write("<h4>Number 1:</h4>" , number1 + "<br/>" + "<h4>Number 2:</h4>" , number2 + "<br/>" +
    "<h4>Sum:</h4>" , number1 + number2)
}

sumNumbers(number1 , number2)*/

// QUESTION 4
// Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// ANSWER

/*let num1 = Number(prompt("Enter your first number"))
let num2 = Number(prompt("Enter your second number"))
let operator = prompt("Enter a operator which calculation you want (+ , - , * , /)")

document.write("<h1>Calculator</h1>")

function sum(num1 , num2 , operator) {
    if(operator == "+"){
        document.write("<h4>First Number:</h4>" , "<br/>" , num1 , "<br/>" , "<h4>Second Number:</h4>" , num2 , "<br/>"
        , "<h4>Operator:</h4>" , operator , "<br/>" , "<h4>Answer:</h4>" , "<br/>" , num1 + num2 );
    }
    if(operator == "-"){
        document.write("<h4>First Number:</h4>" , "<br/>" , num1 , "<br/>" , "<h4>Second Number:</h4>" , num2 , "<br/>"
        , "<h4>Operator:</h4>" , operator , "<br/>" , "<h4>Answer:</h4>" , "<br/>" , num1 - num2 );
    }
    if(operator == "*"){
        document.write("<h4>First Number:</h4>" , "<br/>" , num1 , "<br/>" , "<h4>Second Number:</h4>" , num2 , "<br/>"
        , "<h4>Operator:</h4>" , operator , "<br/>" , "<h4>Answer:</h4>" , "<br/>" , num1 * num2 );
    }
    if(operator == "/"){
        document.write("<h4>First Number:</h4>" , "<br/>" , num1 , "<br/>" , "<h4>Second Number:</h4>" , num2 , "<br/>"
        , "<h4>Operator:</h4>" , operator , "<br/>" , "<h4>Answer:</h4>" , "<br/>" , num1 / num2 );
    }
}
sum(num1 , num2 , operator);*/

// QUESTION 5
// Write a function that squares its argument.

// ANSWER

/*let userSquareNum = Number(prompt("Enter a number to be square"))

function squareMethod(num) {
    let square = num ** 2
    document.write("<h4>Number:</h4>" , userSquareNum , "<h4>Square to be:</h4>" , square)
}

squareMethod(userSquareNum)*/

// QUESTION 6
// Write a function that computes factorial of a number.

// ANSWER

/*let userFictorialNum = Number(prompt("Enter a number for fictorial solution"))

let fictorialResult = 1

function fictorial(userFictorialNum) {
    for (let i = userFictorialNum ; i >= 1; i--){
        fictorialResult *= i
    }
    document.write("<h1>Fictorial</h1>" , "<h4>Definition:</h4>" ,
    "The factorial method is a mathematical function that multiplies a number by" + 
    "every number that comes before it. It's used to solve counting problems that involve ordering objects." 
    + "<br/>" , "<h4>Solution:</h4>" , fictorialResult
    )
}

fictorial(userFictorialNum)*/

// QUESTION 7
// Write a function that take start and end number as inputs
// & display counting in your browser

// ANSWER

/*let startNum = Number(prompt("Enter a number for start the counting"))
let endNum = Number(prompt("Enter a number for end the counting"))

function counting(startNum , endNum){
    document.write("<h1>Counting:</h1>" , "<br/>" , "<h4>Start Number:</h4>" , "<br/>" , startNum , "<br/>" ,
            "<h4>End Number:</h4>" , "<br/>" , endNum , "<br/>" , "<h4>Count:</h4>")
    if(startNum < endNum){
        for(let i = startNum ; i <= endNum ; i++){
            document.write("<br/>" ,i , "<br/>");
        }
    }
}
counting(startNum , endNum)*/

// QUESTION 8
// Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// ANSWER

// let baseSquare = calculateSquare(base)
// let perpendicularSquare = calculateSquare(perpendicular)

// function calculateHypotenuse(base , perpendicular) {
//     function calculateSquare(numbers) {
//         return numbers * numbers
//     }
// }

// calculateHypotenuse()

// QUESTION 9
// Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// ANSWER

// document.write("<h1>Calculates the area of a rectangle</h1>")

// let width = Number(prompt("Enter a width of a rectangle"))
// let height = Number(prompt("Enter a height of a rectangle"))

// function calculateArea(width , height) {
//     let area = width * height
//     return area
// }

// let resultArea = calculateArea(width , height)
// document.write(resultArea)

// QUESTION 10
// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// ANSWER

/*document.write("<h1>Palindrome Checker</h1>")

let userWord = prompt("Enter a palendrome word (Mom - Mom)").toLowerCase()

function palindromeChecker(palindromeWord) {
    let splitWord = palindromeWord.split("")
    let reversedWord = splitWord.reverse()
    let joinWord = reversedWord.join("")
    if(joinWord == palindromeWord){
        document.write("<h4>Word:</h4>" + palindromeWord + "<h4>Output:</h4>" + 
        palindromeWord + " is palindrome word")
    }
    else{
        document.write("<h4>Word:</h4>" + palindromeWord + "<h4>Output:</h4>" +
        palindromeWord + " is not a palindrome word")
    }
}

palindromeChecker(userWord)*/

// QUESTION 11
// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// ANSWER

/*let userStr = prompt("Enter your paragraph to convert in Title Case \nJust like that (the quick brown fox) \nShown you like this(The Quick Brown Fox)")

let arrayJoin = [] 

function titleCasePara(userStr) {
    let arrayString = userStr.split(" ")
    for (let i = 0 ; i < arrayString.length ; i++){
        arrayJoin.push(arrayString[i][0].toUpperCase() + arrayString[i].slice(1).toLowerCase())
    }
}

titleCasePara(userStr)
document.write("<h1>Title Case</h1>" , "<h4>Your Paragraph:</h4>" , userStr , "<h4>Convert to Title Case:</h4>" , arrayJoin.join(" "));*/

// QUESTION 12
// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// ANSWER

/*let longString = "Web Development Tutorial";

function longestString(str) {
  let words = str.split(" ");
  let firstLongest = words[0].length;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > firstLongest) {1
      firstLongest = words[i].length;
      document.write("The longest word is " + words[i])

    }
}
  console.log(firstLongest);
}

longestString(longString);*/

// QUESTION 13
// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// ANSWER

/*function count(str, letter) {
    let find = 0;   
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            find += 1;
        }
    }
    return find
}
let str = "JSResourceS.com";
let letter = "o"
let output = count(str, letter);
document.write("The occurence of o in this string is " + output)*/

// QUESTION 14
// The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// ANSWER

/*let radiusOfCircle = Number(prompt("Enter a number \nFind out the circumference"))

function calcCircumference(radiusOfCircle) {
    let resultOfRadius = 2 * 3.142 * radiusOfCircle
    document.write("<h1>Radius of Circle</h1>" + "<br/>" + "<h4>Definition:</h4>" +
    "Radius of a circle is the distance from the center of the circle to any point on it's circumference." + "<br/>" + 
    "<h4>Your given number:</h4>" + radiusOfCircle + "<br/>" + "<h4>Circumference:</h4>" + "<br/>" + "The circumference is " + resultOfRadius)
    
}

function calcArea(radiusOfCircle) {
    let resultOfArea = 3.142 * radiusOfCircle * radiusOfCircle
    document.write("<h1>Radius of Area</h1>" + "<br/>" + "<h4>Definition:</h4>" +
        "Radius of area " + "refers to the distance from the center of a circle to its edge" + "<br/>" + 
        "<h4>Your given number:</h4>" + radiusOfCircle + "<br/>" + "<h4>Circumference:</h4>" + "<br/>" + "The circumference is " + resultOfArea)
    
}

calcCircumference(radiusOfCircle)
calcArea(radiusOfCircle)*/