//Initialize Pop overs

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover',

    })
});

//Initialize toast
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))

//function to display toast with selected optons
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').ariaValueMax;

    var message ="Puchase confrimed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;


//Display toast
var toastBody = document.getElementById('toastBody');
toastBody.textContent = message;
var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
toast.show()
}

function buyTickets() {
    displaySelectedMovieOptions();
}

//JQUERY
//Shrinks header size when the document is scrolled down by 80px
$(document).on("scroll", function () {
    //When the webpage is scrolled down form the top by 50px this if statement will trigger
    if ($(document).scrollTop() > 50) {
        //once the 50px requirement is met add the nav shrink class selector to the same HTML element that has the nav class
        $("nav").addClass("nav-shrink");
        //Adjust the position of the mobile drop menu to accommodate the new hieght decreae 
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //if the webpage has not been scrolled down or is back at the top the nav-shrink class selector is removed form the HTML element with the nav class selector
        $("nav").removeClass("nav-shrink");
        //The margin for the drop menu is now retured to it's original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});


//Close mobile menu when a nvigation link is clicked
$(document).ready(function () {
    //On lcikc when and elment contains just the nav-link class and not the dropdown-toggle and then also close when an element with the class . dropdown--item has been clicked
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function() {
        //Collapse the navbar when link or dropdown item is clicked
        $(".navbar-collapse").collapse('hide');
    });
});