function doMath() {
    let result = 5 + 3;
    document.getElementById("Math").innerHTML = "5 + 3 = " + result;
}
// This function will add two numbers and display the result in the HTML element with id "Math"

function subtraction_Function(){
    var Subtraction = 5 - 2;
    document.getElementById("Sub").innerHTML = "5 - 2 = " + Subtraction;
}

// This function will subtract two numbers and display the result in the HTML element with id "Sub"

function multiplication_Function(){
    var simple_Math = 5 * 5;
    document.getElementById("Multiply").innerHTML = "5 * 5 = " + simple_Math;
}
// This function will multiply two numbers and display the result in the HTML element with id "Multiply"

function division_Function(){
    var simple_Div = 10/2;
    document.getElementById("Divide").innerHTML = "10 / 2 = " + simple_Div;
}

// This function will divide two numbers and display the result in the HTML element with id "Divide"

function more_Math(){
    var all_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Maths").innerHTML = "1 plus 2, times 10, divided by 2, minus 5 equals: " + all_Math;
}
// This function will perform a series of mathematical operations and display the result in the HTML element with id "Maths"

function modulus_Operator(){
    var simple_Mod = 25 % 6;
    document.getElementById("Mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Mod;
}
// This function will calculate the modulus of two numbers and display the result in the HTML element with id "Mod"

function negation_Operator(){
    var x = 10;
    document.getElementById("Neg").innerHTML = -x;
}
// This function will negate a number and display the result in the HTML element with id "Neg"

function increment(){
    var x = 5;
    x++;
    document.write(x);
}
// This function will increment a number and display the result in the document
function decrement(){
    var x = 5;
    x--;
    document.write(x);
}
// This function will decrement a number and display the result in the document

function random(){
    window.alert(Math.random());
}
// This function will generate a random number and display it in an alert box

function random_range(){
    window.alert(Math.random() * 100);
}
// This function will generate a random number between 0 and 100 and display it in an alert box

function showSquareRoot(){
    var x = 16;
    document.getElementById("Square").innerHTML = "The square root of " + x + " is " + Math.sqrt(x);
}