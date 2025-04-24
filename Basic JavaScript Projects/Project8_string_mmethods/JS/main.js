//Concat
function full_Sentence(){
    var part_1 = "I am ";
    var part_2 = "learning ";
    var part_3 = "to ";
    var part_4 = "concatenate ";
    var part_5 = "these ";
    var part_6 = "strings.";
    var whole_sentence = part_1.concat(part_2,part_3,part_4,part_5,part_6);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Slice
function slice_Method(){
    var Sentence= "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}





let text = "Mr. Blue has a blue house"
let position = text.search("Blue");

document.getElementById("search").innerHTML = position;


function string_Method(){
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method(){
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}


let num = 5.56789;
let n = num.toFixed(2);

document.getElementById("demo2").innerHTML = n;



let word = "Hello World!";
let result = word.toUpperCase(); // Use the correct variable and apply toUpperCase()

document.getElementById("demo1").innerHTML = result;