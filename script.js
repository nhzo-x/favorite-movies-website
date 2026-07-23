const title = document.querySelector("h1");

title.addEventListener("click", function() {
    title.textContent = "You found my hidden message! Thanks for visting my website! This is my first one, so please excuse any glitches or bugs!"
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
    {
        title: "The Breakfast Club",
        year: "1985",
        image: "images/bfclub.jpg"
    },

    {
        title: "Friday",
        year: "1995",
        image: "images/icecube.jpg"
    },

    {
        title: "Beverly Hills Cop",
        year: "1984",
        image: "images/bhcop.jpg"
    },

    {
        title: "To Wong Foo, Thanks for Everything! Julie Newmar",
        year: "1995",
        image: "images/toowongfoo.jpg",
    },

    {
        title: "Romy and Michele's High School Reunion",
        year: "1997",
        image: "images/romymichele.jpg"
    },

    {
        title:"Scarface",
        year: "1983",
        image: "images/tonymontana.jpg"
    },

    {
        title: "The Conjuring",
        year: "2013",
        image: "images/theconjuring.jpg",
    },

    {
        title: "My Cousin Vinny",
        year: "1992",
        image: "images/vinny.jpg",
    },

    {
        title: "Bring It On",
        year: "2000",
        image: "images/iton.jpg",
    },

    {
        title: "Superstar",
        year: "1999",
        image: "images/superstarmarry.jpg",
    },

    {
        title: "The Truman Show",
        year: "1998",
        image: "images/trumanshow.jpg",
    },

    {
        title: "Scream",
        year: "1996",
        image: "images/scream.jpg",
    },

    {
        title: "Austin Powers",
        year: "1997",
        image: "images/austinpowers.jpg",
    },

    {
        title: "Ferris Bueller's Day Off",
        year: "1986",
        image: "images/ferris.jpg",
    },

    {
        title: "Get Out",
        year: "2017",
        image: "images/getout.jpg",
    },

    {
        title: "Black Panther",
        year: "2018",
        image: "images/blackpanther.jpg",
    },

    {
        title: "Michael",
        year: "2026",
        image: "images/michael3.jpg",
    },

    {
        title: "Erin Brockovich",
        year: "2000",
        image: "images/erin.jpg",
    },

    {
        title: "The Shawshank Redemption",
        year: "1994",
        image: "images/shawshank.jpg",
    },
    
    {
        title: "Dumb and Dumber",
        year: "1994",
        image: "images/dumb.jpg",
    },

    {
        title: "Forrest Gump",
        year: "1994",
        image: "images/forrestgump.jpg",
    },

    {
        title: "Dog Day Afternoon",
        year: "1975",
        image: "images/dogday.jpg",
    },

    {
        title: "The Karate Kid",
        year: "1984",
        image: "images/karate.jpg",
    },

    {
        title: "Superbad",
        year:"2007",
        image: "images/superbad.jpg",
    },

    {
        title: "Jerry Maguire",
        year: "1996",
        image: "images/jerry.jpg",
    },

    {
        title: "Mortal Komabt II",
        year: "2026",
        image: "images/mk.jpg",
    },

    {
        title: "School of Rock",
        year: "2003",
        image: "images/rock.jpg",
    },

    {
        title: "Pretty In Pink",
        year: "1986",
        image: "images/ducky.jpg",
    },

    {
        title: "Rush Hour",
        year: "1998",
        image: "images/rushhour.jpg",
    },

    {
        title: "Trading Places",
        year: "1983",
        image: "images/trading.jpg",
    },

    {
        title: "Weapons",
        year: "2025",
        image: "images/weapons.jpg",
    },
];

const loadingMessage = [
    "Say Hello to my Loading Message!",
    "Life moves pretty fast... Except for this loading message.",
    "Sincerely yours... The Loading Message. ",
    "Who you gonna call? Load-faster!",
    "I ain't afraid of no loading message!",
    "Get in loser, we're loading a message!",
    "Life is like a loading message. You never know what's gonna to pop up.",
    "I'm gonna load him a message he can't refuse.",
    "SHOW ME THE LOADING MESSAGE!"
];

const button = document.getElementById("movieButton");

button.addEventListener("click", function(){

    document.getElementById("movieResult").textContent = "";
    document.getElementById("moviePoster").style.display = "none";
    document.getElementById("loadingMessage").textContent = "";

    let randomMessage = loadingMessage[Math.floor(Math.random() * loadingMessage.length)];
    let randomMovie = movies[Math.floor(Math.random() * movies.length)];

    document.getElementById("loadingMessage").textContent = randomMessage;
    document.getElementById("loadingMessage").style.animation = "fadeIn 0.8s ease forwards";


    setTimeout(function(){

        document.getElementById("movieResult").textContent =
        "Tonight you should watch: " + randomMovie.title + " (" + randomMovie.year + ")";

        document.getElementById("movieResult").style.animation = "none";
        document.getElementById("movieResult").offsetHeight;
        document.getElementById("movieResult").style.animation = "fadeIn 0.8s ease forwards";

    }, 2000);


    setTimeout(function(){

        document.getElementById("moviePoster").src = randomMovie.image;
        document.getElementById("moviePoster").alt = "Movie poster for " + randomMovie.title;
        document.getElementById("moviePoster").style.display = "block";
        document.getElementById("moviePoster").style.animation = "fadeIn 0.5s ease forwards";

    }, 2500);

});


