function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  
}

const myFather = new Person("David", "Simental", "58", "Brown");

document.getElementById("demo").innerHTML =
"My father is " + myFather.age + "."; 


//NESTED FUNCTIONS
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        let Starting_point = 9; // Use 'let' for modern JS
        function Plus_one() {
            Starting_point += 1;
        }
        Plus_one();
        return Starting_point;
    }
}