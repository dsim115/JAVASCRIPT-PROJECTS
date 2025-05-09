function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "The text has changed!";
}

// First canvas
var canvas1 = document.getElementById("ID_Name");
var ctx1 = canvas1.getContext("2d");
ctx1.beginPath();
ctx1.arc(95, 50, 40, 0, 2 * Math.PI);
ctx1.stroke();

// Second canvas
const canvas2 = document.getElementById("myCanvas");
const ctx2 = canvas2.getContext("2d");

const grd = ctx2.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx2.fillStyle = grd;
ctx2.fillRect(20, 20, 150, 100);