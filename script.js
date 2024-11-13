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

headButton.addEventListener('click', function() {
text.innerHTML = "The tracks lead you deeper into the subway tunnels. You encounter a scavenger who is hostile. Double click picture to fight OR seach the page for supplies ";
start.style.display = "none";
choiceAimage.style.display ="block";
exploreButton.style.display="none";
headButton.style.display="none";
});

choiceAimage.addEventListener('dblclick', function(){
    choiceAimage.style.display ="none";
    text.innerHTML = "You knock them out. You are safe for now"
    choiceA1image.style.display ="block";
});

pizza.addEventListener("mouseenter", function(){
    choiceAimage.style.display ="none";
    text.innerHTML = "You found supplies. You make it another day"
    choiceA2image.style.display ="block";
});




exploreButton.addEventListener("click", function(){
    
    text.innerHTML = "SORRY THIS CHOICE IS STILL UNDER CONSTRUCTION"
   
});
