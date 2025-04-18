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

function myFunction2(x, y) { // Add x and y as parameters
    return x * y; // Multiply the two parameters
}

let result = myFunction2(4, 3); // Pass 4 and 3 as arguments
document.getElementById("demo").innerHTML = result; // Display the result