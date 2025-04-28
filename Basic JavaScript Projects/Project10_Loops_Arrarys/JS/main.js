function count_To_Ten(){
    var Digit = "";
    var X = 1;
    while (X <= 10){
        Digit += X + " ";
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//New function
let text = "Hello World!";
let length = text.length;

document.getElementById("demo").innerHTML = length;

//For Loop
var Instruments = ["Guitar", "Piano", "Drums", "Bass", "Violin"];
var Content = "";
var Y;

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_Of_Instruments").innerHTML = Content;
}

//Array Function
function array_Function() {
    var Instruments = [];
    Instruments[0] = "Guitar";
    Instruments[1] = "Piano";
    Instruments[2] = "Drums";
    Instruments[3] = "Bass";
    Instruments[4] = "Violin";
    document.getElementById("Array").innerHTML = "The best instrument is: " + Instruments[0];
}

//Constant Function
function constant_function() {
    const Musical_Instrument = {type: "Guitar", brand: "Fender", color: "black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//Let Function
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

//Retturn Function
function return_function() {
    return 3+3;
}

document.getElementById("Return").innerHTML = return_function();

//Object properties and methods
let car = {
    make: "Dodge",
    model: "Charger",
    year: "2023",
    color: "Red",
    description: function() {
        return "The car is a " + this.year + " " + this.make + " " + this.model + " in " + this.color;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

//Break Statement
let word = ""; // Use 'word' instead of 'text'
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    word += "The number is " + i + "<br>";
}
document.getElementById("Break").innerHTML = word;

//Continue Statement
let text2 = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text2 += "The number is " + i + "<br>";
}
document.getElementById("Continue").innerHTML = text2;