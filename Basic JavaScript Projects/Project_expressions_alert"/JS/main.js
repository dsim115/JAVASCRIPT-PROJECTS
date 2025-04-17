window.alert("Hello, World!");
var A = "\“Be who you are and say what you feel,"
+ " because those who mind don't matter and those who matter don\'t mind.\”"
+ " - Dr. Seuss";
document.write(A);
document.write("<br>");
var Family = "The Simentals", Dad = "David", Mom = "Tanya", Sister = "Hannah", Sister = "Haley", Wife = "Jordyn";
document.write(Wife);
document.write("<br>");
document.write(3 +4);
document.write("<br>");
function My_First_Function() { //Defining a function and naming it
    var str= "This is my first function!"; //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; //Putting the value of the variable into the HTML elementFromPoint with the "Button_Text" id
}

function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
  }