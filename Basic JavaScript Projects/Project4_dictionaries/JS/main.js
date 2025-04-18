function my_Dictionary(){
    var Animal = {
        Species: "Dog",
        Color: "Brown",
        Breed: "Boxer",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}