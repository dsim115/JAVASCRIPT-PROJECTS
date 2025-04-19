// Function to demonstrate type coercion
function demonstrateTypeCoercion(input1, input2) {
    return input1 + input2;
}

// Function to update the <p> element
function updateComparison() {
    const comparisonElement = document.getElementById("comparison");
    comparisonElement.innerHTML = 
        demonstrateTypeCoercion("10", 20) + "<br>" + demonstrateTypeCoercion(10, 20);
}

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0; // NaN
}

function my_Function2() {
document.getElementById("Test2").innerHTML = isNaN("This is a string"); // true
}

function my_Function3(){
    document.getElementById("Test3").innerHTML = isNaN("007"); // false
}

document.write(2E310); // 2*10^210
document.write("<br>");
document.write(-3E310); // -3*10^310
document.write("<br>");
document.write(10 > 2); // true
document.write("<br>");
document.write(10 < 2); // false
document.write("<br>");
document.write(10 == 10); // true'
document.write("<br>");
document.write(10 == 9); //false


console.log(2 + 2); // 4
console.log(10<2); // false

x =10;
y=10;
a="10";
b="twenty";
document.write(x===y); // true
document.write(x===a); // false
document.write(x===b); // false

document.write("<br>");
document.write(5 > 2 && 10 > 4); // true
document.write("<br>");
document.write(5 > 10 && 10 > 4); // false
document.write("<br>");
document.write(5 > 2 || 10 > 4); // true
document.write("<br>");
document.write(5 > 10 || 10 > 4); // true
document.write("<br>");


function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10); // false
}