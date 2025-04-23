//Global functions
var X = 10;
function Add_numbers_1(){
    document.write(20 + X + "<br>"); // Corrected to use <br> for a line break
}
function Add_numbers_2(){
    document.write(X + 100 + "<br>"); // Corrected to use <br> for a line break
}
Add_numbers_1();
Add_numbers_2();

//Local Variable

function Add_1(){
    var Y = 10;
    console.log(20 + Y); 
}
function Add_2(){
    var Y = 20;
   console.log(Y + 100);
}
Add_1();
Add_2();

function get_Date(){
    if(new Date().getHours() <6){
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function if_State(){
    if(10 > 5){
        document.write("10 is greater than 5" + "<br>");
    }
}
if_State();


function Age_Function () {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
Age_Function();


function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "it is afternoon.";
    }
    else { 
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
    
}
Time_function();