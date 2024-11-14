// html button elements
let  exploreButton = document.querySelector('.explore-button');
let headButton = document.querySelector('.head-button');


// html content elements
let text = document.querySelector('.text');
let pizza = document.querySelector('h2');

// html images elements
let start = document.querySelector('.startSubway');
    
let choiceAimage = document.querySelector('.choiceAimage');
    choiceAimage.style.display ="none";
let choiceA1image = document.querySelector('.choiceA1image');
    choiceA1image.style.display ="none";
let choiceA2image = document.querySelector('.choiceA2image');
    choiceA2image.style.display ="none";
let choiceA3image = document.querySelector('.choiceA3image');
    choiceA3image.style.display ="none";

headButton.addEventListener('click', function() {
text.innerHTML = "You go inside and start feeling hungry. You hear a loud noise. Double click picture to Investigate OR stay where you are and search the page for food ";
start.style.display = "none";
choiceAimage.style.display ="block";
exploreButton.style.display="none";
headButton.style.display="none";
});

choiceAimage.addEventListener('dblclick', function(){
    choiceAimage.style.display ="none";
    text.innerHTML = "You see a shining light deep in the cave and the chanting sounds grow louder as you approach you feel a sharp pain in your head everything goes dark"
    choiceA1image.style.display ="block";
});

pizza.addEventListener("mouseenter", function(){
    choiceAimage.style.display ="none";
    text.innerHTML = "You found supplies. You make it another day"
    choiceA2image.style.display ="block";
});




exploreButton.addEventListener("click", function(){
    start.style.display = "none";
    exploreButton.style.display="none";
headButton.style.display="none";
    text.innerHTML = "You can't see go find things on the page to make fire or click the up key to continue wandering"
    choiceA3image.style.display ="block";
});
