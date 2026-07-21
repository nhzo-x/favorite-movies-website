const title = document.querySelector("h1");

title.addEventListener("click", function() {
    title.textContent = "You found my hidden message! Thanks for visiting my first website. I'm still learning, so there may be a few glitches or bugs along the way!"
});


const ratings = document.querySelectorAll(".rating");
ratings.forEach(function(rating) {
    const stars = rating.querySelectorAll(".star");
    stars.forEach(function(star) {
        star.addEventListener("click",function() {
            const value = this.dataset.value;
            stars.forEach(function(s) {
                if (s.dataset.value<=value) {
                    s.style.color="gold";
                } else {
                    s.style.color = "gray";
                    
                }
               
          
            });
        });
    });

});

const movies =[
    "The Breakfast Club",
    "Friday",
    "Beverly Hills Cop",
    "To Wong Foo, Thanks for Everything! Julie Newmar",
    "Romy and Michele's High School Reunion",
    "Scarface",
    "The Conjuring",
    "My Cousin Vinny",
    "Bring It On",
    "Superstar",
    "The Truman Show",
    "Scream",
    "Austin Powers",
    "Ferris Bueller's Day Off",
    "Get Out",
    "Black Panther",
    "Michael"
];

const loadingMessage = [
    "Say Hello to my Loading Screen!",
    "Life moves pretty fast.. Except for this loading page.",
    "Sincerely yours... The Loading Screen. ",
    "Who you gonna call? Load-faster!"
];

const button = document.getElementById("movieButton");
button.addEventListener("click", function(){
let randomMessage = loadingMessage[Math.floor(Math.random() * loadingMessage.length)];
document.getElementById("loadingMessage").textContent = randomMessage;
document.getElementById("loadingMessage").style.animation = "fadeIn 0.8s ease";

setTimeout(function(){

    let randomMovie = movies[Math.floor(Math.random() * movies.length)];

document.getElementById("movieResult").textContent = 
"Tonight you should watch: "+ randomMovie;
document.getElementById("movieResult").style.animation ="fadeIn 0.8s ease";

}, 2000);

});
