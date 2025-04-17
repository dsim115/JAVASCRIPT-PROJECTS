function updateMessage() {
    // Assigning values to two variables
    let name = "David";
    let greeting = "Hello";

    // Using document.getElementById to update an element on the page
    document.getElementById("message").innerText = greeting + ", " + name + "!";
}
// Adding an event listener to call the function when the page loads

function myFunction(){
    var sentence = "I am learning Javascript";
    sentence += " It is fun!";
    document.getElementById("Concatenate").innerHTML = sentence;
}